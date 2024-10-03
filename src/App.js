import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Importa o CSS para estilização

const App = () => {
  const [barcode, setBarcode] = useState(''); // Estado para o código de barras
  const [item, setItem] = useState(null); // Estado para o item encontrado
  const inputRef = useRef(null); // Referência para o input

  // Array de objetos para buscar os itens com imagem
  const items = [
    { codigo_barras: '1122334455', descricao: 'Cachorro', imagem: 'https://images.unsplash.com/photo-1560807707-8cc77767d783' },
    { codigo_barras: '5544332211', descricao: 'Gato', imagem: 'https://images.unsplash.com/photo-1555685812-340e2c0c0f39' },
    { codigo_barras: '6677889900', descricao: 'Coelho', imagem: 'https://images.unsplash.com/photo-1543852786-1cf6624b4987' },
    { codigo_barras: '9191232308', descricao: 'Tigre', imagem: 'https://images.unsplash.com/photo-1506734817539-b3e8e2b4c54b' },
    { codigo_barras: '3233332223', descricao: 'Elefante', imagem: 'https://images.unsplash.com/photo-1536511903026-68f1de5e3d88' },
    { codigo_barras: '4445554444', descricao: 'Leão', imagem: 'https://images.unsplash.com/photo-1501594907350-b6f8038f8f51' }
  ];

  // Efeito para definir o autofoco no input ao carregar a tela
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  // Função para lidar com a leitura do código de barras
  const handleInputChange = (e) => {
    const input = e.target.value;
    setBarcode(input);

    // Verifica se o código de barras digitado existe no array de itens
    const foundItem = items.find((i) => i.codigo_barras === input);

    // Se encontrado, atualiza o estado do item
    if (foundItem) {
      setItem(foundItem);
      setBarcode(''); // Limpa o input após encontrar o item
    }
    
  };

  return (
    <div className="container">
      <h1>Leitor de Código de Barras</h1>
      <input
        ref={inputRef} // Autofocus no input
        type="text"
        value={barcode}
        onChange={handleInputChange}
        placeholder="Escaneie o código de barras"
      />
      {item ? (
        <div className="item-details">
          <h2>Descrição do Item:</h2>
          <p>{item.descricao}</p>
          <img src={item.imagem} alt={item.descricao} className="item-image" />
        </div>
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
};

export default App;
