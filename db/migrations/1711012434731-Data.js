module.exports = class Data1711012434731 {
    name = 'Data1711012434731'

    async up(db) {
        await db.query(`ALTER TABLE "network_stats" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "network_snapshot" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "asset_snapshot" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "pool_xyk" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "asset" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_receivers"`)
        await db.query(`ALTER TABLE "account" DROP COLUMN "updated_at_block"`)
        await db.query(`ALTER TABLE "referrer_reward" DROP COLUMN "updated_at_block"`)
        await db.query(`CREATE INDEX "IDX_3173c666c0fd107f48f9a5ec72" ON "asset_snapshot" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_726ee78085268396a633201746" ON "history_element_call" ("updated_at_block") `)
        await db.query(`CREATE INDEX "IDX_1e20194d81a1b3745e74305903" ON "history_element" ("block_height") `)
        await db.query(`CREATE INDEX "IDX_3c504866f0a2d7387691e3ac14" ON "history_element" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
        await db.query(`CREATE INDEX "IDX_503ada649fbdf91665248633e8" ON "history_element" ("updated_at_block") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "network_stats" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "network_snapshot" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "asset_snapshot" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "pool_xyk" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "asset" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "history_element" ADD "data_receivers" text array NOT NULL DEFAULT '{}'`)
        await db.query(`ALTER TABLE "account" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`ALTER TABLE "referrer_reward" ADD "updated_at_block" integer NOT NULL`)
        await db.query(`DROP INDEX "public"."IDX_3173c666c0fd107f48f9a5ec72"`)
        await db.query(`DROP INDEX "public"."IDX_726ee78085268396a633201746"`)
        await db.query(`DROP INDEX "public"."IDX_1e20194d81a1b3745e74305903"`)
        await db.query(`DROP INDEX "public"."IDX_3c504866f0a2d7387691e3ac14"`)
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
        await db.query(`DROP INDEX "public"."IDX_503ada649fbdf91665248633e8"`)
    }
}
