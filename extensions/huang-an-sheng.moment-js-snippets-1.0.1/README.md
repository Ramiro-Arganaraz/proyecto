# Moment.js snippets README

![](https://img.shields.io/badge/license-MIT-important.svg)
![](https://img.shields.io/badge/Visual%20Studio%20Marketplace-v1.0.1-success.svg)

Moment.js Visual studio code snippets extension.

## Features

- Snippets for locale CDN in HTML file, by typing `moment-locale-${LANGUAGE_CODE_STRING}`, for examples: `moment-locale-de`, `moment-locale-ja`, `moment-locale-zh-tw`.

- Snippets for moment.js function and formats in JavaScript, for examples: `moment.format.MMMDoYYYY`, `moment.format.YYYY/MM/DD`.

## Quick start

![](https://i.imgur.com/6CaoCOq.gif)
Get a script tag for locale CDN file in HTML file by typing `moment-locale-${LANGUAGE_CODE_STRING}`.

![](https://i.imgur.com/UGmWkky.gif)
Get a time string in `MMM Do YYYY` format by typing `moment.formatMMMDoYYYY`.

### Documentation

Trigger | Description
--- | ---
`moment.require` | Require moment.js module
`moment.fromNow` | Get moment time from now
`moment.toArray` | Returns an array that mirrors the parameters from new Date()
`moment.valueOf` | Returns the number of milliseconds since the Unix Epoch
`moment.unix` | Returns a Unix timestamp


### format

Trigger | Description
--- | ---
`moment.format` | Get default moment format
`moment.formatConvert` | Convert date format to another format
`moment.format.dddd` | Get day name in locale set: `Wednesday`
`moment.format.MMMDoYYYY` | Get format: `Feb 22nd 2012`
`moment.format.YYYYMMMDo` | Get format: `2012 Feb 22nd`
`moment.format.YYYY/MM/DD` | Get format: `2012/02/22`
`moment.format.YYYYMMDD` | Get format: `2012 02 22`
`moment.format.YYYYMMDDdddd` | Get format: `2012 02 22 Wednesday`
`moment.format.MMMMDoYYYY,hmmssa` | Get format: `February 22nd 2012, 12:00:00 am`
`moment.format.MMMMDoYYYY,dddd,hmmssa` | Get format: `February 22nd 2012, Wednesday, 12:00:00 am`

### Locale format

Trigger | Description
--- | ---
`moment.format.LT` | moment format LT, Time (without seconds): `12:00 AM`
`moment.format.LTS` | moment format LTS, Time (with seconds): `12:00:00 AM`
`moment.format.L` | moment format L, Date (in local format): `02/22/2012`
`moment.format.LL` | moment format LL, Month name, day of month, year: `February 22, 2012`
`moment.format.LLL` | moment format LLL, Month name, day of month, year, time: `February 22, 2012 12:00 AM`
`moment.format.LLLL` | moment format LLLL, Day of week, month name, day of month, year, time: `Wednesday, February 22, 2012 12:00 AM`


**Enjoy!**
