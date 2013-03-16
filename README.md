TeslaTime
=========

TeslaTime is a bookmarklet to view and control your Tesla vehicles. Tesla has created native [mobile][1] [applications][2] for this purpose but nothing for the desktop, so this bookmarklet aims to fill that gap.


Usage
-----

Markdown does not seem capable of rendering bookmarklet URLs so get TeslaTime from the [homepage][3].


HTTP API
--------

Happily the Tesla apps are backed by a HTTP API that @[timdorr][4] [documented][5].


Security
------------

One big concern in using a third party web interface to the monitoring and control of your vehicle is that your credentials are passed through the third party. Implementing it as a bookmarklet avoids this issue by allowing the user to interact with Tesla's [portal](https://portal.vn.teslamotors.com) directly while layering a HTML interface on it.


[1]: https://itunes.apple.com/us/app/tesla-model-s/id582007913?mt=8
[2]: https://play.google.com/store/apps/details?id=com.teslamotors.tesla&feature=search_result#?t=W251bGwsMSwyLDEsImNvbS50ZXNsYW1vdG9ycy50ZXNsYSJd
[3]: http://secobarbital.github.com/teslatime
[4]: /timdorr
[5]: http://docs.timdorr.apiary.io/
