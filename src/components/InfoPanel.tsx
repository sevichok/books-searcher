import React from 'react'
import { Book } from '../types/types'

type Props = {
    loading: boolean, error: string | null, list: Book[] | [], totalItems: number, results: number
}

const InfoPanel: React.FC<Props> = ({ loading, error, list, totalItems, results }) => {
    return (
        <div className='info-panel'>
            {loading && <h3>Wait, we're loading your data ...</h3>}
            {error && <h3>There is an error with something,  we'll fix it soon </h3>}
            {list?.length ? <h3>Total items: {totalItems - 1}</h3> : null}
            <h3>Total results on page: {results}</h3>
            {list?.length ? <div className='select-panel'>
                <select name="filter" id="filter-select">
                    <option value="all">All</option>
                    <option value="art">Art</option>
                    <option value="science">Science</option>
                    <option value="education">Education</option>
                    <option value="biography">Biography</option>
                    <option value="computers">Computers</option>
                    <option value="medical">Medicals</option>
                    <option value="philosophy">Philosophy</option>
                    <option value="comics">Comics & Graphic Novels</option>
                </select>
                <select name="sort" id="sort-select">
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div> : null}
        </div>
    )
}

export default InfoPanel