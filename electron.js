// electron.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

async function createWindow() {
  // Dynamically import the ES module
  const isDev = (await import("electron-is-dev")).default;

  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // This is necessary for security reasons, especially if you’re using `nodeIntegration`
    },
  });

  const startURL = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`;

  if (isDev) {
    mainWindow.webContents.openDevTools(); // Open dev tools in development mode
  }

  mainWindow.loadURL(startURL);

  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
