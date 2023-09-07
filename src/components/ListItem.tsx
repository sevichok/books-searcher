import React from 'react'
import { Book } from '../types/types'

const ListItem: React.FC<Book> = ({ volumeInfo, selfLink }) => {
    return (
        <div className='list-item'>
            <h5>{volumeInfo.categories ? volumeInfo.categories[0] : null}</h5>
            <img src={volumeInfo.imageLinks?.thumbnail} alt=''></img>
            <h4>{volumeInfo.title}</h4>
            <div>
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