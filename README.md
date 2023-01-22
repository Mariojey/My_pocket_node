# HOTELE
---
### This is a simple prototype of system to management hotels.

Props:
- Backend
  - Node.js
  - Express.js
  - mysql2

- Frontend 
  - React.js (in development)

- Database
  - MySQL

- Security
  - bcrypt (using to hash password)

First of all, you must have a database server, for developing you shall using localhost. On this server will be running database.

Second you must install all dependencies after uzip source code folder
```
npm install
```

Next you should create outside of code personall config file using *dotenv*. File should have a name *.env*, and should look like that:

``` dotenv

# NODE APP ENVIRONMENT VARIABLES
NODE_ENV=development
PORT= Write port which has been opened in your proxy

#DB PROPS
DB_HOST=Your server adress (probably localhost)
DB_USER=WriteNameOfYourUser
DB_NAME=WriteNameOfYourDatabase (which you set when you has imported it)
DB_PASSWORD=PasswordForYourDatabase
```

For running this app **[node.js](https://nodejs.org/en/)** must be installed in your machine
You can run a backend starting **[index.js](./Hotele/index.js)** file using command
```
    npm run dev
```
As you can see for running is used *npm* which has been installed automatically with node.js

If you want to run this app and modify it you should run this with nodemon. Then any changes which you provide will not interrupt the operation of the application, and process will be restarting automatically. To start backend with nodemon ypou should use this commend in your console:

```
    npm run devWatch
```

## Source code of app

**[database](./Hotele/utils/hotele.sql)** - you must import it in your database server (if you using xampp to manage you can do it in phpmyadmin but also in outside for exmple in MySQL Workbench)

**[Backend](./Hotele/)**

## Requests 


|Requests|Router script|
|------------|---------|
|/hotels|*[hotelRouter](./Hotele/routes/hotelRouter.js)*|
|/clients|*[clientRouter](./Hotele/routes/clientRouter.js)*|
|/countries|*[countryRouter](./Hotele/routes/countryRouter.js)*|
|/cities|*[cityRouter](./Hotele/routes/cityRouter.js)*|
|/parkings|*[parkingRouter](./Hotele/routes/parkingRouter.js)*|
|/rooms|*[roomRouter](./Hotele/routes/roomRouter.js)*|
|/reservations|*[reservationRouter](./Hotele/routes/reservationRouter.js)*|

## URLs to fetching in frontend

|Hotels   | Type|
|---------|-----|
|/|GET|
|/|POST|
|/all|GET|
|/country/:id|GET|
|/city/:id|GET|
|/stars|GET|
|/stars/:count|GET|
|/:id|GET|


|Clients| Type |
|-------|------|
|/|GET|
|/|POST|
|/all|GET|
|/country/:id|GET|
|/city/:id|GET|
|/:id|GET|

|Country/City|Type|
|------------|----|
|/|GET|
|/|POST|
|/:id|GET|

|Parkings|Type|
|--------|----|
|/|GET|
|/|POST|
|/all|GET|
|/hotel/:id|GET|
|/:id|GET|

|Rooms|Type|
|-----|----|
|/|GET|
|/|POST|
|/all|GET|
|/hotel/:id|GET|
|/floor/:floor|GET|
|/count|GET|
|/count/:count|GET|
|/:id|GET|

|Reservations|Type|
|------------|------|
|/|GET|
|/|POST|
|/client/:client|GET|
|/sort/start|GET|
|/sort/end|GET|
|/done|GET
|/:id|GET|