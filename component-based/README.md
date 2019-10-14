
### Step 1: api-server

* to build/run, Bash     : `./gradlew :api-server:appRun`
* to build/run, Win/CMD  : `./gradlew.bat :api-server:appRun`
    * test 1: browse to http://localhost:8880/api-server/rest/v1/surveys
    * test 2, Bash: `./api-server/test_get_surveys.sh`
    * test 3: see "cli-client" below

### Step 2: web-client

* to build/run, Bash     : `./gradlew :web-client:appRun`
* to build/run, Win/CMD  : `./gradlew.bat :web-client:appRun`
    * test 1: browse to http://localhost:8881/web-client/index.jsp

### cli-client

* command-line client to exercise api-server
* `cd cli-client`
* Bash: `./run_client.sh`
* Win/CMD: `./run_client.bat`

