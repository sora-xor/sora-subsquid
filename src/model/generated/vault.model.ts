import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {VaultType} from "./_vaultType"
import {VaultStatus} from "./_vaultStatus"
import {VaultAccount} from "./vaultAccount.model"
import {Asset} from "./asset.model"
import {VaultEvent} from "./vaultEvent.model"

@Entity_()
export class Vault {
    constructor(props?: Partial<Vault>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("varchar", {length: 5, nullable: false})
    type!: VaultType

    @Column_("varchar", {length: 10, nullable: false})
    status!: VaultStatus

    @Index_()
    @ManyToOne_(() => VaultAccount, {nullable: true})
    owner!: VaultAccount

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    collateralAsset!: Asset

    @Index_()
    @ManyToOne_(() => Asset, {nullable: true})
    debtAsset!: Asset

    @Column_("text", {nullable: true})
    collateralAmountReturned!: string | undefined | null

    @Column_("int4", {nullable: false})
    createdAtBlock!: number

    @Column_("int4", {nullable: false})
    updatedAtBlock!: number

    @OneToMany_(() => VaultEvent, e => e.vault)
    events!: VaultEvent[]
}
