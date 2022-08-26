import { MigrationInterface, QueryRunner } from "typeorm";

export class createPaymentInfo1661530818185 implements MigrationInterface {
    name = 'createPaymentInfo1661530818185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "payment_infos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "number" character varying(16) NOT NULL, "dueData" date NOT NULL, "code" character varying(3) NOT NULL, CONSTRAINT "PK_ccb7464329b1faa3eed32b3ab1b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payment_infos"`);
    }

}
