create table posts
(
    id        uuid
        constraint pk_posts primary key,
    poster_id uuid not null
        constraint posts_poster_fk references users,
    is_deleted boolean      not null,
    subject    varchar(254) not null,
    excerpt    text,
    body       text         not null,
    postdate   timestamptz,
    created    timestamptz  not null,
    updated    timestamptz  not null
);