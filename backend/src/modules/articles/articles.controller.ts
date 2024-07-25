import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateArticleDTO } from 'src/dtos/articles.dto';
import { ArticlesService } from './articles.service';


@Controller('articles')
export class ArticlesController {

    constructor(
        private readonly articleService:ArticlesService,
    ){}

    @Get()
    getAll(){
        return this.articleService.getAll()
    }

    @Get("/query")
    getByTitle(@Query('title') title:string){
        return this.articleService.getByTitle(title)
    }


    @Get(":id")
    getByID(@Param('id', ParseIntPipe) id: number){
        return this.articleService.getByID(id)
    }

    @Post()
    addArticle(@Body() articleInfo:CreateArticleDTO){
        return this.articleService.addArticle(articleInfo)
    }

    @Put(":id")
    updateArticle(@Param('id', ParseIntPipe) id: number, @Body() articleInfo:CreateArticleDTO){
        return this.articleService.updateArticle(id,articleInfo)
    }

    @Delete(":id")
    deleteArticle(@Param('id', ParseIntPipe) id: number){
        return this.articleService.deleteArticle(id)
    }

}   
