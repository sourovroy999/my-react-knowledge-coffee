import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const BookMarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-2xl">
            <div>
                <h3 className="text-4xl">Reading time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(pbookmark =><Bookmark key={pbookmark.id} bookmark={pbookmark}></Bookmark>)
            }
        </div>
    );
};

BookMarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks;