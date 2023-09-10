import React from 'react'
import { Book } from '../types/types'
import { useAppDispatch } from '../redux/hooks';
import { changeFilter } from '../redux/filterSlice';
import { changeSort } from '../redux/sortSlice';

type Props = {
    loading: boolean, error: string | null, list?: Book[] | [], totalItems: number, results: number, filterValue?: string
}

const InfoPanel: React.FC<Props> = ({ loading, error, totalItems, results }) => {

    const dispatch = useAppDispatch()

    const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeFilter(e.target.value))
    }

    const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeSort(e.target.value))
    }

    return (
        <div className='info-panel'>
            {loading && <h3>Wait, we're loading your data ...</h3>}
            {error && <h3>There is an error with something,  we'll fix it soon </h3>}
            {totalItems <= 0 ? <h3>Total items: 0</h3> : <h3>Total items: {totalItems - 1}</h3>}
            {!results ? <h3>Total results on page: 0</h3> : <h3>Total results on page: {results}</h3>}
            {<div className='select-panel'>
                {/* <h3>Filtered by: </h3> */}
                <select name="filter" id="filter-select" onChange={handleChangeFilter}>
                    <option value="All">All</option>
                    <option value="Art">Art</option>
                    <option value="Science">Science</option>
                    <option value="Education">Education</option>
                    <option value="Biography">Biography</option>
                    <option value="Computers">Computers</option>
                    <option value="Medical">Medicals</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Comics & Graphic Novels">Comics & Graphic Novels</option>
                </select>
                {/* <h3>Sorted by: </h3> */}
                <select name="sort" id="sort-select" onChange={handleChangeSort}>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                </select>
            </div>}
        </div>
    )
}

export default InfoPanel