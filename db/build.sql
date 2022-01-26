CREATE DATABASE words;

\c words;

CREATE TABLE words (
  id serial PRIMARY KEY,
  word varchar(10)
);

