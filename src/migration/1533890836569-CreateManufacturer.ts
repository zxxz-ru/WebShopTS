import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { Product } from "../entity/product";

export class CreateManufacturer1533890836569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "manufacturer",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "address",
            type: "varchar"
          },
          {
            name: "productId",
            type: "int"
          }
        ]
      }), true);

      await queryRunner.createForeignKey("manufacturer",  new TableForeignKey({
        columnNames: ["productId"],
        referencedColumnNames: ["id"],
        referencedTableName: "product"
      }));
    
        }

    public async down(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable("manufacturer");
      const productKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("productId") !== -1)
      await queryRunner.dropForeignKey(table, productKey);
      await queryRunner.dropColumn(table, "productId");
      await queryRunner.dropTable(table);
    }

}
