import { useState } from "react";
import { cards } from "./Cards";
import { Card } from "./Card";

export function Container({filterCards}){
    const [active, setActiveIndex] = useState(-1);
    const [heartReaction, setHeartReaction] = useState(false);

    const list = cards.filter((card)=> filterCards ? card.name.toLowerCase() === filterCards.toLowerCase() : true ).map(card =>
        <li key={card.id}> 
            <Card 
                card={card} 
                active={active} 
                onButtonClick={() => clickShowDetails(card)}
                heart={heartReaction}
                onHeartClick={() => setHeartReaction(!heartReaction)}
                />
        </li>
    )

    function clickShowDetails(card){ 
        setActiveIndex(a => a === card.id ? -1 : card.id)
    }

    return list
}