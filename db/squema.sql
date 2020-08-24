DROP DATABASE IF EXISTS leaguesDB;
CREATE DATABASE leaguesDB;

USE leaguesDB;

CREATE TABLE leagues (
    id INT(10) AUTO_INCREMENT NOT NULL,
    league_name VARCHAR(250) NOT NULL,
    latitude INT(10) NOT NULL,
    longitude INT(10) NOT NULL,
    budget INT(10) NOT NULL,
    PRIMARY KEY (id)
);
