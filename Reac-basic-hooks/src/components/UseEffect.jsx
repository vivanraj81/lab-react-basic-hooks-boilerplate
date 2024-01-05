import { useState ,useEffect } from "react";

function UseEffect(){

    const [showMessage, setShowMessage] = useState(false);
    useEffect(()=>{
      alert(`Content Button Clicked`)
    },[showMessage])
  
    return(
      <div>
        {showMessage && <p>The sun rose over the horizon, casting a warm glow over the fields. The birds chirped as they flitted from tree to tree, searching for breakfast. In the distance, a farmer could be seen tending to his crops, his weathered face creased in concentration. A cool breeze blew, carrying the scent of freshly cut grass and wildflowers. It was a peaceful scene, one that made you feel grateful to be alive. As you took it all in, you couldn't help but feel a sense of wonder at the beauty of nature and the world around you. It was a reminder that there was still so much to explore and discover in this vast and wondrous universe.</p>}
        <button onClick={() => setShowMessage(!showMessage)}>Content</button>
      </div>
    )
  }
  
  
  export default UseEffect;