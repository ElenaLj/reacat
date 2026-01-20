import { useState } from 'react';

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
    const [buttonClicked, setButtonClicked] = useState(false)
    const catsList = cats.map(cat =>
        
        <li key={cat.id}>

        <button onClick={() => {
            cats.map(gatito => {
                if(cat.id === gatito.id) {
                  
                    setShowDetails(gatito.id);
                    setButtonClicked(!buttonClicked);
                } 
            })
            }
            }>Show details</button>
            <div className="card bg-base-100 w-96 shadow-sm" >
                {showDetails === cat.id && <div className="card-body">
                    <h2 className="card-title">{cat.name}</h2>
                    <p>{cat.desc}</p>
                </div>}
                <figure>
                    <img
                        src={cat.image}
                        alt={cat.name} />
                </figure>
            </div>



        </li>



)

    return catsList
}
