import Content from "./Content";
import Content1 from "./Content1";
import RightSideBar from "./RightSideBar"
import LeftSideBar from "./LeftSideBar";


function Grid1() {
    return (

        <div className="row" style={{marginLeft:"30px"}}>
            <div className="col-md-3" style={{backgroundColor:"lightgrey",marginTop: "50px"}}>
                
                   <LeftSideBar c ='England Lions' c1='England'/>
                   <LeftSideBar c ='India' c1='New Zealand' />

                  
                
            </div>
            <div className=" col-md-3" style={{}}>
                 <Content />
                
                

            </div>
              <div className=" col-md-2" style={{}}>
                 <Content1 />
                
                

            </div>


            <div className="col-md-3" style={{borderRadius:"5px",border:"1px solid grey",marginLeft:"60px",marginTop:"50px"}}>
                
                <RightSideBar/>
                <RightSideBar/>
                <RightSideBar/>
                <RightSideBar/>
            </div>



        </div>


    );
}

export default Grid1;