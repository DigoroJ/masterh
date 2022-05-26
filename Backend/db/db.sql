create table users
( id serial primary key,
 name varchar(30),
 surname varchar(30),
 cell_no varchar(10),
 join_date date default current_date,
 is_active boolean default true,
 role varchar default 'Client',
 password varchar(255)
);

create table service
( id serial primary key,
 name varchar(30),
 description varchar(255),
 cost numeric(6,2),
 image varchar(255),
 category varchar(50)
);


create table request
( id serial primary key,
 client_id integer,
 service_id integer,
 req_date date default current_date,
 event_date date,
 status varchar(50),
 vanue_id integer
);

create table venue
( id serial primary key,
 request_id integer,
 street_name varchar(50),
 suburb varchar(50),
 city varchar(50),
 postal_code char(4)
);

create table gallery
( id serial primary key,
 name varchar(50),
 description varchar(255),
 image varchar(255),
 category varchar(50)
 );