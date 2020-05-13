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
- [Instructions to Run Locally](#license)
- [Links](#links)

## Project Description:

The Library System is an application that allows the users to access the book collection of a library. The homepage of the application displays the book collection in a tabular form with the books’ name, author, and the number of copies available in the system. The user can also add books to the database system with a name, author, and number of copies. You are also given the option to remove the certain books from the catalog. The library system is a 3-tier architecture since we have a presentation, business logic, and a database. The software required to create the application include: 

- ReactJS for the UI.
- Java Spring Boot for the backend API application.
- AWS RDS for the data storage.
- Docker to run applications in containers easily.
- AWS Elastic Beanstalk for deployment.

## Demo Screenshots

1. Homepage
2. Adding a book ‘Test01’
3. ‘Test01’ added

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
