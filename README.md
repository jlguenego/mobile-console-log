# mobile-console

console.log from a mobile phone ?

Where is it ?

Well, I don't know...

Ok I write a tool that does that. Here it is !




## Installation

```
npm i --save-dev mobile-console
```
Note: Use it only during dev. Not in prod, hmmm ?


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

## Server

If you have no specific constraint about server, then just run the provided given express server.

Install the express stuff.

```
npm i --save-dev express serve-index multer 
```

Run the server with the `--inspect-brk` node option (debug mode).

```
node --inspect-brk ./node_modules/mobile-console/server.js
```

The server is started in debug mode.

## devtool

Open chrome at the following url: 

`chrome://inspect`

Under `Remote Target`, you should see the server started.

`server.js`

Click on `inspect` just below it.

The devtool opens. The server.js script is in *paused debugging*. Just start it by clicking on the play button or with key `F8`.

Go to the `console` tab.

## mobile

Open your favorite web browser from your favorite mobile.

Example: Safari from an iPhone IOS.

Connect to your desktop by wifi or another connection way to your local website. Check your IP address and enter it.

For instance, if your IP is `192.168.1.31`, go to :

```
http://192.168.1.31:8000
```

Then browse to your app. That's it ! You should see your console.log coming to the devtool !

Cool, isn't it ? If you like it, show it on Github !

# Author

Jean-Louis GUENEGO




