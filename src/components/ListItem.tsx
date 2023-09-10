import React from 'react'
import { Book } from '../types/types'
import AltImage from '../other/alt-img.png'
import { useNavigate } from 'react-router-dom'
import { bookDataFetch } from '../redux/action-creator';
import { useAppDispatch } from '../redux/hooks';

const ListItem: React.FC<Book> = ({ volumeInfo, id }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleClick = () => {
        dispatch(bookDataFetch(id))
        navigate(`/${id}`)
    }
    return (
        <div className='list-item'>
            <h5>{volumeInfo.categories ? volumeInfo.categories[0] : '...'}</h5>
            <div className='img-container' onClick={handleClick}>
                {volumeInfo.imageLinks?.thumbnail?<img src={volumeInfo.imageLinks?.thumbnail} alt=''></img>:
                <img src={AltImage} alt='' className='alt-img'></img>}
            </div>
            <h4 style={{ padding: '10px 10px' }}>{volumeInfo.title}</h4>
            <div className='info-container'>
                <h5>{volumeInfo.authors?.join(', ')}</h5>
                <h6>{volumeInfo.subtitle}</h6>
                <h6>{id}</h6>
                <h6>{volumeInfo.publishedDate}</h6>
            </div>
        </div>
    )
}

export default ListItem