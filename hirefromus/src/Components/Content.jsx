import React, { useRef } from 'react';
import './Content.css'
function Content(props) {

    return (
        <div className="content" >
      <div className="Untapped "  >
        <div className="col-12 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-4" style={{zIndex:"1"}}>
         <div className="offset-1 col-10 pl-0 offset-lg-0 col-lg-7 untapped-div" style={{zIndex:"1"}}>
         <p className="d-none d-lg-block">Untapped and <br/><span >Custom-Trained Talent<br/></span>from Tier 2/3 Cities Tailored <br/><span>just for you..</span></p>
         <p className="d-block d-lg-none">Untapped and <br/><span >Custom-Trained Talent<br/></span>from Tier 2/3 Cities <br/> Tailored <span>just for you..</span></p>
         </div>

         <div className="offset-1 col-10 offset-lg-0 col-lg-5 untapped-gif" >
        
         </div>
       



          </div>
        

        
      </div>
       {/* <div className='col-12 row' style={{backgroundColor:"pink",zIndex:"-1"}}>
            <div className="col-4" style={{backgroundColor:"yellow",zIndex:"1"}}>ed</div>
            <div className="col-4 " style={{backgroundColor:"red",position:"relative" ,right:"100px",zIndex:"-1"}}>hasddsdsdsdrsh</div>
            <div className="col-4" style={{backgroundColor:"blue"}}>fe</div>
            
        </div> */}
      </div>

      <div className="reason">
      <div className="col-12 row pl-lg-5 " >
         <div className="col-lg-11 row  offset-lg-1 pl-lg-4"  >
         <div className="offset-1 col-11 offset-lg-0 pl-0 col-lg-12 reason-div"  >
         <p className="d-none d-lg-block"><span>6 reasons</span> why you should hire Futurense Fellows over any tech professionals! </p>
         <p className="d-block d-lg-none"><span>6 reasons<br/></span> why you should hire Futurense Fellows <br/> over any tech professionals! </p>
         </div>

            </div>
            </div>
      </div>









    






     
      </div>
      
     
      















    );
}

export default Content;