CREATE DATABASE burgers;
USE DATBASE
burgers;


CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
	burgers VARCHAR
    (255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);

