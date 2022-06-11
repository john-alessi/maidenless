import React from 'react';
import './App.css';
import { AttributeInputPanel } from './AttributeInputPanel';
import { ClassSelectPanel } from './ClassSelectPanel'
import { Character } from './character_data/Character'
import { CharacterStats } from './character_data/CharacterStats';
import { ArmorSelectPanel } from './ArmorSelectPanel';

let state: Character
let setState: (c: Character) => void
let derivedStats: CharacterStats

export default function App(): JSX.Element {
    [state, setState] = React.useState<Character>(new Character());
    derivedStats = new CharacterStats(state)

    return (
        <div className='App'>
            <h1>MAIDENLESS CHARACTER PLANNER</h1>
            <a href="https://github.com/john-alessi/maidenless">GitHub</a>
            <ClassSelectPanel state={state} setState={setState} />
            <AttributeInputPanel state={state} setState={setState} />
            <ArmorSelectPanel state={state} setState={setState} />
            <pre>{JSON.stringify(derivedStats, null, '\t')}</pre>
        </div>
    );
}
