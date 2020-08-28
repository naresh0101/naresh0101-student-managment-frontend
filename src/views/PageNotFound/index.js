import React from 'react'
import image_404 from "../../assets/images/404.png"

function PageNotFound() {
    return (
      <div style={{ width: "100%", marginTop:"100px"}}>
        <center>
          <img style={{ height:'400px',width:"70%" }} alt="404" src={image_404} />
        </center>
      </div>
    );
}

export default PageNotFound;