import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBasket1533890802412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "basket",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "productId",
            type: "int"
          }
        ]
    }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable("basket");
    }

}
