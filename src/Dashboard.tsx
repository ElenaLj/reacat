import { useState } from "react";
import { Container } from "./Container";
import { Searchbar } from "./Searchbar";

export function Dashboard(){
      const [filterCards, setfilterCards] = useState('');
return (
   <>
      <div className="p-8 flex justify-center">
      <Searchbar filterCards={filterCards} onFilterCardsChange={setfilterCards}/>
      </div>   
      <div className="columns-3 p-8 flex flex-wrap justify-evenly gap-y-8 bg-mint-600">
      <Container filterCards={filterCards} />
      {/* <Fab></Fab> */}
      </div>
   </>
  )}
