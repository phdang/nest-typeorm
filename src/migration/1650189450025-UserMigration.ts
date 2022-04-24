import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1650189450025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD age INT(3) DEFAULT 0 AFTER name`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
  }
}
