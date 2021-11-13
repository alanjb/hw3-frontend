# SWE 645 - HW3 - Frontend - Alan Boyce and Kevin Lowery

Kevin Lowery's homepage on AWS: http://swe637hw1.s3-website.us-east-2.amazonaws.com/ 
Alan Boyce's homepage on AWS: http://swe645-a1-part1.s3-website-us-east-1.amazonaws.com/

## AWS URL of homepage 

For this homework assignment, we developed detailed step by step instructions for

Running the Angular 12 frontend application locally
Building an image from the frontend application
Running a docker container from this image locally
Deploying the containerized application on Kubernetes using Rancher

## Start local development server
Open a terminal and change directories into hw3-frontend root directory and run `npm run start` to start the application. Visit `http://localhost:4200/` to view the application.

## Build a docker image from the source code using the Dockerfile
Open a terminal and change directories into hw3-frontend root directory and run `docker build . -t aboyce2/hw3-frontend` to build the image.

## Run a docker container from the docker image.
Open a terminal and change directories into hw3-frontend root directory and run `docker run -d -p 8080:80 aboyce2/hw3-frontend:latest` to run the container.  Visit `http://localhost:8080/` to view the application

## AWS URL of homepage 
