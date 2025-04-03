
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/Bookmarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([])

  const clickToAddBookMarks= blog =>{
    console.log('bookmark clicked');
    
  }

  return (
    <>
      <Header></Header>

     <div className='md:flex max-w-7xl mx-auto'>
      
        <Blogs clickToAddBookMarks={clickToAddBookMarks}></Blogs>
        <BookMarks></BookMarks>

      </div>    
     
    </>
  )
}

export default App
