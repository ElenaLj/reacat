import { useState } from 'react';
import { Heart } from 'lucide-react'

const cats: Cat = [
    {
        id: 0,
        name: "Merlino",
        gender: "M",
        age: 2,
        colour: "white and black",
        desc: "lorem ipsum Merlino",
        image: "https://cdn2.thecatapi.com/images/4os.jpg"
    },
    {
        id: 1,
        name: "Milly",
        gender: "F",
        age: 2,
        colour: "black and white",
        desc: "lorem ipsum Milly",
        image: "https://cdn2.thecatapi.com/images/7cn.jpg"
    },
       {
        id: 2,
        name: "Cannella",
        gender: "F",
        age: 2,
        colour: "grigio",
        desc: "lorem ipsum Cannella",
        image: "https://cdn2.thecatapi.com/images/7an.jpg"
    },
];

type Cat = {
    id: number,
    name: string,
    gender: "M" | "F";
    age: number,
    colour: string,
    desc: string,
    image: string
}[];


export function Card() {
    
    const [showDetails, setShowDetails] = useState(-1);
    const [heartReaction, setHeartReaction] = useState(false);

    const catsList = cats.map(cat =>
        <li key={cat.id}>     
            <div className="card bg-mint-100 w-96 shadow-sm" >
                <button onClick={() => {
                    setHeartReaction(false)
                cats.map(gatito => {
                    if(cat.id === gatito.id) {
                        setShowDetails(gatito.id);
                    } 
                })}}>Show details</button>
                <figure>
                    <img
                        src={cat.image}
                        alt={cat.name} />
                </figure>
                {showDetails === cat.id && <div className="card-body">
                    <h2 className="card-title">{cat.name}</h2>
                    <p>{cat.desc}</p>
                    {
                    <Heart fill={heartReaction ? "red" : "none"} onClick={() => 
                        setHeartReaction(!heartReaction)
                    }/>
                    }
                </div>}
            </div>
        </li>
)
    return catsList
}
