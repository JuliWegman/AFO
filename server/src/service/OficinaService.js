import { query } from "express";
import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import OficinaRepository from "../repository/OficinaRepository.js";
import AlquilerRepository from '../repository/AlquilerRepository.js';
import FotoRepository from '../repository/FotoRepository.js'

const repoAlquileres=new AlquilerRepository();
const repoFotos= new FotoRepository();
const repo=new OficinaRepository();
const PaginacionConfig = new Pagination();


export class OficinaService{

    async getOficinas(limit, offset){
        const parsedLimit = PaginacionConfig.parseLimit(limit);
        const parsedOffset = PaginacionConfig.parseOffset(offset);
        const cantidad=Number.parseInt(await repo.countOficinas()) || 3;
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, `/oficina`)

        const {data,error}=await repo.getOficinas(parsedLimit,parsedOffset);
        const collection={data,paginacion};
        return {collection,error};
    }
        

    async getOficinaById(id){
        return await repo.getOficinaById(id)
    }

    async getAlquileresByOficina(idOficina){
        return await repoAlquileres.getAlquileresByOficina(idOficina)

    }

    async getFotosByOficina(idOficina){
        
        return await repoFotos.getFotosByOficina(idOficina)
    }

}
