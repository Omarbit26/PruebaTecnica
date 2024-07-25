export class Article {

    static currentID:number = 2;

    id:number
    titulo:string
    contenido:string
    fecha:Date
    autor:string

    constructor(id:number,titulo:string,contenido:string,fecha:Date,autor:string){
        this.id=id;
        this.titulo=titulo;
        this.contenido=contenido;
        this.fecha = fecha;
        this.autor = autor;
    }
    
}