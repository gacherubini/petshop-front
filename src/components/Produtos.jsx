import React from 'react'
import { useState, useEffect } from 'react';

const Produtos = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [produtos, setProdutos] = useState([]); // State to store the fetched data

  useEffect(() => {
    fetch('http://localhost:3000/produtos') // Use the correct endpoint to fetch SoundCloud data
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <img className="imageLoading" src={"public/loading.gif"}/>;
  if (error) return <p className="errorMensagem">{Constants.GENERIC_ERROR_MESSAGE}</p>;

  return (
    <div>
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h3>{produto.name}</h3>
          <p>{produto.description}</p>
          <p>Price: ${produto.price}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Produtos