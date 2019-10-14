#!/bin/bash 

if [[ -z "${MY_SERVER_HOST}" ]]; then
  echo "please set env var 'MY_SERVER_HOST'"
  exit -1 
fi

wget ${MY_SERVER_HOST} -o tmp.log -O tmp.html

if [ $? == 0 ]; then
    echo "Tomcat OK"
else
    echo "Tomcat not running"
fi 

rm tmp.log tmp.html 

echo "Ready."
