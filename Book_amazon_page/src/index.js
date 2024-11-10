import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  <EventExamples />
  return <>
    <h1>Amazon Best Sellers</h1>
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book book {...book} key={book.id} number={index} />
      })}
    </section>
  </>
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('handle form input');

  }
  const handleButtonClick = () => {
    alert('handle button click');

  }
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');

  }
  return <section>
    <form onSubmit={handleFormSubmission}>
      <h2>Typical form</h2>
      <input type="text" name="example"
        onChange={(e) => console.log(e.target.value)}
        style={{ margin: '1rem 0' }}></input>
      <button type='submit'>Submit</button>
      <div>
        <button onClick={() => console.log("click me")} type="button">Click me</button></div>
    </form>
  </section>
}

const Image = () => <img src="./images/book-1.jpg" alt="The Message" />
const Title = () => <h2>The Message</h2>
const Author = () => {

  return <h4>Ta-Nehisi Coates</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);