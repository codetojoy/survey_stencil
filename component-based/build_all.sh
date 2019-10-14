#!/bin/bash

. ./setvars.sh 

cd api-server
./go_build_and_deploy.sh 
cd .. 

./build_my_component_and_web_client.sh 

echo "Ready."
