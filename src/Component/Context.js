import {useState,createContext,useContext} from "react";
const UserContext = createContext();
function Componenet1(){
    const[color] = useState("Red");
    return(
        <UserContext.Provider value={color}>
         <Component2 color={color}/>
        </UserContext.Provider>
    );
}
function Component2(){
    const color = useContext(UserContext);
    return(
      <h3>Label in {color} color!! </h3>
    );
}
export default Componenet1;