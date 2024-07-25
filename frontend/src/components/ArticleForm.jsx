import React, { useState } from 'react';

const ArticleForm = ({ onSubmit }) => {
  const [titulo, setTitle] = useState('');
  const [contenido, setContent] = useState('');
  const [fecha, setPublishedAt] = useState('');
  const [autor, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, contenido, fecha, autor });
    setTitle('');
    setContent('');
    setPublishedAt('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        placeholder="Fecha de Publicación"
        value={fecha}
        onChange={(e) => setPublishedAt(e.target.value)}
        required
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="w-full mb-2 p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar Artículo
      </button>
    </form>
  );
};

export default ArticleForm;
