import React from 'react'
import { Book } from '../types/types'

const ListItem: React.FC<Book> = ({ volumeInfo, selfLink }) => {
    return (
        <div className='list-item'>
            <h5>{volumeInfo.categories ? volumeInfo.categories[0] : '...'}</h5>
            <div className='img-container'>
                <img src={volumeInfo.imageLinks?.thumbnail} alt=''></img>
            </div>
            <h4 style={{padding:'10px 10px'}}>{volumeInfo.title}</h4>
            <div className='info-container'>
                {/* <h4>{volumeInfo.title}</h4> */}
                    <h5>{volumeInfo.authors?.join(', ')}</h5>
                    <h6>{volumeInfo.subtitle}</h6>
                    <h6>{volumeInfo.publishedDate}</h6>
                {/* <h6><a href={selfLink} target='_blank' rel='noreferrer'>Link</a></h6> */}
            </div>

        </div>
    )
}

export default ListItem