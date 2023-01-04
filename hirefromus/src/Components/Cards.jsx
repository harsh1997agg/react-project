import React, { useRef} from "react";
import "./Cards.css";

function Cards() {
  //  const [count, setCount] = useState(0);
//  const [reducervalue,forceUpdate]=useReducer(x=>x+1,0);
//  useEffect(()=>{
//     changeCardTo1()
//  },[reducervalue])

  const card1ref = useRef(null);
  const card2ref = useRef(null);
  const card3ref = useRef(null);
  const card4ref = useRef(null);
  const card5ref = useRef(null);
  const card6ref = useRef(null);

  const changeCardTo2 = () => {
    card1ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card1ref.current.style.transition = "1s";
    card2ref.current.style.opacity = "0.9";
  };

  const changeCardTo3 = () => {
    card2ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card2ref.current.style.transition = "1s";
    card3ref.current.style.opacity = "0.9";
  };
  const changeCardTo4 = () => {
    card3ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card3ref.current.style.transition = "1s";
    card4ref.current.style.opacity = "0.9";
  };
  const changeCardTo5 = () => {
    card4ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card4ref.current.style.transition = "1s";
    card5ref.current.style.opacity = "0.9";
  };
  const changeCardTo6 = () => {
    card5ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card5ref.current.style.transition = "1s";
    card6ref.current.style.opacity = "0.9";
  };

  const changeCardTo1 = () => {
    card6ref.current.style.transform = "translate3d(-1200px,50px,50px)";
    card6ref.current.style.transition = "1s";
    // console.log("count"+count);
    // console.log("sads")
    // console.log("count" + count);
    //setCount(c=>c+1);
    setTimeout(()=>{ window.location.reload(false);}, 300);
    
  
  };

  return (
    <div
      className="access-parent row"
      style={{ position: "relative", height: "274px" }}
    >
      <div
        className="access row"
        ref={card1ref}
        style={{ position: "absolute", zIndex: 6 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor: "black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>01</p>
                </div>

                <div className="access-div-content">
                  <p> Access to untapped talent from Tier2/3 cities </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    As we invest in Talent from tier 2/3 towns for them to reach
                    their full potential, you get access to an untapped talent
                    pool!
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo2}>
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>

      <div
        className="access row"
        ref={card2ref}
        style={{ position: "absolute", zIndex: 5, opacity: 0 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor:"black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>02</p>
                </div>

                <div className="access-div-content">
                  <p> Job Ready Talent from Day 1 </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    Talent that is ready to hit the ground running from Day 1{" "}
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo3}>
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>

      <div
        className="access row"
        ref={card3ref}
        style={{ position: "absolute", zIndex: 4, opacity: 0 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor: "black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>03</p>
                </div>

                <div className="access-div-content">
                  <p> Zero Notice Period </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    Talent that can join immediately with all BGV/Compliance
                    formalities taken care of.{" "}
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo4}>
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>

      <div
        className="access row"
        ref={card4ref}
        style={{ position: "absolute", zIndex: 3, opacity: 0 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor: "black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>04</p>
                </div>

                <div className="access-div-content">
                  <p> Modular Training </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    Tailor-made Talent, specific to your business needs based on
                    domain and tools.{" "}
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo5}>
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>

      <div
        className="access row"
        ref={card5ref}
        style={{ position: "absolute", zIndex: 2, opacity: 0 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor: "black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>05</p>
                </div>

                <div className="access-div-content">
                  <p> Special Focus on Soft/Behavioral Skills </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    Talent enabled with behavioral & soft skills to match your
                    pedigree.{" "}
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo6}>
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>
      <div
        className="access row"
        ref={card6ref}
        style={{ position: "absolute", zIndex: 1, opacity: 0 }}
      >
        <div className="col-11 offset-1 row pl-lg-5 ">
          <div className="col-lg-11 row  offset-lg-1 pl-lg-0">
            <div
              className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-12 access-div"
              style={{ backgroundColor: "black" }}
            >
              {/* <div className="row offset-1 col-11 offset-lg-0 pl-0 col-lg-11 access-div"   > */}
              <div className="access-div" style={{ width: "1000px" }}>
                <div className="access-div-heading">
                  <p>06</p>
                </div>

                <div className="access-div-content">
                  <p> Extremely Low Attrition Rate </p>
                </div>
                <div className="access-div-content2">
                  <p>
                    {" "}
                    Talent Retention with less than 6% attrition rate and 7-day
                    replacement commitment.{" "}
                  </p>
                </div>

                <button className="access-div-button1">
                  <p>Looks Interesting, Right?</p>
                </button>

                <button className="access-div-button2" onClick={changeCardTo1}>
                  {/* {count} */}
                  <p>Give me another reason!</p>
                </button>
                <div className="access-circle ">
                  <div className="access-circle-image"></div>
                </div>
              </div>
            </div>

            {/* <div className="access-circle ">
            <div className="access-circle-image"></div>
         </div>
        </div> */}
          </div>
        </div>
      </div>








































    </div>
  );
}

export default Cards;
