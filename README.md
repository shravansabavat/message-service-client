# A simple message posting application

### What is this service for?

A simple application which is developed in angular.js running on node server.
Application has the ability
* to post messages
* to list messages that have been posted till date.
* to get the details of a message
* to delete a message

##Public access
* Application has been deployed on amazon ec2 instance and can be accessed at http://52.32.44.47:8080/

## Sequence Diagrams
* Post a message

![Alt text](images/post_seq.png?raw=true "Post a message")

* Delete a message

![Alt text](images/seq_deleted.png?raw=true "Delete a message")

* Get a message

![Alt text](images/seq_get.png?raw=true "Get a message")

* List messages

![Alt text](images/seq_list.png?raw=true "List messages")

## Architecture
![Alt text](images/architecture.png?raw=true "Architecture")

## Installation
1. Clone the repository
2. Install npm modules: `npm install`
3. Install bower dependencies `bower install`
4. Start up the server: `node server.js`
5. View in browser at http://localhost:8080

If you have any questions or requests, email at shravan.naik1988@gmail.com


