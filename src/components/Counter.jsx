// component is like a function it contain 3 attributes 1. function 2. retrn value 3. jsx formet supported

import { useState } from "react";
const Counter = () =>{ 
    const [count,sydur]= useState(0)             // anonymas arrow function
    

    function increase(x) {
       sydur(count + x)
        
    }
    function decrease(x) {
        sydur(count - x)
        
    }
    return(

        
        <div>
           <p>
           counte by {count}
           </p>
           <div>
               <button onClick={() =>increase(1)}> add by 1</button>
               <button onClick={() =>increase(2)}> add by 2</button>
               <button onClick={() =>increase(3)}> add by 3</button>
               <button onClick={() =>increase(5)}> add by 5</button>
               <button onClick={() => decrease(1)} >substract by -1</button>
               <button onClick={() => decrease(2)} >substract by -2</button>
               <button onClick={() => decrease(3)} >substract by -3</button>
               <button onClick={() => decrease(5)} >substract by -5</button>
               
           </div>
        </div>
    )
    
}
export default Counter
