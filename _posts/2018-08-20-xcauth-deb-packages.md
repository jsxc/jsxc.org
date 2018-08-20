---
author: marcel_waldvogel
title: XMPP Cloud Authentication now available as Debian package
---

Federated services are elegant and powerful. Anybody can select the service they want, using a provider they trust, or even consider operating the service themselves.
*(This is similar to chosing an email service.)*
The power of federated services comes from all the service operators being able to cooperate.
*(I.e., an user with email provider 1 can send mails to provider 2's users and back.)*

It is our dedication to make proliferation of federated services as easy as possible. [XMPP Cloud Authentication](https://github.com/jsxc/xmpp-cloud-auth)'s goal is to make authentication as easy as possible, if there is a [Nextcloud](https://www.nextcloud.com) instance available. The [user information can be used to authenticate XMPP and mail servers, among other things](https://www.jsxc.org/blog/2018/07/24/xcauth-v1.1.0-released.html), greatly simplifying administration.

As of today, you can install *XMPP Cloud Authentication* not only via *git* or from [`.zip` or `.tar.gz` packages](https://github.com/jsxc/xmpp-cloud-auth/releases), but also as the `xcauth` deb package.

The repository is `https://dl.jsxc.org nightly`, with updated installation instructions:

* [Quick installation instructions (aka the "Raspberry Pi install")](https://github.com/jsxc/xmpp-cloud-auth/wiki/raspberry-pi-en)
* [Full installation instructions](https://github.com/jsxc/xmpp-cloud-auth/wiki)
