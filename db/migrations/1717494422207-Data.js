module.exports = class Data1717494422207 {
    name = 'Data1717494422207'

    async up(db) {
        await db.query(`CREATE TABLE "vault" ("id" character varying NOT NULL, "type" character varying(5) NOT NULL, "status" character varying(10) NOT NULL, "collateral_amount_returned" text, "created_at_block" integer NOT NULL, "updated_at_block" integer NOT NULL, "owner_id" character varying, "collateral_asset_id" character varying, "debt_asset_id" character varying, CONSTRAINT "PK_dd0898234c77f9d97585171ac59" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_148dd0705752e2c28a1606248d" ON "vault" ("owner_id") `)
        await db.query(`CREATE INDEX "IDX_a19f03d5a4197deffbce32903f" ON "vault" ("collateral_asset_id") `)
        await db.query(`CREATE INDEX "IDX_156de4c88c3ba57f72f7c565d4" ON "vault" ("debt_asset_id") `)
        await db.query(`CREATE TABLE "vault_event" ("id" character varying NOT NULL, "type" character varying(17) NOT NULL, "timestamp" integer NOT NULL, "block" integer NOT NULL, "amount" text, "vault_id" character varying, CONSTRAINT "PK_a1be97443793296b28b30b2a225" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0d4cf83b7f80fe4eec504acc43" ON "vault_event" ("vault_id") `)
        await db.query(`CREATE TABLE "vault_account" ("id" character varying NOT NULL, "last_liquidation_id" character varying, CONSTRAINT "PK_da62235e5f15fa78c3afc5fb3ee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f62fc09f80c84028a6ff0a3f99" ON "vault_account" ("last_liquidation_id") `)
        await db.query(`ALTER TABLE "vault" ADD CONSTRAINT "FK_148dd0705752e2c28a1606248d5" FOREIGN KEY ("owner_id") REFERENCES "vault_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "vault" ADD CONSTRAINT "FK_a19f03d5a4197deffbce32903ff" FOREIGN KEY ("collateral_asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "vault" ADD CONSTRAINT "FK_156de4c88c3ba57f72f7c565d47" FOREIGN KEY ("debt_asset_id") REFERENCES "asset"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "vault_event" ADD CONSTRAINT "FK_0d4cf83b7f80fe4eec504acc434" FOREIGN KEY ("vault_id") REFERENCES "vault"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "vault_account" ADD CONSTRAINT "FK_f62fc09f80c84028a6ff0a3f99f" FOREIGN KEY ("last_liquidation_id") REFERENCES "vault_event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "vault"`)
        await db.query(`DROP INDEX "public"."IDX_148dd0705752e2c28a1606248d"`)
        await db.query(`DROP INDEX "public"."IDX_a19f03d5a4197deffbce32903f"`)
        await db.query(`DROP INDEX "public"."IDX_156de4c88c3ba57f72f7c565d4"`)
        await db.query(`DROP TABLE "vault_event"`)
        await db.query(`DROP INDEX "public"."IDX_0d4cf83b7f80fe4eec504acc43"`)
        await db.query(`DROP TABLE "vault_account"`)
        await db.query(`DROP INDEX "public"."IDX_f62fc09f80c84028a6ff0a3f99"`)
        await db.query(`ALTER TABLE "vault" DROP CONSTRAINT "FK_148dd0705752e2c28a1606248d5"`)
        await db.query(`ALTER TABLE "vault" DROP CONSTRAINT "FK_a19f03d5a4197deffbce32903ff"`)
        await db.query(`ALTER TABLE "vault" DROP CONSTRAINT "FK_156de4c88c3ba57f72f7c565d47"`)
        await db.query(`ALTER TABLE "vault_event" DROP CONSTRAINT "FK_0d4cf83b7f80fe4eec504acc434"`)
        await db.query(`ALTER TABLE "vault_account" DROP CONSTRAINT "FK_f62fc09f80c84028a6ff0a3f99f"`)
    }
}
