create table coordenacao(
    id serial primary key ,
    name varchar(255)
);

create table unep(
    id serial primary key ,
    name varchar(255),
    cod bigint,
    fk_id_user integer,
    fk_id_coordenacao integer
);

create table user_system(
    id serial primary key ,
    name varchar(255),
    lastname varchar(255),
    cod_acad varchar(255),
    email varchar(255),
    password varchar(255),
    date_create date default now(),
    date_update date
    
);

create table product(
    id serial primary key ,
    description varchar(255),
    unit varchar(255)
);

create table order_system (
    id serial primary key ,
    idProduct int,
    amount int,
    coordenacao varchar(255)
);

create table category(
    id serial primary key ,
    name varchar(255)
);

-- ALTER TABLE unep ADD CONSTRAINT FK_id_coordenacao FOREIGN KEY (id) REFERENCES coordenacao(id);

-- ALTER TABLE unep ADD CONSTRAINT FK_id_user FOREIGN KEY (id) REFERENCES user_system(id);

ALTER TABLE order_system ADD CONSTRAINT FK_id_product FOREIGN KEY (id) REFERENCES product(id);

ALTER TABLE order_system ADD CONSTRAINT FK_id_category FOREIGN KEY (id) REFERENCES category(id);



