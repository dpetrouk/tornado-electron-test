# tornado-electron-test

### In one bash command

Run this script to install and run Electron app **on clean OS** (tested on Ubuntu 18.04.5 via Bootable Live USB Drive).

**With server:**

`sudo add-apt-repository universe ; sudo apt-get update ; sudo apt-get install git curl python3 ; curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - ; sudo apt install -y nodejs ; pip3 install tornado ; git clone https://github.com/dpetrouk/tornado-electron-test.git ; cd tornado-electron-test ; npm install ; python3 tornado_web_server.py & npm start`

The app (on Electron) will display data from server (on Tornado)

**Or without server (no data will be displayed):**

`sudo apt-get update ; sudo apt-get install git curl ; curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - ; sudo apt install -y nodejs ; git clone https://github.com/dpetrouk/tornado-electron-test.git ; cd tornado-electron-test ; npm install ; npm start`

The app (on Electron) will be open without any external data.

### Manually

Node 16.x and Python3 should be installed.

**1. Install dependencies:**

In the project folder run `npm install ; pip3 install tornado`

**2. Run tornado server:**

`python3 tornado_web_server.py`

You can check for availability of data on this server here:
`http://localhost:8888/data/data.json`

**3. Run Electron app:**

`npm start`

You will find there displayed data from the running server.