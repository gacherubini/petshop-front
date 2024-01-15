import React, { useState, useEffect } from 'react';

const DashboardAdmin = () => {
  const [produtos, setProdutos] = useState([]); // State to store the fetched data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const ListarProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos');

      if (response.ok) {
        const data = await response.json();
        setProdutos(data);
      } else {
        console.error('Erro ao obter a lista de produtos:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao listar os produtos:', error);
    }
  };

  const RegistrarProduto = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Produto registrado com sucesso!');
        setFormData({
          name: '',
          description: '',
          price: '',
          image: ''
        });

        // Listar produtos novamente após o registro
        ListarProdutos();
      }
    } catch (error) {
      console.error('Erro ao registrar o produto:', error);
    }
  };

  const DeletarProduto = async (produto) => {
    try {
      const response = await fetch(`http://localhost:3000/produtos/${produto._id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Produto excluído com sucesso!');
        ListarProdutos();
      } 
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  };


  return (
    <div>
      <h1>Adicionar Produtos</h1>
      <form onSubmit={RegistrarProduto}>
        <label>Nome do produto</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Nome do produto...'
        />
        <label>Descrição do produto</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder='Descrição do produto...'
        />
        <label>Valor do produto</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder='Valor do produto...'
        />
        <label>Imagem do produto</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder='Imagem do produto...'
        />
        <button type="submit">Enviar</button>
      </form>
      <h1>Listar Todos os produtos</h1>
      <br />
      <button onClick={ListarProdutos}>Listar</button>
        <div>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <h3>{produto.name}</h3>
              <p>{produto.description}</p>
              <p>Preço: ${produto.price}</p>
              <img src={produto.image} alt={produto.name} />
              <button onClick={() => DeletarProduto(produto)}>Deletar Produto</button>
            </div>
          ))}
        </div>

    </div>
  );
};

export default DashboardAdmin;
