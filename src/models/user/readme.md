# User

There's a user class for creating user instances for in-game experience.

We have to implement these methods inside the user. 
** You can change the method names as properly if you want which that in case.

```javascript
const socketId = '1'
const name = 'Cagatay Cali'
const cagatay = new User(socketId, name) // This code will be write at user class

User.all() // this is static method, returns all users as array of instances.
User.get(id) // this is static method, returns given user instance by id.

const cagatay = new User(socketId, name); // id is socketId, name is username for user.

cagatay.getRoom() // returns room instance.
cagatay.id // returns socketId
```