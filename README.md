# mobile-console

console.log from a mobile phone ?

Where is it ?

Well, I don't know...

Ok I write a tool that does that. Here it is !




## Installation

```
npm i --save-dev mobile-console
```
Note: Use it only during dev. Not in prod ;)


In your HTML file:

```
<!DOCTYPE html>
<html>

<head>
	...
</head>

<body>
	...
	<script src="path/to/node_modules/circular-json/build/circular-json.js"></script>
	<script src="path/to/node_modules/mobile-console/mobile-console.js"></script>
	<script src="my-app.js"></script>
</body>

</html>
```

Note: CircularJSON is a dependancy of this project, so you should already have it in your `node_modules` directory.

## Server

If you have no specific constraint about server, then just run the provided given express server.

Install the express modules.

```
npm i --save-dev express serve-index multer 
```

Run the server with the `--inspect-brk` node option (debug mode).

```
node --inspect-brk ./node_modules/mobile-console/server.js
```

The server is started in debug mode.

Note: If you have your own express server, then just insert the middleware `mobile-console-middleware.js`. Check the existing `server.js` file inside the `console-mobile` module to get inspired.

## devtool

Open chrome at the following url: 

`chrome://inspect`

Under `Remote Target`, you should see the server started.

`server.js`

Click on `inspect` just below it.

The devtool opens. The server.js script is in *paused debugging*. Just start it by clicking on the play button or with key `F8`.

Go to the `console` tab inside the devtool.



## mobile

Open your favorite web browser from your favorite mobile.

Example: Safari from an iPhone IOS.

Connect to your desktop by wifi or another connection way to your local website. Check your IP address and enter it.

For instance, if your IP is `192.168.1.31`, go to :

```
http://192.168.1.31:8000
```

Then browse to your app. That's it ! You should see your console.log coming to the devtool !

Cool, isn't it ? If it works and you like it, show it on Github !
If it does not work, just open an issue with your problem. I will see if I can help.

# Author

Jean-Louis GUENEGO




