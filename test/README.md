# test

Beginnings of a test suite for [clj-browserchannel][1]. Uses the
[clj-webdriver][2] Selenium wrapper to launch and interact with
browsers. Actors send messages through the demo chat application and
may introduce connection failures. The test checks whether all messages
were still received.

[1]:https://github.com/thegeez/clj-browserchannel
[2]:https://github.com/semperos/clj-webdriver/

## About

Written by:
Gijs Stuurman / [@thegeez][twt] / [Blog][blog] / [GitHub][github]

[twt]: http://twitter.com/thegeez
[blog]: http://thegeez.github.com
[github]: https://github.com/thegeez

### License

Copyright (c) 2012 Gijs Stuurman and released under an MIT license.

