CREATE DATABASE gotechdb;
use gotechdb;


CREATE TABLE cliente (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(60) NOT NULL,
    senha varchar(100) NOT NULL,
    nome_empresa varchar(50) NOT NULL
);

-- INSERT INTO usuario (nome, contato, email, senha, banco_horas, tipo_acesso)
-- VALUES ('João Silva', '11987654321', 'joao.silva@email.com', 'senhaForte123', 50, 'admin');


CREATE TABLE usuario (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(60),
    contato varchar(50),
    email varchar(60) NOT NULL,
    senha varchar(100) NOT NULL,
    banco_horas INT,
    tipo_acesso varchar(6)
);

CREATE TABLE projeto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome varchar(60),
    fk_cliente INT, 
    fk_usuario INT,
    status varchar(20),
    descricao varchar(500),

    FOREIGN KEY (fk_cliente) REFERENCES cliente (id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);

CREATE TABLE registro_ponto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    entrada varchar(4),
    saida varchar(4),
    despesas FLOAT,
    descricao varchar(200),
    fk_cliente INT,
    fk_usuario INT,
    fk_projeto INT,

    FOREIGN KEY (fk_cliente) REFERENCES cliente (id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id),
    FOREIGN KEY (fk_projeto) REFERENCES projeto (id)
);

CREATE TABLE r_consultoria (
    fk_cliente INT,
    fk_usuario INT,

    FOREIGN KEY (fk_cliente) REFERENCES cliente (id),
    FOREIGN KEY (fk_usuario) REFERENCES usuario (id)
);
