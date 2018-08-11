import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfile1533890855088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: "profile",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true
          },
          {
            name: "firstName",
            type: "varchar"
          },
          {
            name: "lastName",
            type: "varchar"
          },
          {
            name: "age",
            type: "int"
          },
          {
            name: "photo",
            type: "varchar"
          },
          {
            name: "userId",
            type: "int"
          }
        ]
      }), true);

      await queryRunner.createForeignKey("profile", new TableForeignKey({
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "user"
      }));
    
        }

    public async down(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable("profile");
      const userKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1)
      await queryRunner.dropForeignKey(table, userKey);
      await queryRunner.dropColumn(table, "userId");
      await queryRunner.dropTable(table);
    }

}
