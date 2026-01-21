export function Card({cat, isActive, onButtonClick}) {
    return <>
        <div className="card bg-mint-100 w-96 shadow-sm" >
            <button onClick={onButtonClick}>Show details</button>
                  <figure>
                        <img
                            src={cat.image}
                            alt={cat.name} />
                    </figure>  
                     {isActive === cat.id && <div className="card-body">
                        <h2 className="card-title">{cat.name}</h2>
                        <p>{cat.desc}</p>
                        {
                        // <Heart fill={heartReaction ? "red" : "none"} onClick={() => 
                        //     setHeartReaction(!heartReaction)
                        // }/>
                        } 
                    </div>}
                
        </div>
    </>
}
