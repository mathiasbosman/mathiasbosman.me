create table oauth2_identifiers
(
    id       uuid         not null,
    provider varchar(254) not null,
    uid      text         not null,
    user_id  uuid         not null
        constraint oauth2_identifiers_users_id_fk
            references users,
    created  timestamptz  not null,
    updated  timestamptz  not null
);

create unique index oauth2_identifiers_id_uindex
    on oauth2_identifiers (id);

create index oauth2_identifiers_uid_index
    on oauth2_identifiers (uid);

alter table oauth2_identifiers
    add constraint oauth2_identifiers_pk
        primary key (id);