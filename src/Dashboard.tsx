import { useState } from "react";
import { Card } from "./Card";
import { cards } from "./Cards";

export function Dashboard(){
    const [active, setActiveIndex] = useState(-1);
    const [heartReaction, setHeartReaction] = useState(false);
    const bgColour = [1,2,3,4,5,6,7,8];
    const list = cards.map(card =>
        <ul key={card.id}> 
            <Card 
                card={card} 
                active={active} 
                onButtonClick={() => clickShowDetails(card)}
                heart={heartReaction}
                onHeartClick={() => setHeartReaction(!heartReaction)}
                randomBgColour={bgColour[card.id]}
                />
        </ul>
    )
    
    function clickShowDetails(card){ 
        setActiveIndex(a => a === card.id ? -1 : card.id)
    }

    return list    
}
