import React from 'react';
import img1 from "../../assets/images/1.png"
import img2 from "../../assets/images/2.png"
import img3 from "../../assets/images/3.png"
import img4 from "../../assets/images/4.png"
import { Typography} from "@material-ui/core";


function Admin() {
  return (
    <main style={{marginTop:"100px"}} className="container-fluid  p-3">
       <div className="custom-shadow p-3" > <Typography variant="h4">Here is What we do </Typography></div>
        <div className="row"> 
            <div className="col-md-4 m-3 custom-shadow">
                <img alt="chert" src={img1} className="demoUi" />
            </div>
            <div className="col-md-4 m-3 custom-shadow">
                <img alt="chert" src={img2} className="demoUi" />
            </div>
            <div className="col-md-4 m-3 custom-shadow">
                <img alt="chert" src={img3} className="demoUi" />
            </div>
            <div className="col-md-4 m-3 custom-shadow">
                <img alt="chert" src={img4} className="demoUi" />
            </div>
            
        </div>

    </main>
  );
}

export default Admin;
