# BASH ME

Here are are collated list of some useful bash commands


**Find all files containing a particular text**

`find ./ -type f | grep -l 'MHNS010000282017' Nashik/**/*.json`
find files where text 'MHNS...' exists within all .json and return the filename (-l)


**Install multiple python packages from a text file**

`pip install -r requirements.txt` to install list of packages from a text file.


**Command to login into a POSTGRES Database** 

`sudo -u postgres psql -l` to login into postgres database

**Run nGrok application**

Ngrok application is saved under /Documents/tools/ngrok
`./ngrok http 8998` - the port number should be the same as your port run by the server 