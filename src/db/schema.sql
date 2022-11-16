CREATE USER 'massimo'@'localhost' IDENTIFIED BY "massimo";
CREATE USER 'modena'@'localhost'  IDENTIFIED BY "modena";
CREATE USER 'berta'@'localhost'   IDENTIFIED BY "berta";

CREATE DATABASE skiTeamValdiSole;
USE skiTeamValdiSole;

GRANT ALL ON skiTeamValdiSole.* TO 'massimo'@'localhost';
GRANT ALL ON skiTeamValdiSole.* TO 'modena'@'localhost';
GRANT ALL ON skiTeamValdiSole.* TO 'berta'@'localhost';

CREATE TABLE users (
    id       int not null auto_increment primary key,
    nome     varchar(255) not null,
    cognome  varchar(255) not null,
    email    varchar(255) not null,
    password varchar(255) not null,
    data     timestamp    not null default current_timestamp()
);

INSERT INTO users (nome, cognome, email, password) VALUES ("admin", "admin", "admin@admin", "admin");
