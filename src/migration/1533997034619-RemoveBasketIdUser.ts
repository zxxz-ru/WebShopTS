import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RemoveBasketIdUser1533997034619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable("user");
      const basketKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("basketId") !== -1)
      await queryRunner.dropForeignKey(table, basketKey);
      await queryRunner.dropColumn(table, "basketId");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey("user", new TableForeignKey({
        columnNames: ["basketId"],
        referencedColumnNames: ["id"],
        referencedTableName: "basket"
      }));
    }

}
