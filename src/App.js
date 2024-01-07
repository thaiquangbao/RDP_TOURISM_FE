//import { useState } from 'react'
import './App.css'
import Navbar from './Compernents/Navbar/Navbar';
import Header from './Compernents/Header/Header'
import Main from './Compernents/Main/Main'
import Footer from './Compernents/Footer/Footer'
function App() {
  // const [info, setInfo] =  useState({
  //     fullName: "" ,
  //     age : 32
  // })
  // const [gift, setGift] = useState()
  // const gifs = [
  //   'Bánh mì', 
  //   'Sữa',
  //   'Kẹo'
  // ]
  // const fullName = ["Thái Quang Bảo", "Đức", "Tuấn Anh"]
  // const handleUpdate = () => {
  //   const index = Math.floor(Math.random()*gifs.length)
  //   const indexN = Math.floor(Math.random()*fullName.length)
  //   info.fullName = fullName[indexN];
  //   if(info.fullName !== "Thái Quang Bảo") {
  //     setInfo(pre => ({
  //       fullName: info.fullName,
  //       error : "Bạn không thuộc trong danh sách"
  //     }))
  //     setGift("")
  //   }
  //   else if (info.fullName === "Thái Quang Bảo") {
  //     setInfo(pre => (
  //     {
  //       fullName: info.fullName,
  //       describe: "Hello World"
  //     }))
  //     setGift(gifs[index])
  //   }
   
  // }
  return (
      // <div className='App' style={{ padding: 20 }}>
      //   <h1>{JSON.stringify(info)}</h1>
      //   <h1>{gift || "Chưa được quà"}</h1>
      //   <button onClick={handleUpdate}>Update</button>
        
      // </div>
      <>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </>
  );
  
}

export default App;
