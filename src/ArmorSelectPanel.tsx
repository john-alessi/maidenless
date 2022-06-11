import React from 'react'
import { Character } from './character_data/Character'
import { ArmorOptions, ArmorSet } from './character_data/tables/armor/Armor'

interface ArmorSelectProps {
    state: Character
    setState: (c: Character) => void
}

interface ArmorProps {
    state: Character
    setState: (c: Character) => void
    slot: keyof typeof ArmorOptions
}

export function ArmorSelectPanel({state, setState}: ArmorSelectProps): JSX.Element {
    return (
        <div>
            <ArmorSelectElement state={state} setState={setState} slot={'helm'} />
            <ArmorSelectElement state={state} setState={setState} slot={'chest'} />
            <ArmorSelectElement state={state} setState={setState} slot={'legs'} />
            <ArmorSelectElement state={state} setState={setState} slot={'gauntlets'} />
        </div>
    )
}

function ArmorSelectElement({state, setState, slot}: ArmorProps): JSX.Element {

    var options = ArmorOptions[slot]

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState(
            {
                ...state,
                armorSet: {
                    ...state.armorSet,
                    [slot as keyof ArmorSet]: options[e.target.value]
                }
            }
        )
    }

    return (
        <div>
            <label>{slot} </label>
            <select
                onChange={changeHandler}>
            {
                Object.keys(options).map(
                    (name: keyof typeof options) =>
                    <option value={name}>{options[name].displayName} </option>
                )
            }
            </select>
        </div>
    )
}