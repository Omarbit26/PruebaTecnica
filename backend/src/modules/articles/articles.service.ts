import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDTO, UpdateArticleDTO } from '../../dtos/articles.dto';
import { Article } from '../../entitities/Article';

let articleDB:Article[] = [
    {
    id:0,
    titulo:"titulo 01",
    contenido: "contenido 01",
    fecha: new Date(),
    autor: "autor1"},
    {
    id:1,
    titulo:"titulo 02",
    contenido: "contenido 02",
    fecha: new Date(),
    autor: "autor2"
    }


]

@Injectable()
export class ArticlesService {

    /*
    Np se considera el uso del ASINCRONISMO DE TYPESCRIPT ya que al  tener la informacion alamacenada en 
    un array no es necesario el uso promesas y/o await
    */
    

    getAll(){



        return articleDB
    }   

    getByID(id:number){
        articleDB.forEach((article)=>{
            if(article.id===id)
            {
                return article
            }
        })

        throw new NotFoundException(`No se encontro articulo con id ${id}`)
    }

    getByTitle(titulo:string){
        let resp:Article 
        articleDB.forEach((article)=>{
            if(article.titulo===titulo)
            {
                resp = article
            }
        })

        if(!resp) throw new NotFoundException(`No se encontro articulo con titulo ${titulo}`)
        
        return resp
        
    }

    addArticle(articleInfo:CreateArticleDTO){

        articleDB.push({id:Article.currentID,...articleInfo})
        Article.currentID++;
        return {
            message: `Se creo articulo id: ${Article.currentID-1}`
        }
    }   

    updateArticle(id:number,articleInfo:UpdateArticleDTO){
        let resp:any
        articleDB.forEach((article)=>{
            if(article.id===id)
            {
                article = {id,...articleInfo}
                resp = {
                    message:`Se actualizo articulo con id ${id}`
                }
            }
        })
        if(!resp) throw new NotFoundException(`No se encontro articulo con id ${id}`)
        
        return resp
    }

    deleteArticle(id:number){
        let resp:any
        articleDB.forEach((article)=>{
            if(article.id===id){
                articleDB = articleDB.filter(item=>item!==article)
                resp = {
                    message:`Se elimino articulo con id ${id}`
                }
            }
        })
        if(!resp) throw new NotFoundException(`No se encontro articulo con id ${id}`)
        return resp 
    }
}
