// import React from "react";
import { memo } from "react";
    const AA=({randomNumber,count1,name})=>{
        
    console.log(name)
    randomNumber();
    return(
        <div>
            <h3>From AA Component</h3>
            <h1>Count 1 :{count1}</h1>
            <h2>Names : {name}</h2>
        </div>
    )
}
// export default React.memo(AA);
export default memo(AA);