import { Optional } from "@nestjs/common"
import { Type } from "class-transformer"
import { IsDate, IsString, Length } from "class-validator"

export class CreateArticleDTO{

    @IsString()
    @Length(1,40)
    titulo:string

    @IsString()
    @Length(1,200)
    contenido:string

    @Type(() => Date)
    @IsDate()
    fecha:Date

    @IsString()
    @Length(1,25)
    autor:string
}

export class UpdateArticleDTO{

    @Optional()
    @IsString()
    @Length(1,40)
    titulo:string

    @Optional()
    @IsString()
    @Length(1,200)
    contenido:string

    @Optional()
    @Type(() => Date)
    @IsDate()
    fecha:Date

    @Optional()
    @IsString()
    @Length(1,25)
    autor:string
}