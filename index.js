
### Smartlist API
This is the official repository for the Smartlist API.
Visit the website here: https://smartlist.ga


### Usage 
#### Initialize API
You'll need an API key. Create one at the [developer dashboard](https://smartlist.ga/developer/)
```js
const Smartlist = require("smartlist-api");
let api = new Smartlist(process.env.API_KEY);
```
#### Test key 
```js
api.testKey().then(e => console.log(e))
```

#### Get finance breakdown
```js
api.getFinances().then(e => console.log(e))
```
#### Get list of authorized locations in an md5 hashing
```js
api.getAuthorizedLocations().then(e => console.log(e))
```
#### Get list of custom rooms
```js
api.getCustomRooms().then(e => console.log(e))
```
#### Get list of labels
```js
api.getLabels().then(e => console.log(e))
```

#### Get task count
```js
api.getTaskCount().then(e => console.log(e))
```
#### Get shopping list count
```js
api.getTaskCount().then(e => console.log(e))
```
#### Get user count
```js
api.getUserCount().then(e => console.log(e))
```

#### Get item count of a room
```js
api.getItemCount("kitchen").then(e => console.log(e))
```

#### Get number of items in a custom room
```js
api.getCustomRoomCount(30).then(e => console.log(e))
```
