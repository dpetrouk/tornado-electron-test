# tornado-electron-test

### In one bash command

Run this script to install and run Electron app on clean OS (tested on Kubuntu 19.10 LiveCD).

**With tornado server:**
`sudo apt-get update ; sudo apt-get install git ; sudo apt-get install curl ; curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - ; sudo apt install -y nodejs ; sudo apt install python3 ; pip install tornado ; git clone https://github.com/dpetrouk/tornado-electron-test.git ; cd tornado-electron-test ; npm install ; python3 tornado_web_server.py & npm start`

**Without tornado server (no data will be displayed):**
`sudo apt-get update ; sudo apt-get install git ; sudo apt-get install curl ; curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - ; sudo apt install -y nodejs ; git clone https://github.com/dpetrouk/tornado-electron-test.git ; cd tornado-electron-test ; npm install ; npm start`

### Manually

**Install dependencies:**
In the project folder run `npm install ; pip3 install tornado`

**Run tornado server:**
`python3 tornado_web_server.py`

You can check for availability of data on this server here:
`http://localhost:8888/data/data.json`

**Run Electron app:**
`npm start`

You will find there displayed data from the running server.