# tornado-electron-test

### install and run

Node.js LTS (14.17.0) and python3 should be installed.

#### On Linux:
Use `npm install` to install dependencies (tornado will be installed automatically).
Use `npm start` to run server and app simultaneously.

#### On Windows 10:
You can use `install_and_run.bat` script.

Or you can use this command: `call npm install && start /B python tornado_web_server.py && start /B npm run-script run-app`

Afterwards the app will open and display data from the running server. 
You can check for availability of the data on the server here: 
`http://localhost:8888/data/data.json`
