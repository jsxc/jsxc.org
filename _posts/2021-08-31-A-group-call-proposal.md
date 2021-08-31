---
author: klaus_herberth
title: A group-call proposal
---

Half a year ago we were proud to announce that we are part of the 9th round of
the [Prototype Fund][pf] and get therefore funds from the german [Federal
Ministry of Education and Research][bmbf] (Bundesministerium für Bildung und
Forschung) to develop XMPP group-calls. The funding has ended and therefore we
want to share our findings with the community. We used the time to develop a
prototype for group-calls with and without a centralized server. We are not the
only project (Dino, Tigase) which tries to enhance XMPP with group-calls and
therefore this post should be the start of a discussion for a new XEP.

## Introduction
In general there are two different ways to connect multiple users: direct in a
mesh network via peer-to-peer (p2p) connections or mediated with a centralized
server as Multipoint Control Unit (MCU) or Selective Forwarding Unit (SFU). The
advantage of a mesh network is that it does not require any external service and
therefore easily implementable. The disadvantage is that it does not scale well
with many users, since every participant has to establish a connection to every
other participant. This results in a high network usage for up- and download,
higher CPU load and so on. Since most internet providers provide asynchronous
bandwidth this variant is usually only feasible for small groups. For larger
groups a centralized server (videobridge) is needed to distribute all streams
between all participants. This can be done as MCU or SFU. MCU requires only one
outgoing and one incoming connection, but does not allow any flexible layout on
the client side. SFU requires more incoming streams, but this allows to adjust
the layout to the screen size or other requirements like speaker highlighting
and similar.

![Connection modes]({{site.url}}/assets/group-call/connection-mode.png)
*Figure 1: Left a mesh network with p2p connections. In the center a MCU and on the right a SFU.*

## Concept
As mentioned above both a mesh network and a SFU have their advantages and
therefore we implemented both concepts. In this section we want to give a brief
overview of our protocol description.

The general idea is that a group-call is established in the context of a
multi-user chat (MUC) room. Those rooms can be configured in various way, but in
order to establish p2p connections we require that every participant reveal
their real Jabber ID (JID). This means the room has to be non-anonymous. In
addition we think it's a good idea to know who can participate in a call and
therefore we provide group-calls only in closed (members-only) rooms. To
establish one-to-one media sessions between users we use the popular Jingle
([XEP-0166]) XEP.

![Message flow]({{site.url}}/assets/group-call/message-flow-en.png) *Figure 2:
Message flow for a mesh network on the left side and for the use of a SFU on the
right side.*

### Mesh network
To start a group-call in a peer-to-peer variant someone has to propose a new
group-call in the room. Every member who wants to participate should therefore
start to establish connections to all other members. To know who wants to
participate we adopted Jingle Message Initiation ([XEP-0353]) for the use in MUC
rooms (lets call it JMUCI). Similar to the original protocol a new session is
started by sending a PROPOSE message in the room with a random (UUID) session
id. Every member can answer with either a ACCEPT or REJECT message to signal
their acceptance or rejection to the call. Since all messages in a room are
distributed to all members in the same order, we use the order of acceptance as
guidance to select which user starts a new Jingle session with each other. This
helps to establish only one connection between every member tuple. To have a
relation between the MUC session negotiation and Jingle sessions, we require
that every Jingle session id is prefixed with the JMUCI ID.

To end a group-call the user has to terminate all peer-to-peer connections and
send a ENDED message to the MUC room. This message helps other members, which
maybe want to join later, to determine who is active in the call.

This concept is easy to implement by every client which already supports Jingle
one-to-one calls.

### Selective Forwarding Unit
Similar to the mesh network concept we use also use the MUC room to synchronous
the acceptance in a group-call between all members. Therefore we use the same
JMUCI messages with only one difference. The initiator of a group-call first has
to create a new room at the SFU service with a random group-call ID (GCID) and
provide the media (audio and/or video) to the service. The PROPOSE message has
to include this GCID as session id and the used SFU service. Before other users
send their ACCEPT message they have to provide their media to the service,
because a user should request all media from the SFU service for all users which
accepted the call. To save bandwidth a client could also decide to request only
audio streams from all members and video streams only for the most recent
members.

Due to the hard to guess GCID only members of the MUC room are able to join the
session. If a group wants to invite non-members this id could be shared even
with external users. The same is possible with the mesh network concept.

Leaving such a call is similar to leaving a mesh network call. Terminating all
connections and sending a ENDED message to the MUC room.

## Implementation
In the last month we implemented both concepts in JSXC as plugins which can be
tested by everyone in the next feature release. Until than developers are
encouraged to test the [feat-muc-media branch][branch] and give feedback. Both
plugins are disabled by default, since we still consider them as experimental
and don't want to create a standard without the feedback from the XMPP
community.

We also didn't implement the possibility to join an already ongoing group-call
which means that a group-call can only be joined if the user was only while the
PROPOSE message was posted. Due to the limited time we also decided to implement
the SFU service not as XMPP server component. Instead we created a [websocket
server][wss] to control and manage all connections with the [Kurento] media
server. In the current state we do not have any kind of authentication for the
service, so we do not recommend to use it in production.

![Screenshot JSXC group-call]({{site.url}}/assets/group-call/screenshot-conf.png)
*Figure 3: Group call with three "participants" in JSXC.*

## Conclusion
We created and implemented a concept for XMPP group-calls which is easy to
implement by other client developers and works in various scenario's. Further
discussions have to show if those concepts should be transferred to official XEP
or if the need some more refinement.

We would like to thank the ministry, DLR and the Prototype Fund for the
opportunity to implement this concept.

![Logo BMBF]({{site.url}}/images/bmbf.jpeg)

[pf]: https://prototypefund.de
[bmbf]: https://www.bmbf.de
[XEP-0166]: https://xmpp.org/extensions/xep-0166.html
[XEP-0272]: https://xmpp.org/extensions/xep-0272.html
[XEP-0353]:https://xmpp.org/extensions/xep-0353.html
[XEP-0340]: https://xmpp.org/extensions/xep-0340.html
[jitsi]: https://jitsi.org/jitsi-videobridge/
[Kurento]: https://www.kurento.org
[wss]: https://github.com/jsxc/muc-sfu-server
[branch]: https://github.com/jsxc/jsxc/tree/feat-muc-media