TeslaTime
=========

TeslaTime is a bookmarklet to view and control your Tesla vehicles. Tesla has created native mobile applications for this purpose but nothing for the desktop, so this bookmarklet aims to fill that gap.


Usage
-----

Markdown does not seem capable of rendering bookmarklet URLs so get TeslaTime from the [homepage](http://secobarbital.github.com/teslatime).


HTTP API
--------

Happily the Tesla apps are backed by a HTTP API that @timdorr [documented](http://docs.timdorr.apiary.io/).


Security
------------

One big concern in using a third party web interface to the monitoring and control of your vehicle is that your credentials are passed through the third party. Implementing it as a bookmarklet avoids this issue by allowing the user to interact with Tesla's [portal](https://portal.vn.teslamotors.com) directly while layering a HTML interface on it.
