# Types of Response in express

In Express.js, there are several types of responses you can send from your server. Here are some common ones:

`Sending Plain Text:`

```javascript
    app.get('/', (req, res) => {
    res.send('Hello, Boss!');
    });
```

`Sending HTML:`

```javascript
    app.get('/', (req, res) => {
    res.send('<h1>Hello, Boss!</h1>');
    });
```

`Sending JSON:`

```javascript
    app.get('/json', (req, res) => {
    res.json({ message: 'Hello, Boss!' });
    });
```

`Redirecting:`

```javascript
    app.get('/redirect', (req, res) => {
    res.redirect('/new-location');
    });
```

`Sending a File:`

```javascript
    app.get('/file', (req, res) => {
    res.sendFile('/path/to/file.txt');
    });
```

`Setting Status Code:`

```javascript
    app.get('/error', (req, res) => {
    res.status(500).send('Internal Server Error');
    });
```

`Setting Headers:`

```javascript
    app.get('/custom-header', (req, res) => {
    res.header('custom-header', 'Custom Value').send('Hello, Boss!');
    });
```

`Rendering Views (using a template engine like EJS):`

```javascript
    app.set('view engine', 'ejs');

    app.get('/view', (req, res) => {
    res.render('index', { message: 'Hello, Boss!' });
    });
```

`Sending a JSON Array:`

```javascript
    app.get('/json-array', (req, res) => {
    res.json([{ name: 'John' }, { name: 'Doe' }]);
    });
```

`Sending a Status Code with No Content:`

```javascript
    app.delete('/resource/:id', (req, res) => {
    // Deleting resource logic here
    res.status(204).send(); // 204 No Content
    });
```

`Sending Cookies:`

```javascript
    app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'Boss');
    res.send('Cookie set!');
    });
```

`Sending a Redirect with Status Code:`

```javascript
    app.get('/redirect-with-status', (req, res) => {
    res.redirect(301, '/new-permanent-location');
    });
```

`Sending a Custom JSONP Response:`

```javascript
    app.get('/jsonp', (req, res) => {
    res.jsonp({ name: 'Boss' });
    });
```

`Sending a Stream as a Response:`

```javascript
    app.get('/stream', (req, res) => {
    const fs = require('fs');
    const fileStream = fs.createReadStream('/path/to/file.txt');
    fileStream.pipe(res);
    });
```

`Sending a Buffer as a Response:`

```javascript
    app.get('/buffer', (req, res) => {
    const buffer = Buffer.from('Hello, Boss!');
    res.send(buffer);
    });
```

`Sending a Partial Response (Range Requests):`

```javascript
    app.get('/partial', (req, res) => {
    const fs = require('fs');
    const filePath = '/path/to/large-file.mp4';
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(filePath, { start, end });
        const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
        };

        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(filePath).pipe(res);
    }
    });
```
