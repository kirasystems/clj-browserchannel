# clj-browserchannel-server

Cross-browser compatible, real-time, bi-directional
communication between ClojureScript and Clojure using Google Closure
BrowserChannel.

See also: [clj-browserchannel][0]
[0]:https://github.com/thegeez/clj-browserchannel

## goog.net.BrowserChannel

From the Google Closure API: "A [BrowserChannel][1] simulates a
bidirectional socket over HTTP. It is the basis of the Gmail Chat IM
connections to the server." 
The javascript api of BrowserChannel is open-source and part of the
Google Closure library. The server component is not, as is noted in
the Google Closure book ("Closure: The Definitive Guide by Michael Bolin").

[1]: http://closure-library.googlecode.com/svn-history/r144/docs/closure_goog_net_browserchannel.js.html

## Demo

This project is a server side implementation for BrowserChannel
written in Clojure. The server component is for BrowserChannel version 8.

This enables client->server and server->client communication in
ClojureScript and Closure web apps, without any javascript
dependencies other than the Google Closure [library][2].

[2]: https://developers.google.com/closure/library/

The browserchannel client side runs in at least:

* Chrome
* Firefox
* Internet Explorer 5.5+ (!!)
* Android browser

## Jetty Async

When there are long lasting connections between a client and a
webserver it is desirable to not have a thread per
connection. Therefore this demo runs with with an asynchronous Jetty
adapter. This adapter is compatible with Ring.

The adapter is based on [ring-jetty-async-adapter][3] by Mark McGranaghan.

[3]: https://github.com/mmcgrana/ring/tree/jetty-async

## Netty

The server component can also run on top of Netty, through [Aleph][4].

[4]: https://github.com/ztellman/aleph

## Related and alternative frameworks

* Websockets - Websockets solve the same problems as BrowserChannel,
  however BrowserChannel works on almost all existing clients.
* socket.io - [socket.io][5] provides a similar api as BrowserChannel on
top of many transport protocols, including websockets. BrowserChannel
only has two transport protocols: XHR and forever frames (for IE) in
streaming and non-streaming mode.

[5]: http://socket.io

## Run 
    ;; compile cljs
    lein run -m tasks.build-dev-js
    ;; compile cljs in advanced mode
    lein run -m tasks.build-advanced-js
    lein run -m chat-demo.core

Open two windows at [http://localhost:8080/index.html](http://localhost:8080/index.html) (Advanced compiled)
or [http://localhost:8080/index-dev.html](http://localhost:8080/index-dev.html) and start chatting!

## Run on Heroku
Use the Heroku Clojure [buildpack][7]. 

    heroku config:add BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-clojure.git

This project additionally
requires two build tasks to compile the ClojureScript during deployment.

Enable [user_env_compile][6]: 

    heroku labs:enable user_env_compile -a <YOUR_APP_NAME>

Add this config var:  

    heroku config:add LEIN_BUILD_TASK="run -m tasks.build-dev-js, run -m tasks.build-advanced-js"

[6]: https://devcenter.heroku.com/articles/labs-user-env-compile
[7]: https://github.com/heroku/heroku-buildpack-clojure.git

### Note on disconnections on Heroku
I have found that Heroku does not immediately report when a connection to a client
is broken. If the client is able to reconnect this is not a problem,
as this is supported by the BrowserChannel API. However when you
unplug the internet cable the client cannot reconnect and the server
must timeout the session. Ussually this happens when trying to send the next
heartbeat to the client. On Heruko this does not report an error, even
though there is no connection to the client. So instead of the
connection timeing out on a heartbeat (after seconds/a minute) the
connection will only timeout after the connection is timed out by the
server (4 minutes by default). The Netty implementation has the same
problem on Heroku. Deployments on Amazon Web Services do not have this
problem. 

## Configuration:
See default-options in src/net/thegeez/browserchannel.clj
And the :response-timeout option in src/net/thegeez/jetty_async_adapter.clj

## Todo
- Handling acknowledgements by client and callbacks on queued arrays
- Host prefixes
- Heroku disconnection
- Replace session listeners, possibly with lamina
- Explore other event based Java webservers, such as Netty and Webbit

## Other BrowserChannel implementations
Many thanks to these authors, their work is the only open-source
documentation on the BrowserChannel protocol.

* [libevent-browserchannel-server][libevent]
in C++ by Andy Hochhaus - Has the most extensive [documentation][libevent-doc] on the BrowserChannel protocol
* [browserchannel][ruby] in Ruby by David Turnbull
* [node-browserchannel][node]
in Node.js/Javascript by Joseph Gentle

[libevent]: http://code.google.com/p/libevent-browserchannel-server
[libevent-doc]: http://code.google.com/p/libevent-browserchannel-server/wiki/BrowserChannelProtocol
[ruby]: https://github.com/dturnbull/browserchannel
[node]: https://github.com/josephg/node-browserchannel

## About

Written by:
Gijs Stuurman / [@thegeez][twt] / [Blog][blog] / [GitHub][github]

[twt]: http://twitter.com/thegeez
[blog]: http://thegeez.github.com
[github]: https://github.com/thegeez

### License

Copyright (c) 2012 Gijs Stuurman and released under an MIT license.
