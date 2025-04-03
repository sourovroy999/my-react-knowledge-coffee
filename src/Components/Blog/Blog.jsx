import PropTypes from 'prop-types'; // ES6

import { FaBookmark } from 'react-icons/fa';



const Blog = ({blogInside, clickToAddBookMarks}) => {
    const{title,cover,author, author_img,posted_date, reading_time, hashtags}= blogInside;
    return (
        <div className='mb-20'>
            <img className='mb-8' src={cover} alt={`cover picture of the title ${title}`} />

            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-14 h-14 object-cover rounded-full ' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center mb-8'>
                    <span>{reading_time} min read</span>
                    <button onClick={clickToAddBookMarks} className='ml-4 text-2xl text-green-600  '><FaBookmark/></button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=''> {hash}</a></span>)
                }
            </p>


        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;