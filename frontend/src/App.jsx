import React, { useEffect, useState } from 'react';
import { getArticles, createArticle, deleteArticle } from './services/api';
import ArticleTable from './components/ArticleTable';
import ArticleForm from './components/ArticleForm';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      setArticles(response.data);
    } catch (error) {
      console.log(error)
      console.error('Error fetching articles:', error);
    }
  };

  const handleAddArticle = async (article) => {
    try {
      const response = await createArticle(article);
      console.log(response)
      fetchArticles();
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  const handleDeleteArticle = async (id) => {
    try {
      const response = await deleteArticle(id);
      console.log(response)
      fetchArticles();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Blog</h1>
      <ArticleForm onSubmit={handleAddArticle} />
      <ArticleTable articles={articles} onDelete={handleDeleteArticle} />
    </div>
  );
};

export default App;
