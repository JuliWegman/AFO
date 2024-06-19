import { query } from "express";
import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import OficinaRepository from "../repository/OficinaRepository.js";
const repo=new OficinaRepository();
const PaginacionConfig = new Pagination();


export class OficinaService{

    async getOficinas(limit, offset){
        const parsedLimit = PaginacionConfig.parseLimit(limit);
        const parsedOffset = PaginacionConfig.parseOffset(offset);
        const cantidad=Number.parseInt(await repo.countOficinas()) || 3;
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, `/oficina`)

        const Oficinas=await repo.getOficinas(parsedLimit,parsedOffset);
        const collection={Oficinas,paginacion};
        return collection;
    }

    async getOficinaById(id){
        return await repo.getOficinaById(id)
    }

}
