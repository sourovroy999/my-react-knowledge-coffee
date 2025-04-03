import PropTypes from 'prop-types'; // ES6


const Blog = ({blogInside}) => {
    console.log(blogInside);
    
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;