var app = require("app");
var BrowserWindow = require("browser-window");
app.on("window-all-closed", app.quit);
app.on("ready", openTimersWindow);

var mainWin = null;

function openTimersWindow() {
  mainWin = new BrowserWindow({
    width: 480
  });
  mainWin.loadUrl("file://" + __dirname + "/../index.html");
};
