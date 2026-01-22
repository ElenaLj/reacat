import { Heart } from "lucide-react";
import { useState } from "react";

export function Card({card, active, onButtonClick, heart, onHeartClick, randomBgColour}) {
    const [isAdopted, setIsAdopted] = useState(false);
    
    return <>
        <div className={`"card bg-pastel-${randomBgColour} w-96 shadow-sm"`}>
            <button onClick={onButtonClick}>Show details</button>
            <figure >
                <img
                    src={card.image}
                    alt={card.name} 
                    className="object-fill"/>
                </figure>
                
                {/* sezione mostra dettagli */}
                {
                active === card.id && <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p>{card.desc}</p>
                {<Heart fill={heart ? "red" : "none"} onClick={onHeartClick}/>} 
                <button onClick={adoptMe} disabled={isAdopted}>{isAdopted ? "Adopted" : "Adopt me"}</button>
                </div>
                }
        </div>
    </>
    
function adoptMe(){
    setIsAdopted(true)
}
}

