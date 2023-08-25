create table role (
    id int not null AUTO_INCREMENT PRIMARY KEY,
    name varchar(20)
);
    
CREATE TABLE user_chat (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(50),
    password varchar(255),
    role_id int,
    CONSTRAINT fk_user_chat_role
    FOREIGN KEY (role_id) REFERENCES role(id)
);