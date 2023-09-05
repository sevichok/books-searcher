import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchBooks } from './redux/action-creator';
import { Book } from './redux/slice';

const App = () => {
  const [input, setInput] = useState<string>('')
  const [list, setList] = useState<Book[] | []>([])
  const dispatch = useAppDispatch()
  const { books, loading, error } = useAppSelector(state => state.booksReducer)


  useEffect(() => {
    setList(books)
    console.log(books)
  }, [books])

  return (
    <div className="App">
      <h3>Books Searcher</h3>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => dispatch(fetchBooks(input))}>search</button>
      {loading && <h6>loading...</h6>}
      {error && <h6>error</h6>}
      {list.map(book => <div key={book.id}>
        <h4>{book.volumeInfo.title}</h4>
        <h6>{book.volumeInfo.subtitle}</h6>
        <h6>{book.volumeInfo.authors}</h6>
        <h6>{book.volumeInfo.publishedDate}</h6>
        <h6>{book.volumeInfo.description}</h6>
      </div>)}
    </div>
  );
}

export default App;
