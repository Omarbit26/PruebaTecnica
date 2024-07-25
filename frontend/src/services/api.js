import axios from 'axios';

const API_URL = 'http://localhost:3001'; 

export const getArticles = () => axios.get(`${API_URL}/articles`);
export const createArticle = (article) => axios.post(`${API_URL}/articles`, article);
export const deleteArticle = (id) => axios.delete(`${API_URL}/articles/${id}`);

export const getArticleById = () => axios.get(`${API_URL}/articles/${id}`)
export const getArticleByTitle = () => axios.get(`${API_URL}/articles/${title}`)
