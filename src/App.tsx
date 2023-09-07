import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchBooks, loadingMoreBooks } from './redux/action-creator';
import { Book } from './types/types';
import Alert from './components/Alert';
import Header from './components/Header';
import ListContainer from './components/ListContainer';
import ListItem from './components/ListItem';
import InfoPanel from './components/InfoPanel';

const App = () => {
  const [input, setInput] = useState<string>('')
  const [list, setList] = useState<Book[] | []>([])
  const [results, setResults] = useState<number>(0)
  const dispatch = useAppDispatch()
  const { books, loading, error, totalItems } = useAppSelector(state => state.booksReducer)


  useEffect(() => {
    setList(books)
    setResults(books.length)
    // console.log(books)
  }, [books])

  const loadMore = () => {
    setResults(prev => prev + 30)
    // console.log(results)
    dispatch(loadingMoreBooks({ input, results }))
  }

  return (
    <div className="App">
      <Header>
        <h1>Books Searcher</h1>
        <div>
          <input type='text' value={input} onChange={(e) => setInput(e.target.value)}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                dispatch(fetchBooks({ input }))
              }
            }}></input>
          <button onClick={() => dispatch(fetchBooks({ input }))}>Search</button>
        </div>
      </Header>
      <InfoPanel error={error} loading={loading} list={list} totalItems={totalItems} results={results} />
      <ListContainer>
        {list ? list?.map((book) => <ListItem key={book.id} {...book} />) : <Alert />}
      </ListContainer>
      {totalItems - results <= 1 || <div className='footer'>
        {list?.length ? <button onClick={loadMore}>Load more</button> : null}
      </div>}

    </div >
  );
}

export default App;
