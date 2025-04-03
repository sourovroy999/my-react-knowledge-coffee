
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/Bookmarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]= useState([])
  const[readingTime, setReadingTime]=useState(0)

  const clickToAddBookMarks= blog =>{
             const newBookMarks=[...bookmarks, blog];
             setBookmarks(newBookMarks)
  }

  const handleMarkARead= time =>{
  
    setReadingTime(readingTime+time)
  }

  return (
    <>
      <Header></Header>

     <div className='md:flex max-w-7xl mx-auto'>
      
        <Blogs clickToAddBookMarks={clickToAddBookMarks} handleMarkARead={handleMarkARead}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>

      </div>    
     
    </>
  )
}

export default App
