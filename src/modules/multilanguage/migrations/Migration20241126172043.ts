import { Migration } from '@mikro-orm/migrations';

export class Migration20241126172043 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "language" ("language_code" text not null, "name" text not null, "is_active" boolean not null, "activation_date" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "language_pkey" primary key ("language_code"));');

    this.addSql('create table if not exists "language_version" ("version_id" text not null, "language_id" text not null, "content" jsonb not null, "platform" text check ("platform" in (\'common\', \'web\', \'mobile\')) not null, "available_from" timestamptz not null, "available_until" timestamptz null, "status" text check ("status" in (\'draft\', \'published\')) not null, "author" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "language_version_pkey" primary key ("version_id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_language_version_language_id" ON "language_version" (language_id) WHERE deleted_at IS NULL;');

    this.addSql('alter table if exists "language_version" add constraint "language_version_language_id_foreign" foreign key ("language_id") references "language" ("language_code") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table if exists "language_version" drop constraint if exists "language_version_language_id_foreign";');

    this.addSql('drop table if exists "language" cascade;');

    this.addSql('drop table if exists "language_version" cascade;');
  }

}
