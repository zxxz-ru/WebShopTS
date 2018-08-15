import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBasket1533890802412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE profile ADD CONSTRAINT pkfk
        FOREIGN KEY (id) REFERENCES "user"(id)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE profile DROP CONSTRAINT pkfk`);
    }
}
