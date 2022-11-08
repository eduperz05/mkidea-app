CREATE DATABASE IF NOT EXISTS mkidea;
USE mkidea;

CREATE TABLE IF NOT EXISTS user (
  id_user INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role enum ('Developer','Product_Owner') NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY(id_user)
);

CREATE TABLE IF NOT EXISTS project (
  id_project INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  status enum ('Active','Inactive') NOT NULL,
  PRIMARY KEY(id_project)
);

CREATE TABLE IF NOT EXISTS team (
  id_project INT(11) NOT NULL,
  id_user INT(11) NOT NULL,
  PRIMARY KEY(id_project, id_user),
  FOREIGN KEY (id_project) REFERENCES project(id_project),
  FOREIGN KEY (id_user) REFERENCES user(id_user)
);

CREATE TABLE IF NOT EXISTS new (
  id_new INT(11) NOT NULL AUTO_INCREMENT,
  id_user INT(11) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY(id_new),
  FOREIGN KEY (id_user) REFERENCES user(id_user)
);
