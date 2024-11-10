import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
    /*  JSX (like <h2>My First Component</h2 >) is not natively understood by browsers.
        Under the hood, React converts this JSX into JavaScript using a method called React.createElement().

      *****  React.createElement('h2', null, 'My First Component');  *****

    Explanation of the React.createElement() Call:
    'h2': The type of element being created.In this case, it's an <h2> HTML tag.
    null: Since no additional attributes(like className, id, etc.) are specified for the < h2 >, the second argument is null.
    'My First Component': The content inside the < h2 > tag is the text 'My First Component', which becomes the third argument(the child of the h2 element).
*/
    return <div> <Header /><Message /> <Lists /> </div>;
}

let Header = () => <h2>Hello to React</h2>
let Message = () => <p>Add to Cart :</p>
let Lists = () => { return <ul><li>mango</li><li>apple</li></ul> }

// function Greeting() {
//     return React.createElement('div', {}, React.createElement('h2', {}, 'helloooo....'));
// }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< Greeting />);