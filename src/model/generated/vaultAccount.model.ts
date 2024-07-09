import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {VaultEvent} from "./vaultEvent.model"

@Entity_()
export class VaultAccount {
    constructor(props?: Partial<VaultAccount>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => VaultEvent, {nullable: true})
    lastLiquidation!: VaultEvent | undefined | null
}
