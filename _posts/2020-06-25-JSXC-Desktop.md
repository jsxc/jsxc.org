---
author: klaus_herberth
image: /assets/desktop/large-2.png
description: First experimental release of JSXC for your desktop.
---

There are many [XMPP clients][xmpp-clients] out there, but only a few are
working on all platforms (Windows, macOS, Linux) and nearly no one is open
source and has as many features as JSXC. Therefore we present the first
experimental JSXC build for your desktop. Under the hood we are using [Electron]
to support as many operating systems as possible. Currently you are required to
use [BOSH] to connect to your XMPP server, but we plan to change this in one of
the further releases. We are currently specially looking for Apple tester, if
our build is running on Macs as well, because we don't own any Apple devices. So
if you have time, please [download our latest release][release] and write us a
short issue about your experience.

Do you have experience with Electron Builder and Travis? It would be nice if you
could help us to improve the build process. Just open a pull request, or write
an email to [Klaus].

Here are some nice screenshots, taken on Ubuntu Focal:

![Screenshot JSXC Desktop large]({{site.url}}/assets/desktop/large-1.png)
![Screenshot JSXC Desktop large with chat window]({{site.url}}/assets/desktop/large-2.png)
![Screenshot JSXC Desktop small]({{site.url}}/assets/desktop/small-1.png)
![Screenshot JSXC Desktop small with chat window]({{site.url}}/assets/desktop/small-2.png)

[xmpp-clients]: https://xmpp.org/software/clients.html
[Electron]: https://www.electronjs.org
[release]: https://github.com/jsxc/desktop/releases
[Klaus]: https://www.jsxc.org/contact.html