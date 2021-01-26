create table users
(
    id         int
        constraint pk_user primary key,
    username   varchar(50)  not null
        constraint user_username_u unique,
    first_name varchar(254) not null,
    last_name  varchar(254) not null,
    created    timestamptz    not null,
    updated    timestamptz    not null
);

create sequence users_seq;