export function Searchbar({filterCards, onFilterCardsChange}){
    return <>
    <input 
        type="text" 
        placeholder="Find a cat" 
        className="input" 
        value={ filterCards }
        onChange={(e => onFilterCardsChange(e.target.value))}
        />
    </>
}

