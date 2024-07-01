import { query } from "express";
import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import LocalidadRepository from "../repository/LocalidadRepository.js";

const repo=new LocalidadRepository();
const PaginacionConfig = new Pagination();

export class LocalidadService{
    async getLocalidades(limit, offset){
        const parsedLimit = PaginacionConfig.parseLimit(limit);
        const parsedOffset = PaginacionConfig.parseOffset(offset);
        const cantidad=Number.parseInt(await repo.countLocalidades()) || 3;
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, `/localidad`)

        const {data,error}=await repo.getLocalidades(parsedLimit,parsedOffset);
        const collection={data,paginacion};
        return {collection,error};
    }
}