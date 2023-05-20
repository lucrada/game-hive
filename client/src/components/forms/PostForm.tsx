import { Link } from "react-router-dom";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../../sass/components/post_form.scss';

export function PostForm(): JSX.Element {
    return (
        <div className='post-form'>
            <textarea className='post-form__text' placeholder='Blah blah!'></textarea>
            <div className='post-form__options'>
                <Link className='post-form__options--option post-form__options--option--image' to='#'> <ImageIcon className='post-form__options--option-icon' /> Image</Link>
                <Link className='post-form__options--option post-form__options--option--video' to='#'> <VideocamIcon className='post-form__options--option-icon' /> Video</Link>
                <Link className='post-form__options--option post-form__options--option--review' to='#'> <RateReviewIcon className='post-form__options--option-icon' /> Review</Link>
                <Link className='post-form__options--option post-form__options--option--article' to='#'> <ArticleIcon className='post-form__options--option-icon' /> Article</Link>
                <Link className='post-form__options--option post-form__options--option--add' to='#'> <AddBoxIcon className='post-form__options--option-icon' /> Post</Link>
            </div>
        </div>
    );
}