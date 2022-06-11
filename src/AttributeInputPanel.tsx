import React from 'react';
import {Character, Attributes} from './character_data/Character'

interface AttributeProps {
    state: Character
    setState: (c: Character) => void
    name: string
}

interface AttributeInputPanelProps {
    state: Character
    setState: (c: Character) => void
}

export function AttributeInputPanel({state, setState}: AttributeInputPanelProps): JSX.Element {
    return (
        <div>
        {
            Object.keys(state.attributes).map(
                (name: string) =>
                <div>
                    <AttributeInput
                        state={state}
                        setState={setState}
                        name={name}/>
                </div>
            )
        }
        </div>
    )
}

function AttributeInput({state, setState, name}: AttributeProps): JSX.Element {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/[1-9](?![^\d])/.test(e.target.value)) {
            setState(
                {
                    ...state,
                    attributes: {
                        ...state.attributes,
                        [name as keyof Attributes]: parseInt(e.target.value),
                    }
                }
            )
        }
        else {
            e.target.value = e.target.value.substring(0, e.target.value.length - 1)
        }
    }

    return (
        <div>
            <label>{name} </label>
            <input
                type='text'
                defaultValue={state.startingClass[name as keyof Attributes]}
                maxLength={2}
                onChange={changeHandler}/>
        </div>
    )
}