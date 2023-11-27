# cookie-parser

cookie-parser is a middleware which parses cookies attached to the client request object.
Parse cookie header and populate req.cookies with an object keyed by the cookie names.

`Installation:`

```bash
    npm i cookie-parser
```

`Usage:`

```js
    // Importing cookieParser
    import cookieParser from 'cookie-parser'

    // Using as middleware
    app.use(cookieParser())
```

## res.cookie()

`res.cookie():` It is used to set cookie name to value. The value parameter may be a string or object converted to JSON.

`Syntax:` res.cookie('name,value[options])

`Example:`

```js
    res.cookie('username','ayankhan')
    res.cookie('cart',5)
    res.cookie('cart',{items:[1,2,3]})
    res.cookie('username','ayankhan',{maxAge:500})
    res.cookie('username',"geekyshows",{expires:new Date(Date.now()+900000,httpOnly:true)})
```

### res.cookies()

`domain (String):` Specifies the domain for the cookie.

```javascript
    res.cookie('myCookie', 'Hello, Boss!', { domain: 'example.com' });
```

`encode (Function):` A function used for encoding cookie values.

```javascript
    res.cookie('myCookie', 'Hello, Boss!', { encode: (value) => encodeURIComponent(value) });
```

`expires (Date):` The expiration date of the cookie. If not set, the cookie is treated as a session cookie and will not be persisted.

```javascript
    const expirationDate = new Date(Date.now() + 86400000); // 24 hours from now
    res.cookie('myCookie', 'Hello, Boss!', { expires: expirationDate });
```

`httpOnly (Boolean):` If true, the cookie is inaccessible to JavaScript on the client side, enhancing security against XSS attacks.

```javascript
    res.cookie('myCookie', 'Hello, Boss!', { httpOnly: true });
```

`maxAge (Number):` Specifies the maximum age of the cookie in milliseconds.

```javascript
    res.cookie('myCookie', 'Hello, Boss!', { maxAge: 900000 });
```

`path (String):` Specifies the path for the cookie.

```javascript
    res.cookie('myCookie', 'Hello, Boss!', { path: '/admin' });
```

`sameSite (Boolean or String):` A boolean or string indicating whether the cookie should be restricted to a same-site context.

```javascript
res.cookie('myCookie', 'Hello, Boss!', { sameSite: 'strict' });
```

`secure (Boolean):` If true, the cookie will only be sent over HTTPS connections.

```javascript
res.cookie('myCookie', 'Hello, Boss!', { secure: true });
```

`signed (Boolean):` If true, the cookie will be signed using the secret provided to `cookie-parser`.

```javascript
res.cookie('myCookie', 'Hello, Boss!', { signed: true });
```

`overwrite (Boolean):` If true, existing headers will be overwritten.

```javascript
res.cookie('myCookie', 'Hello, Boss!', { overwrite: true });
```

## req.cookies

`req.cookies:` This property is used to get cookies.

When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, if defaults to {}.

`Example:`

```js
    req.cookies.username
    req.cookies.cart
```

## res.clearCookie()

`res.clearCookie():` It is used to clears the cookie specified by name.

Web browser and anotehr compliant clients will only clear the cookie if the given options is identical to those gien to res.cookie(), excluding expires and maxAge.

`Syntax:` res.clearCookie(name,[optiosn])

`Example:`

```js
    res.clearCookie('username')

    // clear cookie should be identical as how it has been set
    // res.cookie('username','ayankhan',{path:'/admin'})
    res.clearCookie('username',{path:'/admin'})
```
