import { Attributes } from "./Character"
import * as PhysicalDefenses from "./tables/defenses/Physical"
import * as MagicDefense from "./tables/defenses/Magic"
import * as FireDefense from "./tables/defenses/Fire"
import * as LightningDefense from "./tables/defenses/Lightning"
import * as HolyDefense from "./tables/defenses/Holy"

export class Defenses {
    physical: number
    strike: number
    slash: number
    pierce: number
    magic: number
    fire: number
    lightning: number
    holy: number

    constructor(attributes: Attributes) {
        var physicalDefenses =
            PhysicalDefenses.Base
            + PhysicalDefenses.FromStrength[attributes.strength]
            + PhysicalDefenses.FromOtherStats[
                attributes.vigor
                + attributes.mind
                + attributes.endurance
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]

        this.physical = physicalDefenses
        this.strike = physicalDefenses
        this.slash = physicalDefenses
        this.pierce = physicalDefenses

        this.magic =
            MagicDefense.Base
            + MagicDefense.FromIntelligence[attributes.intelligence]
            + MagicDefense.FromOtherStats[
                attributes.vigor
                + attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.faith
                + attributes.arcane
            ]

        this.fire =
            FireDefense.Base
            + FireDefense.FromVigor[attributes.vigor]
            + FireDefense.FromOtherStats[
                attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]

        this.holy =
            HolyDefense.Base
            + HolyDefense.FromArcane[attributes.arcane]
            + HolyDefense.FromOtherStats[
                attributes.vigor
                + attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
            ]

        this.lightning =
            LightningDefense.Base
            + LightningDefense.FromAllStats[
                attributes.vigor
                + attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]
    }
}