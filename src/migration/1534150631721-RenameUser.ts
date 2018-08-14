import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameUser1534150631721 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE user RENAME TO shop_user');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('ALTER TABLE shop_user RENAME TO user');
    }

}
