import { app, BrowserWindow, dialog, ipcMain } from "electron";
import "../renderer/store";
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

if (process.platform !== "win32") {
  process.env.PATH = [
    "./node_modules/.bin",
    "./.nodebrew/current/bin",
    "/usr/local/bin",
    process.env.PATH,
  ].join(":");
}

let mainWindow;
let lock = true
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `file://${__dirname}/index.html`;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 400,
    maxWidth: 1300,
    maxHeight: 700,
    frame: false, //是否显示边框
    titleBarStyle: "hiddenInset", // 系统默认红绿灯 按钮
    show: true,
    useContentSize: true,
    enableRemoteModule: true,
    contextIsolation: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, //Electron 12.0以上版本需要的额外设置此项
    },
  });

  mainWindow.loadURL(winURL);
  mainWindow.on("close", (e) => {
    lock && e.preventDefault();
    mainWindow.webContents.send('close-app')
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
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

// 多选文件
ipcMain.on("select-volume-files", (event) => {
  const result = dialog.showOpenDialog(mainWindow, {
    properties: ["openDirectory",'multiSelections','createDirectory','promptToCreate'],
  });
  result && event.sender.send("volume-files-result", result);
});

// 最小化
ipcMain.on("minimize-app", () => {
  mainWindow.minimize();
})

// 退出
ipcMain.on("exit-app", () => {
  lock = false
  app.quit();
})