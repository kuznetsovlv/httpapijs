# httpapijs

Simple api for http server.

## [Content](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
  - [ServerAPI](#user-content-ServerAPI "ServerAPI")
    - [ServerAPI.on](#user-content-on "ServerAPI.on")
    - [ServerAPI.up](#user-content-up "ServerAPI.up")
  - [getContentType](#user-content-getContentType "getContentType")
  - [getStatusText](#user-content-getStatusText "getStatusText")
  - [Example.](#user-content-example "Example")
- [License](#user-content-license "License")

## GitHub.
[Progect on GitHub.](https://github.com/kuznetsovlv/httpapijs "Link to GitHub repository")

## Install.
```bash
npm install httpapijs --save
```

or
```bash
npm install httpapijs --save-dev
```

- [Usage.](#user-content-usege "Usage")
Import `ServerAPI` form package:
```javascript
  import ServerAPI from 'httpapijs';
```

Also you can import utilities `getContentType` and `getStatusText`:
```javascript
  import { getContentType, getStatusText } from 'httpapijs';
```

or
```javascript
  import ServerAPI, { getContentType, getStatusText } from 'httpapijs';
```

### ServerAPI
```javascript
  import ServerAPI from 'httpapijs';
```

`ServerAPI` - class of main server api. It may be costructed with two arguments:
  * {number} [port = 80] - listening port.
  * string} [root = __dirname] - root dirrectory of content.

#### `ServerAPI.on` - method to set handlers, adds start handler and handlers for request's types. It calls with two parameters:
* {string} type - type of event. Available start event emits at server's starting and lowercased names of request's events.
* {function} handler - event handler. All events but start get request and response objects as arguments, start event does not get any arguments.

You can set only one handler for each event. If you call on method with same event's name, only last handler will be set.

#### `ServerAPI.up` - method to fire server.

### `getContentType` 
```javascript
  import { getContentType} from 'httpapijs';
```

`getContentType` returns default Content-Type header by mime. This method has only one argument:
* {string} [mime = '.html'] - file's mime type.

### `getStatusText`
Also you can import utilities `getContentType` and `getStatusText`:
```javascript
  import { getContentType } from 'httpapijs';
```

`getStatusText` returns humanreadable status by it's code. It has argument:
 * {number | string} code - statuses code.

### Example
```javascript
  import ServerAPI, { getContentType, getStatusText } from './index';

const server = new ServerAPI(8084, __dirname);

server.on('start', () => console.log('HELLO!'));

server.on('get', (request, response) => {
  response.statusCode = 200;
  response.statusMessage = getStatusText(200);
  response.setHeader('Content-Type', getContentType('txt'));
  response.setHeader('Content-length', 'Hello!'.length);
  response.end('Hello!');
});

server.up();
```

## License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.
