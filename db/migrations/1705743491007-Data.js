module.exports = class Data1705743491007 {
    name = 'Data1705743491007'

    async up(db) {
		await db.query(`ALTER TABLE history_element ADD COLUMN data_receivers text[] NOT NULL DEFAULT '{}'`)
		await db.query(`
			UPDATE history_element
			SET data_receivers = COALESCE(
				(
					SELECT array_agg(elem->>'accountId')
					FROM jsonb_array_elements(data->'receivers') AS elem
				),
				'{}'
			)
			WHERE data->'receivers' IS NOT NULL;
		`)
		await db.query(`ALTER TABLE "history_element" ALTER COLUMN "block_height" TYPE integer USING "block_height"::integer`)
        await db.query(`ALTER TABLE "history_element" ALTER COLUMN "block_height" SET NOT NULL`)
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
    }

    async down(db) {
        await db.query(`ALTER TABLE "history_element" DROP COLUMN "data_receivers"`)
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
    }
}
