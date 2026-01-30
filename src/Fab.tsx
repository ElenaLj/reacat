import { Cat, Plus } from "lucide-react";

export function Fab(){
    return <>
        <div className="fab">
            {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
            <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-success"><Plus /></div>
        
            <div>Add a gatito
                <button className="btn btn-lg btn-circle"
                        onClick={() => handleAddGatito()}>
                    <Cat />
                </button>
            </div>
        </div>
    </>
}

function handleAddGatito(){}