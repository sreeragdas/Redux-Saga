import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./catState";
function App() {
  //useSelector: extract the state of a component from the redux store using the selector function.
  //calling cat array from reducer (state=>state.cats.cats) here first cats means which we have return in the index.js  (reducer: { cats: catReducer }) and the second cat refers to the cats array which we defined in catState initialState,
  const cats = useSelector((state) => state.cats.cats);
//usedispact :update the state of the component and return a new state
const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])

  console.log(cats)
  return <div className="App">hi</div>;
}

export default App;
