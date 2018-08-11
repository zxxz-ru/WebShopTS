import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
  } from "typeorm";
import { Basket } from "../entity/basket";

export class CreateUser1533890864000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "login",
            type: "varchar"
          },
          {
            name: "password",
            type: "varchar"
          },
          {
            name: "basketId",
            type: "int"
          },
        ]
      }), true);

      await queryRunner.createForeignKey("user", new TableForeignKey({
        columnNames: ["profileId"],
        referencedColumnNames: ["id"],
        referencedTableName: "profile"
      }));
    
      await queryRunner.createForeignKey("user", new TableForeignKey({
        columnNames: ["basketId"],
        referencedColumnNames: ["id"],
        referencedTableName: "basket"
      }));
    }
  //  DOWN METHOD
    public async down(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable("user");
      const basketKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("basketId") !== -1)
      const profileKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("profileId") !== -1)
      await queryRunner.dropForeignKey(table, basketKey);
      await queryRunner.dropForeignKey(table, profileKey);
      await queryRunner.dropColumn(table, "basketId");
      await queryRunner.dropColumn(table, "profileId");
      await queryRunner.dropTable(table);
}

}
