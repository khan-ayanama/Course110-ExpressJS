# Session

A session refers to the duration of time a user interacts with a web application. During this period, the web server maintains information about the user's activity and state. Sessions are essential for managing user-specific data and providing a more personalized experience.

Here are the key components of a session:

`Session Initiation:` When a user visits a website for the first time, a unique session is initiated on the server for that user.

`Session ID:` A session ID is generated and usually stored as a cookie on the user's browser. This ID is used to identify the user's session on subsequent requests.

`Server-Side Data Storage:` The server stores information related to the user's session. This information can include user preferences, login status, and other data that needs to persist across multiple requests.

`Session Expiry:` Sessions typically have a timeout or expiration period. If a user is inactive for a specified duration, the session may expire, and the user will need to re-authenticate.

`Security Measures:` To enhance security, the session ID is often encrypted or signed to prevent tampering. HTTPS is commonly used to secure the communication between the client and server, especially when dealing with sensitive information in sessions.

In the context of backend development, frameworks like Express.js (for Node.js) provide middleware, such as express-session, to simplify the management of sessions. This middleware takes care of creating and managing session data, handling session IDs, and providing an easy way for developers to interact with session-related functionality.

In summary, a session is a way to maintain state and data for a user across multiple interactions with a web application. It allows for a more dynamic and personalized user experience.

## Session in Express

### Installation and usage

```bash
    npm i express-session
```

```js
    import session from 'express-session'

    app.use(session({
        secret:'iamkey',
        resave:false,
        saveUninitialized:true,
        cookie:{path:'/',httpOnly:true,secure:false,maxAge:5000}
    }))
```

`secret:` This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests. The secret itself should be not easily parsed by a human and would best be a random set of characters.

`resave:` It forces the session to be saved back to the session store, even if the session was never modified duirng the request. True If it does not implement the touch method and your store sets an expiration date on stored sessions. False. If it implements the touch method.

`saveUnitializid:` It forces a session that is "unitialized" to be saved to the store. A session is unitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws the require permission before setting a cookie. Choosing false will also help the race conditions where a client makes multiple parallel request without a session.

`name:` The name of the session ID cookie to set in the response. The default value is 'connect.sid'.

`proxy:`
Trust the reverse proxy when setting secure cookies,

* `true:-` the "X-Forwarded-Proto" header will be used
* `false:-` All headers are ignored and the connection is considered secure only if there is a direct TLS/SSL connection.
* `undefined:-` Uses teh "trust proxy" setting from express. It is default

`store:` The session store instance, defaults to a new MemoryStore instance.

## req.session

To store or access session data, simply use the request property req.session, which is (generally) serialized as JSON by the store, so nested objects are typically fine.

`Example:`

```js
    req.session.count=1
    req.session.count
```

`req.session.regenerate():` To regenerate the session imply invoke the method. Once complete, a new SID and Session instance will be initialized at req.session and teh callback will be invoked.

`req.session.destroy(callback):` It destroys teh session and will unset the req.session property. Once complete, the callback will be invoked.

`req.session.reload(callback):` It reloads the session data from the store and re-populates the req.session object. Once completed, the callback will be invoked.

`req.session.id:` Each session has a unique ID associated with it. This property is an alias of req.sessionID and cannot be modified. It has been added to make the session ID accessible from the session object.

`req.session.cookie:` Each session has a unique cookie object accompany it. This allows you to alter the session cookie per visitor. For example we can seet req.session.cookie.expires to false to enable the cookie to remain for only the duration of the user-agent.

`cookie.maxAge:` Alternatively req.session.cookie.maxAge will return the time remaining in milliseconds, which we may also re-assign a new value to adjust the .expires property appropirately.

`Cookie.originalMaxAge:` The req.session.cookie.originalMaxAge property returns the original maxAge (time-to-live), in milliseconds, of the session cookie.

`req.sessionID:` To get the ID of the loaded session, access the requested property req.sessionID. This is simply a read only value set when a session is loaded/created.
