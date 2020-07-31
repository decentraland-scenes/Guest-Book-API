# Guest book

Sign a guestbook. Signatures done on the guestbook are stored in a Firebase server. The code for the server is included in the `/server` folder of this repo.

![](screenshot/screenshot.png)

Check out the [related tutorial](https://decentraland.org/blog/tutorials/servers-part-2/)!

This scene shows you:

- How to send HTTP requests to an API to store data in a permanent place, so others can then retrieve changes
- How to set up a server on Firebase that uses the Firestore database
- How to display a custom UI
- How to parse a JSON response from an API call
- How to parse a string so that it fits a maximum line length and maximum number of lines
- How to fetch the player's UserId


Every time the book is opened, a request is sent to a RESFful API that this server exposes, to fetch all existing signatures. When a new signature is made, another request is sent to that API, including the player's name and id, to add to the database.

## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

**Setting up the server**

The scene is set up to make use of an existing server. To launch your own server, we recommend you deploy what's in the /server folder to your own Firebase account, following the steps in [this tutorial](https://decentraland.org/blog/tutorials/servers-part-2/).

**Scene Usage**

Click on the guestbook to open the UI and fetch all the signatures on the book. You can flip through the pages by clicking the arrows on the sides. If you click the sign button, your user ID will be fetched and added to the list of signatures. If you run this on preview, you will be using the randomly generated `guest` UI used by preview.

Learn more about how to build your own scenes in our [documentation](https://docs.decentraland.org/) site.

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.
