# Mediconcen_code_test

Please must use Mysql 8 or latest!

## API DOC
link: 
[https://documenter.getpostman.com/view/7575861/T1LPESe7?version=latest](https://documenter.getpostman.com/view/7575861/T1LPESe7?version=latest)

## tech stack
* express.js
* JsonWebToken
* express-jwt
* mysql2
* mysql(docker)
* expo 
* react native
* react navigation
* react native paper
* react-redux
* asyncStorage

## Deploy Mysql
1. install Docker
2. run the command , remember to change the password and port
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=<YOUR_PASSWORD> -p <host_port>:3306 -d mysql:latest
```

## TODO (for record)
1. front end input valid  - not enough time.
2. UI for create consultation  - not enough time.
3. backend token keeping  - not enough time.
4. front end file struct can more better - not enough time.

## backend start
1. go to backend folder
  ```
  cd backend
  yarn install
  ```
1. copy .env.simple to .env. And fill in the information
2. run schema sql to init database schema
2. run
  ```
  yarn start / npm run start
  ```
1. go to front end
  ```
  cd ../frontend
  yarn / npm install
  ```
2. config the setting.js change api baseUrl
3. run
  ```
  yarn start / npm run start
  ```
 
    
