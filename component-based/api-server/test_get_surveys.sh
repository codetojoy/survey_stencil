#!/bin/bash

if [[ -z "${MY_SERVER_HOST}" ]]; then
  echo "please set env var 'MY_SERVER_HOST'"
  exit -1 
fi

BASE_URI=${MY_SERVER_HOST}/api-server/rest

RESULT=surveys

mkdir -p data
cd data
touch $RESULT.json
rm $RESULT.json

wget -q $BASE_URI/v1/surveys -O $RESULT.json

echo "wget result: $?"
echo "" 

cat $RESULT.json

cd .. 
echo ""
echo "Ready."
