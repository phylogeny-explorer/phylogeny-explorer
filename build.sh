#!/bin/bash
pwd
rm -rvf build
/opt/plesk/node/12/bin/npm install
/opt/plesk/node/12/bin/npm run build
