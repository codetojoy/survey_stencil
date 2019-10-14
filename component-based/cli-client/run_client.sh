#!/bin/bash

../gradlew clean installDist
./staging/bin/cli-client 

