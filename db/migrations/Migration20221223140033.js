'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const { Migration } = require('@mikro-orm/migrations');

class Migration20221223140033 extends Migration {

  async up() {
    this.addSql('create table "account" ("id" text not null, "last_update_block" int4 not null, constraint "account_pkey" primary key ("id"));');

    this.addSql('create table "transfer" ("id" text not null, "timestamp" timestamp with time zone not null, "block_number" int4 not null, "extrinsic_hash" text not null, "to" jsonb null, "from" jsonb not null, "asset" jsonb not null, "success" boolean not null, "type" text check ("type" in (\'Native\', \'Currency\', \'Xcm\')) not null, constraint "transfer_pkey" primary key ("id"));');
    this.addSql('create index "transfer_block_number_index" on "transfer" ("block_number");');
    this.addSql('create index "transfer_extrinsic_hash_index" on "transfer" ("extrinsic_hash");');
    this.addSql('create index "transfer_success_index" on "transfer" ("success");');

    this.addSql('create table "account_transfer" ("id" text not null, "transfer_id" text null, "account_id" text not null, "direction" text check ("direction" in (\'From\', \'To\')) null, constraint "account_transfer_pkey" primary key ("id"));');
    this.addSql('create index "account_transfer_transfer_id_index" on "account_transfer" ("transfer_id");');
    this.addSql('create index "account_transfer_account_id_index" on "account_transfer" ("account_id");');

    this.addSql('alter table "account_transfer" add constraint "account_transfer_transfer_id_foreign" foreign key ("transfer_id") references "transfer" ("id") on update cascade on delete set null;');
    this.addSql('alter table "account_transfer" add constraint "account_transfer_account_id_foreign" foreign key ("account_id") references "account" ("id") on update cascade;');
  }

  async down() {
    this.addSql('alter table "account_transfer" drop constraint "account_transfer_account_id_foreign";');

    this.addSql('alter table "account_transfer" drop constraint "account_transfer_transfer_id_foreign";');

    this.addSql('drop table if exists "account" cascade;');

    this.addSql('drop table if exists "transfer" cascade;');

    this.addSql('drop table if exists "account_transfer" cascade;');
  }

}
exports.Migration20221223140033 = Migration20221223140033;
