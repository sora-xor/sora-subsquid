import assert from "assert"
import * as marshal from "./marshal"

export class HistoryElementDetails {
    private _data!: string | undefined | null

    constructor(props?: Partial<Omit<HistoryElementDetails, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._data = json.data == null ? undefined : marshal.string.fromJSON(json.data)
        }
    }

    get data(): string | undefined | null {
        return this._data
    }

    set data(value: string | undefined | null) {
        this._data = value
    }

    toJSON(): object {
        return {
            data: this.data,
        }
    }
}
