#!/bin/bash

if [[ -z "${MY_SERVER_HOST}" ]]; then
  echo "please set env var 'MY_SERVER_HOST'"
  exit -1 
fi

if [[ -z "${TOMCAT_HOME}" ]]; then
  echo "please set env var 'TOMCAT_HOME'"
  exit -1 
fi

PROJECT_DIR=$1
PROJECT_PREFIX=api-server

../gradlew clean war

wget ${MY_SERVER_HOST} -o tmp.log -O tmp.html

if [ $? == 0 ]; then
    echo "shutting down"
    $TOMCAT_HOME/bin/shutdown.sh
else
    echo "Tomcat not running"
fi

rm tmp.log tmp.html

rm -rf $TOMCAT_HOME/webapps/${PROJECT_PREFIX}*
cp ./build/libs/$PROJECT_PREFIX.war $TOMCAT_HOME/webapps/

echo "starting up"
$TOMCAT_HOME/bin/startup.sh

echo ""
echo ""
echo "------------------"
echo "browse to: ${MY_SERVER_HOST}/api-server/rest/v1/surveys"
echo "Ready."
