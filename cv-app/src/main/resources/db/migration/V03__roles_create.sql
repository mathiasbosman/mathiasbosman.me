create table roles
(
    id          uuid
        constraint pk_role primary key,
    code        varchar(50)  not null
        constraint role_code_u unique,
    description varchar(254) not null,
    level       int          not null,
    created     timestamptz  not null,
    updated     timestamptz  not null
);

insert into roles
values (md5(random()::text || clock_timestamp()::text)::uuid, 'ADMIN', 'Administrator', 99,
        current_timestamp, current_timestamp);
insert into roles
values (md5(random()::text || clock_timestamp()::text)::uuid, 'USER', 'User', 0, current_timestamp,
        current_timestamp);

alter table users
    add role_id uuid;

alter table users
    add constraint users_role_fk
        foreign key (role_id) references roles (id);

