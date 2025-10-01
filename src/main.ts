import {app, BrowserWindow} from 'electron'
import * as path from "node:path";


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 1000
  })

  win.loadFile(path.join(__dirname, 'index.html'))
}

app.whenReady().then(() => {
  createWindow()
})