CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE songs
(
    id          uuid default uuid_generate_v1(),
    name        varchar(3000),
    description varchar(3000),
    source      varchar(3000),
    audio       varchar(3000),
    image       varchar(3000),
    title       varchar(3000),
    primary key (id)
)