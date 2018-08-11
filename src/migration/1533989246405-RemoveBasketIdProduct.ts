import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RemoveBasketIdProduct1533989246405 implements MigrationInterface {

    public async up(qr: QueryRunner): Promise<any> {
      const table = await qr.getTable("product");
      const basketKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("basketId") !== -1)
      await qr.dropForeignKey(table, basketKey);
      await qr.dropColumn(table, "basketId");
    }

    public async down(qr: QueryRunner): Promise<any> {
      await qr.createForeignKey("product", new TableForeignKey({
        columnNames: ["basketId"],
        referencedColumnNames: ["id"],
        referencedTableName: "basket"
      }));
    }

}
