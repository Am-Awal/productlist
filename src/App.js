//import {Retrieve} from './Retrieveproducts';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header>
      Products on sale!
      </header>
      <Retrieve/>
    </div>
  );
}

export default App;*/

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  // Store the users in a state variable.
  // We are passing an empty array as the default value.
  let [products, setProducts] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get("http://localhost:3030/products")
      .then(response => setProducts(response.data));
  }, []);

  const resultList = (products || []).map((product)=>
  <tr key ={product.id}>
      <td>{product.title}</td>
      <td>{product.type}</td>
      <td>{product.rating}</td>
  </tr>);

  return (
    <div className="App">
      <h1 className="h1"> Product Results </h1>
            <div className="products">
                <table>
                    <thead>
                        <tr>
                            <th className="title-col">Title</th>
                            <th className="type-col">Type</th>
                            <th className="rating-col">Rating</th>
                        </tr>
                    </thead>
                    <tbody>{resultList}</tbody>
                </table>
            </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

