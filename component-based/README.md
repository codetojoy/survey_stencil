
### Overview

* my-component project defines `<my-component>`
    * see [this file](./my-component/src/components/my-component/my-component.tsx)
* web-client project uses `<my-component`
    * see [index.jsp](./web-client/src/main/webapp/index.jsp)
* api-server project provides a simple REST api
    * usage is hard-coded in [this file](./my-component/src/components/my-component/my-component.tsx)

### Prerequisites

* local Tomcat install
* Java 
* Node / NPM

### Usage

* edit `setvars.sh` so that Tomcat URL is correct
* in Bash: `./build_all.sh`
    * builds `api-server` WAR and deploys to Tomcat
    * calls `./build_my_component_and_web_client.sh` 
        * runs `npm` to build component in `./my-component/dist`
        * builds `web-client` WAR and deploys to Tomcat
* to confirm REST api, browse to `$MY_SERVER_HOST/api-server/rest/v1/surveys`
* to confirm component, browse to `$MY_SERVER_HOST/web-client/index.jsp`

### Troubleshooting: api-server

* in Bash: `cd api-server`
* in Bash: `./go_build_and_deploy.sh`
* test 1: browse to `$MY_SERVER_HOST/api-server/rest/v1/surveys`
* test 2: in Bash, `./test_get_surveys.sh`
* test 3: 
    * `cd cli-client`
    * `./run_client.sh` 
