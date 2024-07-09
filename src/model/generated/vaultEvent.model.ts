import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {VaultEventType} from "./_vaultEventType"
import {Vault} from "./vault.model"

@Entity_()
export class VaultEvent {
    constructor(props?: Partial<VaultEvent>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 17, nullable: false})
    type!: VaultEventType

    @Index_()
    @ManyToOne_(() => Vault, {nullable: true})
    vault!: Vault

    @Column_("int4", {nullable: false})
    timestamp!: number

    @Column_("int4", {nullable: false})
    block!: number

    @Column_("text", {nullable: true})
    amount!: string | undefined | null
}
