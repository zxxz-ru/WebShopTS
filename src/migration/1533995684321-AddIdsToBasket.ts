import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIdsToBasket1533995684321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE basket ADD COLUMN productId integer`);
        await queryRunner.query(`ALTER TABLE basket ADD COLUMN userId integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE basket DROP COLUMN IF EXIST productId`);
        await queryRunner.query(`ALTER TABLE basket DROP COLUMN IF EXIST userId`);
    }

}
