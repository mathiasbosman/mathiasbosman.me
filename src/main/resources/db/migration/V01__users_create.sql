create table users
(
    id           uuid
        constraint pk_user primary key,
    username     varchar(50)  not null
        constraint users_username_u unique,
    display_name varchar(254) not null,
    email        varchar(254)
        constraint users_email_u unique,
    last_login   timestamptz,
    created      timestamptz  not null,
    updated      timestamptz  not null
);