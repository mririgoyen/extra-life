<div align="center">
  <img width="500" src="https://assets.donordrive.com/themes/extralife/img/logo.svg">
  <h1>Extra Life API</h1>
  <p>Extra Life API wrapper for JavaScript in the browser and Node.js.</p>
</div>

## Installation

You can install the `extra-life` module via `npm` or `yarn`:

```bash
npm i extra-life
yarn add extra-life
```

## About

This module is multi-platform and can be used in Node.js scripts or within the browser. The
module has ZERO dependencies and will natively use the `https` built-in in Node or `fetch`
in the browser. If you are using this in a browser that doesn't natively incorporate `fetch`,
you can [polyfill](https://github.com/github/fetch).

The interfaces exposed are based off of the
[DonorDrive Public API spec](https://github.com/DonorDrive/PublicAPI).

---

## Sample Usage

### Node.js

In Node, it is as simple as requiring the module and using it.

```js
const extraLife = require('extra-life');
extraLife.getTeam(45209).then(console.log);
```

### Browser

There are two ways to use this module in the browser. The first way is to import it into your
project that will be transpiled.

```js
import { getTeam } from 'extra-life';
getTeam(45209).then(console.log);
```

The second way is to include the raw `extra-life.js` file from this package directly in your HTML
and then access the `extraLife` variable to make your API calls.

```html
<script src="path/to/extra-life.js"></script>
<script>
extraLife.getTeam(45209).then(console.log);
</script>
```

---

## API

All methods defined below return
[ES6 Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
You can use simple `.then()` notation or `async`/`await`, depending on your preference.

The payload returned for each method will be in accordance with the
[DonorDrive documentation](https://github.com/DonorDrive/PublicAPI/tree/master/docs/1.0).
The few methods that optionally take a `limit` and a `page` will return a response object
with a `totalRecords` count and the results in a `records` array:

```js
{
  totalRecords: 100,
  records: [...]
}
```

### Participants

Each method here, with the exception of `getParticipants`, requires a `participantId`. You can
get a `participantId` from the results of `getParticipant`, or from the URL of a participant
on the Extra Life website.

The URL will look like: `https://extra-life.org/index.cfm?fuseaction=donordrive.participant&participantID=[PARTICIPANT ID HERE]`

---

Available methods:

- [getParticipants](#getParticipants)
- [getParticipant](#getParticipant)
- [getParticipantActivity](#getParticipantActivity)
- [getParticipantBadges](#getParticipantBadges)
- [getParticipantDonations](#getParticipantDonations)
- [getParticipantDonors](#getParticipantDonors)

---

#### `getParticipants(limit = 100, page = 1)`

Retrieves all participants in the current Extra Life event.

#### `getParticipant(participantId)`

Retrieves information about a given participant.

#### `getParticipantActivity(participantId)`

Retrieves the five most recent activities for a given participant.

#### `getParticipantBadges(participantId)`

Retrieves the badges a given participant has earned.

#### `getParticipantDonations(participantId, limit = 100, page = 1)`

Retrieves all donataions a given participant has received.

#### `getParticipantDonors(participantId, limit = 100, page = 1)`

Retrieves all donors whom have donated to a given participant.

---

### Teams

Each method here, with the exception of `getTeams`, requires a `teamId`. You can get a
`teamId` from the results of `getTeam`, or from the URL of a team on the Extra Life
website.

The URL will look like: `https://www.extra-life.org/index.cfm?fuseaction=donordrive.team&teamID=[TEAM ID HERE]`

---

Available methods:

- [getTeams](#getTeams)
- [getTeam](#getTeam)
- [getTeamActivity](#getTeamActivity)
- [getTeamBadges](#getTeamBadges)
- [getTeamDonations](#getTeamDonations)
- [getTeamDonors](#getTeamDonors)
- [getTeamParticipants](#getTeamParticipants)

---

#### `getTeams(limit = 100, page = 1)`

Retrieves all teams in the current Extra Life event.

#### `getTeam(teamId)`

Retrieves information about a given team.

#### `getTeamActivity(teamId)`

Retrieves the five most recent activities for a given team.

#### `getTeamBadges(teamId)`

Retrieves the badges a given team has earned.

#### `getTeamDonations(teamId, limit = 100, page = 1)`

Retrieves all donataions a given team has received.

#### `getTeamDonors(teamId, limit = 100, page = 1)`

Retrieves all donors whom have donated to a given team.

#### `getTeamParticipants(teamId, limit = 100, page = 1)`

Retrieves all participants who are members of a given team.

---

## Say "Thanks" By Donating :)

Extra Life is an event and charity like no other. I have been participating in Extra Life for
over 5 years and really enjoy being able to provide hope to children in need, especially when
all they want to do is feel better and be kids!

If you used this module, or are just feeling generous, [please consider donating to this
amazing cause](https://www.extra-life.org/participant/goyney). Your donations directly
benefit Children's Miracle Network Hospitals and are tax deductable.
