CREATE DATABASE ptstore_db;

USE ptstore_db;

CREATE TABLE pet(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(80),
    name VARCHAR(80),
    photoUrls VARCHAR(300),
    tags VARCHAR(40),
    status VARCHAR(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE pet;
USE ptstore_db;

CREATE TABLE user(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(80),
    firstname VARCHAR(80),
    lastname VARCHAR(80),
    email VARCHAR(120),
    password VARCHAR (240),
    phone VARCHAR (20);
    userStatus VARCHAR(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE pet;