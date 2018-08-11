import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProduct1533890846521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "product",
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
            name: "cost",
            type: "int"
          },
          {
            name: "basketId",
            type: "int"
          },
          {
            name: "manufacturerId",
            type: "int"
          },
        ]
      }), true);

      await queryRunner.createForeignKey("product", new TableForeignKey({
        columnNames: ["manufacturerId"],
        referencedColumnNames: ["id"],
        referencedTableName: "manufacturer"
      }));
    
      await queryRunner.createForeignKey("product", new TableForeignKey({
        columnNames: ["basketId"],
        referencedColumnNames: ["id"],
        referencedTableName: "basket"
      }));
    
        }

    public async down(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable("product");
      const basketKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("basketId") !== -1)
      const manufacturerKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("manufacturerId") !== -1)
      await queryRunner.dropForeignKey(table, basketKey);
      await queryRunner.dropForeignKey(table, manufacturerKey);
      await queryRunner.dropColumn(table, "basketId");
      await queryRunner.dropColumn(table, "manufacturerId");
      await queryRunner.dropTable(table);
    }

  }
