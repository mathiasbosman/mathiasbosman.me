create table roles
(
    id          int
        constraint pk_role primary key,
    code        varchar(50)  not null
        constraint role_code_u unique,
    description varchar(254) not null,
    level       int          not null,
    created     timestamptz  not null,
    updated     timestamptz  not null
);

create sequence roles_seq;

insert into roles
values (nextval('roles_seq'), 'ADMIN', 'Administrator', 99, current_timestamp, current_timestamp);
insert into roles
values (nextval('roles_seq'), 'USER', 'User', 0, current_timestamp, current_timestamp);

alter table users
    add role int;

alter table users
    add constraint users_role_fk
        foreign key (role) references roles (id);

