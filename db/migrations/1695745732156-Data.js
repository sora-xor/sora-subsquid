module.exports = class Data1695745732156 {
    name = 'Data1695745732156'

    async up(db) {
        await db.query(`CREATE TABLE "staking_era_nomination" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "era_id" character varying, "validator_id" character varying, "nominator_id" character varying, CONSTRAINT "PK_d1ce2e6d58ebf7053807bd6b272" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ed499c65e19548d4f349537fe9" ON "staking_era_nomination" ("era_id") `)
        await db.query(`CREATE INDEX "IDX_cb2e9954a7c5149a4ba735a768" ON "staking_era_nomination" ("validator_id") `)
        await db.query(`CREATE INDEX "IDX_cd4789cc12b46d50fc49dbccbe" ON "staking_era_nomination" ("nominator_id") `)
        await db.query(`CREATE TABLE "staking_era_nominator" ("id" character varying NOT NULL, "bond" numeric NOT NULL, "era_id" character varying, "staker_id" character varying, CONSTRAINT "PK_18d3098391026ff0413079dae10" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_edad8317913bf0e00ee0c26379" ON "staking_era_nominator" ("era_id") `)
        await db.query(`CREATE INDEX "IDX_cb77b582f57892defdec13e8aa" ON "staking_era_nominator" ("staker_id") `)
        await db.query(`CREATE TABLE "staking_era" ("id" character varying NOT NULL, "index" integer NOT NULL, "start_block" numeric NOT NULL, "end_block" numeric NOT NULL, CONSTRAINT "PK_dd74dd2d2d4b81ef3f7184c80ad" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4a6b670ba101e44f48be28d0ad" ON "staking_era" ("index") `)
        await db.query(`CREATE TABLE "staking_validator" ("id" character varying NOT NULL, "bond" numeric NOT NULL, CONSTRAINT "PK_73f4aca8f48b8168d8f702de0c1" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "staking_era_validator" ("id" character varying NOT NULL, "own_bond" numeric NOT NULL, "total_bond" numeric NOT NULL, "reward_amount" numeric NOT NULL, "era_id" character varying, "validator_id" character varying, "staker_id" character varying, CONSTRAINT "PK_605ce443a47c3fd9fff56ccf080" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_8356e80f170f7179763bb8f3f1" ON "staking_era_validator" ("era_id") `)
        await db.query(`CREATE INDEX "IDX_1857f344a23e3608e2be14c9f4" ON "staking_era_validator" ("validator_id") `)
        await db.query(`CREATE INDEX "IDX_4e9dda11816f3cff08757719ba" ON "staking_era_validator" ("staker_id") `)
        await db.query(`CREATE TABLE "staking_staker" ("id" character varying NOT NULL, CONSTRAINT "PK_aee6a9f221ff8950491e53e87d6" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "staking_reward" ADD "staker_id" character varying`)
        await db.query(`CREATE INDEX "IDX_64fe4e1309be60aee5ff677a87" ON "staking_reward" ("staker_id") `)
        await db.query(`ALTER TABLE "staking_era_nomination" ADD CONSTRAINT "FK_ed499c65e19548d4f349537fe91" FOREIGN KEY ("era_id") REFERENCES "staking_era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_nomination" ADD CONSTRAINT "FK_cb2e9954a7c5149a4ba735a7687" FOREIGN KEY ("validator_id") REFERENCES "staking_era_validator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_nomination" ADD CONSTRAINT "FK_cd4789cc12b46d50fc49dbccbe2" FOREIGN KEY ("nominator_id") REFERENCES "staking_era_nominator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_nominator" ADD CONSTRAINT "FK_edad8317913bf0e00ee0c263796" FOREIGN KEY ("era_id") REFERENCES "staking_era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_nominator" ADD CONSTRAINT "FK_cb77b582f57892defdec13e8aa5" FOREIGN KEY ("staker_id") REFERENCES "staking_staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_validator" ADD CONSTRAINT "FK_8356e80f170f7179763bb8f3f14" FOREIGN KEY ("era_id") REFERENCES "staking_era"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_validator" ADD CONSTRAINT "FK_1857f344a23e3608e2be14c9f4e" FOREIGN KEY ("validator_id") REFERENCES "staking_validator"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_era_validator" ADD CONSTRAINT "FK_4e9dda11816f3cff08757719ba6" FOREIGN KEY ("staker_id") REFERENCES "staking_staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking_reward" ADD CONSTRAINT "FK_64fe4e1309be60aee5ff677a878" FOREIGN KEY ("staker_id") REFERENCES "staking_staker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "staking_era_nomination"`)
        await db.query(`DROP INDEX "public"."IDX_ed499c65e19548d4f349537fe9"`)
        await db.query(`DROP INDEX "public"."IDX_cb2e9954a7c5149a4ba735a768"`)
        await db.query(`DROP INDEX "public"."IDX_cd4789cc12b46d50fc49dbccbe"`)
        await db.query(`DROP TABLE "staking_era_nominator"`)
        await db.query(`DROP INDEX "public"."IDX_edad8317913bf0e00ee0c26379"`)
        await db.query(`DROP INDEX "public"."IDX_cb77b582f57892defdec13e8aa"`)
        await db.query(`DROP TABLE "staking_era"`)
        await db.query(`DROP INDEX "public"."IDX_4a6b670ba101e44f48be28d0ad"`)
        await db.query(`DROP TABLE "staking_validator"`)
        await db.query(`DROP TABLE "staking_era_validator"`)
        await db.query(`DROP INDEX "public"."IDX_8356e80f170f7179763bb8f3f1"`)
        await db.query(`DROP INDEX "public"."IDX_1857f344a23e3608e2be14c9f4"`)
        await db.query(`DROP INDEX "public"."IDX_4e9dda11816f3cff08757719ba"`)
        await db.query(`DROP TABLE "staking_staker"`)
        await db.query(`ALTER TABLE "staking_reward" DROP COLUMN "staker_id"`)
        await db.query(`DROP INDEX "public"."IDX_64fe4e1309be60aee5ff677a87"`)
        await db.query(`ALTER TABLE "staking_era_nomination" DROP CONSTRAINT "FK_ed499c65e19548d4f349537fe91"`)
        await db.query(`ALTER TABLE "staking_era_nomination" DROP CONSTRAINT "FK_cb2e9954a7c5149a4ba735a7687"`)
        await db.query(`ALTER TABLE "staking_era_nomination" DROP CONSTRAINT "FK_cd4789cc12b46d50fc49dbccbe2"`)
        await db.query(`ALTER TABLE "staking_era_nominator" DROP CONSTRAINT "FK_edad8317913bf0e00ee0c263796"`)
        await db.query(`ALTER TABLE "staking_era_nominator" DROP CONSTRAINT "FK_cb77b582f57892defdec13e8aa5"`)
        await db.query(`ALTER TABLE "staking_era_validator" DROP CONSTRAINT "FK_8356e80f170f7179763bb8f3f14"`)
        await db.query(`ALTER TABLE "staking_era_validator" DROP CONSTRAINT "FK_1857f344a23e3608e2be14c9f4e"`)
        await db.query(`ALTER TABLE "staking_era_validator" DROP CONSTRAINT "FK_4e9dda11816f3cff08757719ba6"`)
        await db.query(`ALTER TABLE "staking_reward" DROP CONSTRAINT "FK_64fe4e1309be60aee5ff677a878"`)
    }
}