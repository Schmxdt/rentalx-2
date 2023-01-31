import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Owner1675174834554 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "owner",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "celular",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "inativo",
            type: "boolean",
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
