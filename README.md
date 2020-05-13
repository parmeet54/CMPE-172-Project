San Jose State University
======================

# Enterprise Software - CMPE 172-01 / Spring 2020

## Team Members
- Welby Chan
- Inderpreet Singh
- Parmeet Singh

## Table of contents
- [Project Description](#project-description)
- [Demo Screenshots](#demo-screenshots)
- [Setup Prerequisites](#setup-prerequisites)
  - [React Frontend](#react-frontend)
  - [Springboot Backend](#spring-boot-java-backend)
- [Instructions to Run Locally](#instructions-to-run-locally)
- [UML Diagrams](#uml-diagrams)
- [Database Schema](#database-schema)
- [Mid Tier API](#mid-tier-api)
- [UI Data Transport](#ui-data-transport)

## Project Description:

The Library System is an application that allows the users to access the book collection of a library. The homepage of the application displays the book collection in a tabular form with the books’ name, author, and the number of copies available in the system. The user can also add books to the database system with a name, author, and number of copies. You are also given the option to remove the certain books from the catalog. The library system is a 3-tier architecture since we have a presentation, business logic, and a database. The software required to create the application include: 

- ReactJS for the UI.
- Java Spring Boot for the backend API application.
- AWS RDS for the data storage.
- Docker to run applications in containers easily.
- AWS Elastic Beanstalk for deployment.

## Demo Screenshots

1. Homepage

![1](https://user-images.githubusercontent.com/38019514/81770756-077f2600-9496-11ea-93c6-29016aeff92a.png)

2. Adding a book ‘Test01’

![2](https://user-images.githubusercontent.com/38019514/81770773-1239bb00-9496-11ea-9047-0bb4247f99bd.png)

3. ‘Test01’ added

![3](https://user-images.githubusercontent.com/38019514/81770780-182f9c00-9496-11ea-9ae2-b20bb7720147.png)


## Setup Prerequisites

- React Frontend
  - First install ReactJS, npm,  and NodeJS. To check whether you have them or not type in command console ‘npm -v’ for npm, ‘node -v’ for NodeJS, and to check react, you can just start it up
  - To create a React app, type in the command console ‘npx create-react-app “name”’ in the directory or folder you want your app in. 
  - You can also install Docker on your system if you wish to run the react application inside the docker container with the provided dockerfile.

- Spring Boot JAVA Backend
  - The backend application does not need to be run locally, as it is publically deployed through elastic beanstalk for the frontend to communicate with. 
  - But if you wish to run the SpringBoot application locally, you must:
    - Install SpringBootSuite or Intellij IDEA
    - Import the ‘SpringBoot’ folder into the IDE as a new project
    - Select run and choose “Build”
    - After successful build, browse to localhost:8080 to run it on your browser
    
    
## Instructions to Run Locally

There are 2 options/ways to run the project on a local system

- 1.NPM 
	
	In order to use npm for the react application, first you must change directory into the UI folder of the project. After that, enter the following command into your terminal in order to install the node modules required for the react application

```
	npm install
```

   Then, to run the application on your browser, use the command

```
	npm start
```
	
   To start the react application on your browser. If the terminal does not redirect you to the browser, go to localhost:3000 on your browser manually.



- 2.Docker

	To run the react application inside a docker container, first you must change directory into the UI folder of the project with the dockerfile inside. Then to make a docker image of the react application, use the following command to produce that image.

```
	docker build -t docker-react .
```

Then to run the docker container, use the following command and browse to localhost:3000

```
	docker run  -it -p 3000:3000 docker-react
```


## UML Diagrams

- Class Diagram
	- Springboot Application
![class](https://user-images.githubusercontent.com/38019514/81770819-39908800-9496-11ea-865a-bf011ef2bd17.png)

- Sequence Diagram

![sequence diagram](https://user-images.githubusercontent.com/38019514/81772723-727f2b80-949b-11ea-858e-90f7e7207dfb.png)



## Database Schema

The database only requires one ‘Book’ table in order to keep track of books and display them on the frontend

![schema](https://user-images.githubusercontent.com/38019514/81770825-3c8b7880-9496-11ea-9571-53da7fd0f935.png)

The books data stored in this schema looks as follows:

![schema2](https://user-images.githubusercontent.com/38019514/81771015-bd4a7480-9496-11ea-9579-042606353ff5.png)


## Mid Tier API

The backend API created using springboot application allows the frontend to make calls to the API and request the books' information from the RDS database. This API is deployed through Elastic Beanstalk and the environment's url is stated as a proxy inside the frontend code in order to connect.

![Screen Shot 2020-05-12 at 9 13 16 PM](https://user-images.githubusercontent.com/38019514/81771334-8d4fa100-9497-11ea-8739-e5bdea722ae3.png)

The root url redirects to the root '/' of the springboot application:

![Screen Shot 2020-05-12 at 9 29 25 PM](https://user-images.githubusercontent.com/38019514/81771394-ad7f6000-9497-11ea-8a0f-6b2249661bf6.png)

## UI Data Transport

The API provides the book data in the form of JSON.
To access this json, 'api/books/' is appended to the API url from beanstalk

![Screen Shot 2020-05-12 at 9 12 35 PM](https://user-images.githubusercontent.com/38019514/81771339-90e32800-9497-11ea-8227-409139443823.png)

