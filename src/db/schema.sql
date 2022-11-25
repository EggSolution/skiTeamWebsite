CREATE USER 'massimo'@'localhost'    IDENTIFIED BY "massimo123";
CREATE USER 'modena'@'localhost'     IDENTIFIED BY "modena123";
CREATE USER 'berta'@'localhost'      IDENTIFIED BY "berta123";

CREATE USER 'users'@'localhost'      IDENTIFIED BY "users123";
CREATE USER 'newsletter'@'localhost' IDENTIFIED BY "newsletter123";

CREATE DATABASE skiTeamValdiSole;
USE skiTeamValdiSole;

GRANT ALL ON skiTeamValdiSole.* TO 'massimo'@'localhost';
GRANT ALL ON skiTeamValdiSole.* TO 'modena'@'localhost';
GRANT ALL ON skiTeamValdiSole.* TO 'berta'@'localhost';

GRANT ALL ON skiTeamValdiSole.users      TO 'users'@'localhost';
GRANT ALL ON skiTeamValdiSole.newsletter TO 'newsletter'@'localhost';

CREATE TABLE users (
    id       int          not null auto_increment primary key,
    nome     varchar(255) not null,
    cognome  varchar(255) not null,
    email    varchar(255) not null,
    password varchar(255) not null,
    data     timestamp    not null default current_timestamp()
);
CREATE TABLE newsletter (
    id       int          not null auto_increment primary key,
    nome     varchar(255) not null,
    email    varchar(255) not null,
    data     timestamp    not null default current_timestamp()
);

INSERT INTO users (nome, cognome, email, password) VALUES ("admin", "admin", "eggsolution1@gmail.com", "admin");
INSERT INTO users (nome, email)                    VALUES ("admin", "eggsolution1@gmail.com");
