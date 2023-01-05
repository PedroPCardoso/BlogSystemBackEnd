CREATE TABLE Users (
    userId int  PRIMARY KEY,
    username varchar(25) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(30) NOT NULL,
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Posts (
    postId int PRIMARY KEY,
    userId int    not null,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    tags VARCHAR(255),
    comments int ,
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    constraint Posts_Users_fk   foreign key (userId) references Users (userId)
);

CREATE TABLE Comments (
    commentsId int PRIMARY KEY,
    postId int not null,
    body TEXT NOT NULL,
    created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    constraint Comments_Pots_fk 
    foreign key (postId) references Posts (postId));