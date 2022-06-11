import React from 'react';
import { Character } from './character_data/Character'
import { StartingClasses } from './character_data/tables/StartingClasses'

interface ClassSelectProps {
    state: Character
    setState: (c: Character) => void
}

export function ClassSelectPanel({state, setState}: ClassSelectProps): JSX.Element {

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setState(
            {
                ...state,
                attributes: StartingClasses[e.target.value],
                startingClass: StartingClasses[e.target.value],
            }
        )
    }

    return (
        <div>
            <label>starting class </label>
            <select onChange={changeHandler}>
                {
                    Object.keys(StartingClasses).map(
                        (name: string) =>
                        <option value={name}>{name}</option>
                    )
                }
            </select>
        </div>
    )
}