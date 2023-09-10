import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { clearBook } from '../redux/bookSlice'
import AltImage from '../other/alt-img.png'

const BookDetail: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { authors, publishedDate, title, categories,
        loading, imageLinks, subtitle, description, language } = useAppSelector(state => state.book)

    const handleBackClick = () => {
        dispatch(clearBook)
        navigate('/books')
    }

    return (
        <div className='detail-page'>
            <h3>Book Detail Page:</h3>
            {loading && <h3>Wait, we're loading your data ...</h3>}
            {!loading && <div className='detail-item'>
                <div className='detail-img-container'>
                    {imageLinks ? <img src={imageLinks?.small ?? imageLinks?.thumbnail} alt='' /> : <img src={AltImage} alt='' className='alt-img' />}
                </div>
                <div className='detail-info-container'>
                    <div className='detail-info'>
                        <h1>{title}</h1>
                        <h3>Categories: {categories ? categories[0] : '...'}</h3>
                        <h4>Authors: {authors?.join(', ')}</h4>
                        <h4>{subtitle}</h4>
                        <h4>Published: {publishedDate}</h4>
                        <h4>Published language: {language}</h4>
                        <h4 style={{ maxWidth: "800px" }}>{description?.replace(/<\/?[^>]+(>|$)/gi, "").replace(/&nbsp;/gi, ' ')}</h4>
                    </div>
                    <button onClick={handleBackClick}>Back</button>
                </div>
            </div>}
        </div>
    )
}

export default BookDetail