import { useState } from "react";



const Content = () => {
    const [menu, setMenu] = useState([
        {
          id: "1",
          image: (
            <img
              src={require("./abc.jpg")}
              alt="nolodead"
              style={{ height: "250px", width: " 250px" }}
            />
          ),
          data: "A",
        },
        {
          id: "2",
          image: (
            <img
              src={require('./abc1.jpg')}
              alt="nolodead"
              style={{ height: "250px", width: " 250px" }}
            />
          ),
          data: "B",
        },
       
      ]);

      const handledelete = (ID) =>{
         setMenu(
      menu.filter((menu) => menu.id!==ID)
     )

      }

  return (
    


    <div id="midt">

        {menu.map((m) => (
          <div className="card" id="cards">
            <div className="card-body">
              <p> {m.image} {m.data}</p>
              

               <button className="btn btn-primary" onClick={()=>handledelete(m.id)}>
                button
              </button>  
            </div>
          </div>
        ))}

        </div>
  );
};

export default Content;
