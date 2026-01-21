import { useState } from "react";
import { Card } from "./Card";
import { cats } from "./Cats";

export function Dashboard(){
    const [active, setActiveIndex] = useState(-1);
    const [heartReaction, setHeartReaction] = useState(false);

    const catsList = cats.map(cat =>
        <li key={cat.id}> 
            <div className="columns-3 p-8 flex justify-evenly">
                <Card cat={cat} isActive={active} onButtonClick={() => setActiveIndex(cat.id)}/>
            </div>
        </li>
    )
    

    return catsList    
}

// ritorniamo sulla logichina merdina di prima che usiamo gli indicini 
// come tipo di dato e non il booleanino merdino che può essere solo accesso
// o spento. CHIARO?
