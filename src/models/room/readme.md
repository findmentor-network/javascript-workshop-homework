# Room

There's a room class for creating rooms for in-game experience.

We have to implement these methods inside the room. 
** You can change the method names as properly if you want which that in case.

```javascript
const socketId = '1'
const name = 'Cagatay Cali'
const cagatay = new User(socketId, name) // This code will be write at user class

const socketId = '2'
const name = 'Esma Aydogdu'
const esma = new User(socketId, name) // This code will be write at user class

Room.allRooms() // this is static method. This method have to return all room names.
Room.getRoom(name) // this is static method. This method have to return given room instance.

const roomName = 'example room name'
const room = new Room(roomName)

room.join(cagatay) // nobody in room. room must be return room instance. (tip: return this)
room.join(esma) // cagatay is in the room.

room.members // must be return instance of users
room.amIHost(cagatay) // returns true
room.amIHost(esma) // returns false

room.round // must be return 1
room.nextRound(cagatay) // returns true; cagatay have to be allowed to do that (which is creator of room)
room.nextRound(esma) // returns false; cagatay have to be allowed to do that (which is creator of room)

room.smile(cagatay) // cagatay smiled
room.smile(esma) // esma smiled

room.getRoundScore() // both smiled, everyone gets 0 point. [esma: 0, cagatay: 0]

room.nextRound(cagatay) // cagatay started next round
room.smile(esma) // esma smiled, cagatay did not.

room.getRoundScore() // esma smiled, esma gets 0 point, cagatay get 1. [esma: 0, cagatay: 1]

room.getOverAllScore() // { 1: [esma: 0, cagatay: 0], 2: [esma: 0, cagatay: 1] }

room.endGame() // returns winners by sorted overall score // cagatay wins with 1 non-smiled round.

room.close(cagatay) // returns true; this method delete room instance from all rooms.
room.close(esma) // returns false;
```