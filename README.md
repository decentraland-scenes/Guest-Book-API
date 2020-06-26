# Guest book

Sign a guestbook. Signatures done on the guestbook are stored in a Firebase server. The code for the server is included in the `/server` folder of this repo.

Every time the book is opened, a request is sent to a RESFful API that this server exposes, to fetch all existing signatures. When a new signature is made, another request is sent to that API, including the player's name and id, to add to the database.

![](screenshot/screenshot.png)
