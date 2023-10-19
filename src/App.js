import { useEffect, useState } from 'react';
import './App.css';
import AddSubject from './components/AddSubject';
import AddUser from './components/AddUser';
import AllSubjects from './components/AllSubjects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import About from './components/About';

function App() {
  const [data,setdata]=useState()
  const [nav,setnav]=useState("/")
  useEffect(()=>{
    const func =async()=>{
      let a = localStorage.getItem("attendenceData")
      a = await JSON.parse(a)
      setdata(a)
    }
    func()
  },[])
  return (
    <>
      <Navbar data={data} setnav={setnav} />
        {nav==="/"?(data?<AllSubjects Data={data} changeData={setdata} setnav={setnav}/>:<AddUser changeData={setdata} />):""}
        {nav==="add"?<AddSubject changeData={setdata} setnav={setnav}/>:"" }   
        {nav==="about"?<About/>:""}    
      <Footer/>
    </>
  );
}

export default App;
