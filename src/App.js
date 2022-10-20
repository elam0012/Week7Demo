import './App.css';
// import Button from '@mui/material/Button';
import {useState, useEffect} from "react"
import Container from '@mui/material/Container';
import Header from "./Header"
import Card from "./Card"
import {Routes, Route} from "react-router-dom"
import Women from "./Women"


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      {/* <Button variant="contained">Hello World</Button> */}
      <Container>
        <Header/>
        <Routes>
          <Route path="/" element={<Card data={data}/>}></Route>
          <Route path="/women" element={<Women data={data}/>}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
