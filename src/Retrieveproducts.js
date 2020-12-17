import React, { Component, useState } from "react";
import axios from "axios";

export async function getProducts(){
    const res = await axios.get("http://localhost:3030/products");
    const response = await res.data;
    //console.log(JSON.stringify(data));
   return response;
}

export function Retrieve(){

    const [results, setResults] = React.useState(0);
    const handleRetrieve = (event) => {
        getProducts().then(response =>{
            setResults(response)
            console.log(JSON.stringify(results))
        });
    };

    const resultList = (results || []).map((product)=>
    <tr key ={product.id}>
        <td>{product.title}</td>
        <td>{product.type}</td>
        <td>{product.rating}</td>
    </tr>
    );

    return(
        <div>
            <div className ="retrieve button">
                <input onClick={handleRetrieve} type="button" value="Retrieve"/>            
            </div>

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

    )
}