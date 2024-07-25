import React from 'react';

const ArticleTable = ({ articles, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Título</th>
            <th className="py-2 px-4 border-b">Contenido</th>
            <th className="py-2 px-4 border-b">Fecha de Publicación</th>
            <th className="py-2 px-4 border-b">Autor</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article.id}>
              <td className="py-2 px-4 border-b">{article.id}</td>
              <td className="py-2 px-4 border-b">{article.titulo}</td>
              <td className="py-2 px-4 border-b">{article.contenido}</td>
              <td className="py-2 px-4 border-b">{article.fecha}</td>
              <td className="py-2 px-4 border-b">{article.autor}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onDelete(article.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
