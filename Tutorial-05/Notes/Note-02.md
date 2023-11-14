# Views

Views contain HTML served by your application and separate your application from your presentation logic.

## Creating Views

1. Create HTML files inside the View folder
2. Create the Controller for each file

    ```js
        // homeController.js
        const path = require("path");

        const homeController = (req, res) => {
        //   res.send("Hello");
        res.sendFile(path.join(process.cwd(), "views", "home.html"));
        };

        module.exports = {homeController};

        // aboutController.js
        const { join } = require("path");

        const aboutController = (req, res) => {
        res.send("Hello from About");
        };
        const contactController = (req, res) => {
        //   res.send("Hello from About");
        res.sendFile(join(process.cwd(), "views", "about.html"));
        };

        module.exports = {
        aboutController,
        contactController,
        };
    ```

3. `Creating Routes:`

    ```js
        const { homeController } = require("../controllers/homeController");
        const { aboutController } = require("../controllers/about.controller.js");
        const express = require("express");
        const router = express.Router();

        router.get("/", homeController);
        router.get("/about", aboutController);

        module.exports = router;
    ```

4. Providing to application

    ```js
        const express = require("express");
        const router = require("./routes/web");
        const app = express();

        app.use("/", router);

        app.listen(3000, () => {
        console.log("Server STarted");
        });
    ```

`process.cwd():` Process is node's global object and .cwd() returns where node is running.

`app.sendFile():` This is used to transfers the file at the given path. Sets the ContentType response HTTP header files based on the filename's extension. Unless the root option is set in the options object, path must be an absolute path to the file.
