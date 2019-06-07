CREATE DATABASE tacos_db;
USE tacos_db;

-- Create the table tacos.
CREATE TABLE tacos (
  id int AUTO_INCREMENT,
  taco_name varchar(30) NOT NULL,
  shell varchar(30) NOT NULL(soft/hard ~ flour/corn),
  vegetarian boolean NOT NULL,
  pickUp boolean NOT NULL,
  PRIMARY KEY(id)
);

