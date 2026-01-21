import { useState } from "react";
import { Card } from "./Card";
import { cats } from "./Cats";

export function Dashboard(){
    const [active, setActiveIndex] = useState(-1);
    const [heartReaction, setHeartReaction] = useState(false);

    const catsList = cats.map(cat =>
        <li key={cat.id}> 
            <Card 
                cat={cat} 
                isActive={active} 
                onButtonClick={() => clickShowDetails(cat)}
                heart={heartReaction}
                onHeartClick={() => setHeartReaction(!heartReaction)}
                />
        </li>
    )
    

    function clickShowDetails(cat){
        setActiveIndex(cat.id);
        setHeartReaction(false)
    }
    return catsList    
}

