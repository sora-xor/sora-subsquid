module.exports = class Data1714035126926 {
    name = 'Data1714035126926'

    async up(db) {
        await db.query(`DROP INDEX "public"."IDX_1ba28b188c45fa806f1cb9c039"`)
    }

    async down(db) {
        await db.query(`CREATE INDEX "IDX_1ba28b188c45fa806f1cb9c039" ON "history_element" ("data") `)
    }
}
