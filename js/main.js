var app = require("app");
var BrowserWindow = require("browser-window");
app.on("window-all-closed", app.quit);
app.on("ready", openTimersWindow);

function openTimersWindow() {
  new BrowserWindow({
    width: 480
  }).loadUrl("file://" + __dirname + "/../index.html");
};
