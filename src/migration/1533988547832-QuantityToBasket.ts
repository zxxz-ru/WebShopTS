import {MigrationInterface, QueryRunner} from "typeorm";

export class QuantityToBasket1533988547832 implements MigrationInterface {

    public async up(qr: QueryRunner): Promise<any> {
       await qr.query(`ALTER TABLE basket ADD COLUMN quantity integer`);
    }

    public async down(qr: QueryRunner): Promise<any> {
       await qr.query(`ALTER TABLE basket DROP COLUMN IF EXIST quantity`);
    }

}
