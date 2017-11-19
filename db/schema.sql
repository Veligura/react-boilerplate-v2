begin;

drop schema if exists todos_list cascade;
create schema todos_list;

create table todos_list.item (
  id         serial primary key,
  body       text not null,
  created_at timestamp default now()
);

comment on table todos_list.item             is 'An item of the list.';
comment on column todos_list.item.id         is 'The primary unique identifier for the item';
comment on column todos_list.item.body       is 'The item’s content';
comment on column todos_list.item.created_at is 'The time this person was created.';

commit;