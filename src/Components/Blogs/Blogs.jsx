import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({clickToAddBookMarks}) => {

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
                 >

                 </Blog>)
            }
        </div>
    );
};

export default Blogs;