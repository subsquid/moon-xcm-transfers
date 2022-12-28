'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20221228153613 extends Migration {

  async up() {
    this.addSql('create table "account" ("id" varchar(255) not null, constraint "account_pkey" primary key ("id"));');

    this.addSql('create table "transfer" ("id" varchar(255) not null, "block_number" int4 not null, "timestamp" timestamp with time zone not null, "extrinsic_hash" text null, "from_id" varchar(255) not null, "to" jsonb not null, "assets" jsonb not null, "fee" numeric not null, constraint "transfer_pkey" primary key ("id"));');
    this.addSql('create index "transfer_block_number_index" on "transfer" ("block_number");');
    this.addSql('create index "transfer_timestamp_index" on "transfer" ("timestamp");');
    this.addSql('create index "transfer_extrinsic_hash_index" on "transfer" ("extrinsic_hash");');
    this.addSql('create index "transfer_from_id_index" on "transfer" ("from_id");');

    this.addSql('alter table "transfer" add constraint "transfer_from_id_foreign" foreign key ("from_id") references "account" ("id") on update cascade;');
  }

  async down() {
    this.addSql('alter table "transfer" drop constraint "transfer_from_id_foreign";');

    this.addSql('drop table if exists "account" cascade;');

    this.addSql('drop table if exists "transfer" cascade;');
  }

}
exports.Migration20221228153613 = Migration20221228153613;
