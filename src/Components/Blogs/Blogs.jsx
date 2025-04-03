import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";



const Blogs = ({clickToAddBookMarks, handleMarkARead}) => {

    const [blogs, setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data)
        )
    } ,[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">blogs: {blogs.length}</h1>
            {
                blogs.map(pblog=>
                    
                <Blog key={pblog.id}
                 blogInside={pblog}
                 clickToAddBookMarks={clickToAddBookMarks}
                 handleMarkARead={handleMarkARead}
                 >

                 </Blog>)
            }
        </div>
    );
};

Blogs.propTypes= {
    clickToAddBookMarks: PropTypes.func,
    handleMarkARead: PropTypes.func
}

export default Blogs;