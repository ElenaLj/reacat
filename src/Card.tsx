import { Heart } from "lucide-react";
import { useState } from "react";

export function Card({card, active, onButtonClick, heart, onHeartClick }) {
    const [isAdopted, setIsAdopted] = useState(false);
    
    return <>
        <div className="card bg-pastel-1 w-96 h-108 p-2 shadow-sm">
            <button onClick={onButtonClick} className="cursor-pointer">Show details</button>
            <h2 className="card-title justify-center">{card.name}</h2>
            <figure >
                <img
                    src={card.image}
                    alt={card.name} 
                />
                </figure>
                
                {/* sezione mostra dettagli */}
                {
                active === card.id && 
                <div className="card-body overflow-auto">
                    <p>{card.desc}</p>
                    <Heart fill={heart ? "red" : "none"} onClick={onHeartClick}/>
                    <button onClick={adoptMe} disabled={isAdopted}>{isAdopted ? "Adopted" : "Adopt me"}</button>
                </div>
                }
        </div>
    </>
    
function adoptMe(){
    setIsAdopted(true)
}
}

