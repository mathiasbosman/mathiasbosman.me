create table posts
(
    id         int
        constraint pk_user primary key,
    poster_id  int          not null
        constraint posts_poster_fk references users,
    is_deleted boolean      not null,
    subject    varchar(254) not null,
    body       text         not null,
    created    timestamptz  not null,
    updated    timestamptz  not null
);

create sequence posts_seq;