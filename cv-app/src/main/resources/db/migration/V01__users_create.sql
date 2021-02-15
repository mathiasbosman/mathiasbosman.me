create table users
(
    id         int
        constraint pk_user primary key,
    username   varchar(50)  not null
        constraint users_username_u unique,
    first_name varchar(254) not null,
    last_name  varchar(254) not null,
    email      varchar(254)
        constraint users_email_u unique,
    created    timestamptz  not null,
    updated    timestamptz  not null
);

create sequence users_seq;