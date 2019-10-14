#!/bin/bash

cd my-component
npm install 
npm run build 
cd ..

# rm -rf web-client/src/main/webapp/js
# mkdir web-client/src/main/webapp/js
# cp -r my-component/dist/* web-client/src/main/webapp/js

cd web-client
./go_build_and_deploy.sh
cd ..


