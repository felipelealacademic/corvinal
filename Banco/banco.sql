create table coordenacao(
      id serial primary key ,
    nome varchar(255)
);

create table unep(
     id serial primary key ,
    nome varchar(255),
    codigo bigint
);

create table usuario(
     id serial primary key ,
    nome varchar(255),
    sobrenome varchar(255),
    email varchar(255),
    senha varchar(255)
);

create table produto(
     id serial primary key ,
    descricao varchar(255),
    unidade_medida varchar(255)
);

create table pedido (
     id serial primary key ,
    quantidade int
);

create table categoria(
     id serial primary key ,
    nome varchar(255)
);

create table usuario_unep(
    id serial primary key
);

ALTER TABLE unep ADD CONSTRAINT FK_id_coordenacao FOREIGN KEY (id) REFERENCES coordenacao(id);

ALTER TABLE usuario_unep ADD CONSTRAINT FK_id_unep FOREIGN KEY (id) REFERENCES unep(id);
ALTER TABLE usuario_unep ADD CONSTRAINT FK_id_usuario FOREIGN KEY (id) REFERENCES usuario(id);


ALTER TABLE pedido ADD CONSTRAINT FK_id_usuario_unep FOREIGN KEY (id) REFERENCES usuario_unep(id);
ALTER TABLE pedido ADD CONSTRAINT FK_id_produto FOREIGN KEY (id) REFERENCES produto(id);


ALTER TABLE produto ADD CONSTRAINT FK_id_categoria FOREIGN KEY (id) REFERENCES categoria(id);


