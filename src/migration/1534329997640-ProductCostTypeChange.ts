import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductCostTypeChange1534329997640 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product ALTER COLUMN cost
        SET DATA TYPE NUMERIC(10,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE product ALTER COLUMN cost
        SET DATA TYPE INTEGER`);
    }

}
