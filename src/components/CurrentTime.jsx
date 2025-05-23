import { useEffect, useState } from "react";

let CurrentTime = () => {

  const [Time , setTime] = useState(new Date());
  

useEffect ( () =>{

  const interval  = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return() =>{   clearInterval(interval);

  };
}, 
[]);
  

return(
<div className="time">

  <p> {Time.toLocaleDateString()} - {Time.toLocaleTimeString()  }   </p>
</div>
)
};

export default CurrentTime ;