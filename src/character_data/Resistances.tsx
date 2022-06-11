import { Attributes } from "./Character"
import * as Immunity from './tables/resistances/Immunity'
import * as Robustness from './tables/resistances/Robustness'
import * as Focus from './tables/resistances/Focus'
import * as Vitality from './tables/resistances/Vitality'

export class Resistances {
    immunity: number
    robustness: number
    focus: number
    vitality: number

    constructor(attributes: Attributes, armorResistances: Resistances) {

        this.immunity =
            armorResistances.immunity
            + Immunity.Base
            + Immunity.FromVigor[attributes.vigor]
            + Immunity.FromOtherStats[
                attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]

        this.robustness =
            armorResistances.robustness
            + Robustness.Base
            + Robustness.FromEndurance[attributes.endurance]
            + Robustness.FromOtherStats[
                attributes.vigor
                + attributes.mind
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]

        this.focus =
            armorResistances.focus
            + Focus.Base
            + Focus.FromMind[attributes.mind]
            + Focus.FromOtherStats[
                attributes.vigor
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
                + attributes.arcane
            ]

        this.vitality =
            armorResistances.vitality
            + Vitality.Base
            + Vitality.FromArcane[attributes.arcane]
            + Vitality.FromOtherStats[
                attributes.vigor
                + attributes.mind
                + attributes.endurance
                + attributes.strength
                + attributes.dexterity
                + attributes.intelligence
                + attributes.faith
            ]
    }
}