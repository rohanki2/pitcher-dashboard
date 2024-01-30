# start_server.py

import os
import subprocess


server_folder = 'server'
os.chdir(server_folder)


subprocess.call(['pip3', 'install', 'flask', 'flask-cors'])


subprocess.Popen(['python3', 'server.py'])


client_folder = '../client'
os.chdir(client_folder)


subprocess.call(['npm', 'install'])


subprocess.call(['npm', 'run', 'dev'])
