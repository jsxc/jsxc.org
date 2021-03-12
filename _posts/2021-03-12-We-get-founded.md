---
author: klaus_herberth
title: We get funded. What does it mean?
---

A few days ago we announced on twitter that we are part of the 9th round of the
[Prototype Fund][pf] and get therefore funds from the german [Federal Ministry
of Education and Research][bmbf] (Bundesministerium für Bildung und Forschung)
to develop XMPP group calls. But what does it mean and what can you expect?

It means that we have 6 month to develop a prototype which shows how group calls
can be handled in the XMPP ecosystem. This means you should not expect to have a
full blown XEP at the end of the funding, but you will probably be able to test
group calls in JSXC after that time. Nonetheless the long term goal is to work
with other client developers on such an XEP, but we doubt that this is possible
in 6 month.

Our roadmap looks like this:

1. Implement peer-to-peer group calls. We will look at [XEP-0272] and maybe adopt
   [XEP-0353] for a multi-user environment.
2. Share results and findings of step 1 with the community.
3. Evaluate video bridges, like [Jitsi videobridge][jitsi] and [Kurento], in
   conjunction with [XEP-0340] to develop a concept for larger groups.
4. Implement group calls with support for video bridges.
5. Share results and findings of step 4 with the community.

Splitting the task into smaller steps should increase the possibility of group
calls in a few weeks. We are excited and looking forward for your feedback on
the whole topic.

We would like to thank the ministry, DLR and the prototype fund for this
possibility.

![Logo BMBF]({{site.url}}/images/bmbf.jpeg)

[pf]: https://prototypefund.de
[bmbf]: https://www.bmbf.de
[XEP-0272]: https://xmpp.org/extensions/xep-0272.html
[XEP-0353]:https://xmpp.org/extensions/xep-0353.html
[XEP-0340]: https://xmpp.org/extensions/xep-0340.html
[jitsi]: https://jitsi.org/jitsi-videobridge/
[Kurento]: https://www.kurento.org