import { query } from "express";
import { Pagination, PaginationDto } from "../utils/Paginacion.js";
import OficinaRepository from "../repository/OficinaRepository.js";
import AlquilerRepository from '../repository/AlquilerRepository.js';
import FotoRepository from '../repository/FotoRepository.js'
import BarrioRepository from "../repository/BarrioRepository.js";
const repoAlquileres=new AlquilerRepository();
const repoFotos= new FotoRepository();
const repoOficina = new OficinaRepository();
const repo=new OficinaRepository();
const PaginacionConfig = new Pagination();
const repoBarrio=new BarrioRepository();

export class OficinaService{

    async getOficinas(limit, offset,filtros){
        const parsedLimit = PaginacionConfig.parseLimit(limit);
        const parsedOffset = PaginacionConfig.parseOffset(offset);
        const cantidad=Number.parseInt(await repo.countOficinas(filtros));
        const paginacion = PaginacionConfig.buildPaginationDto(parsedLimit, parsedOffset, cantidad, `/oficina`)

        const {data,error}=await repo.getOficinas(parsedLimit,parsedOffset,filtros);

        if (data!=null) {
            for (let i = 0; i < data.length; i++) {
                const foto=(await repoFotos.getFotosByOficina(data[i].id_oficina)).data;
                if (foto==null) {
                    data[i].foto="https://i.ibb.co/pnrQpnJ/2327055.png"
                }else{
                    data[i].foto=foto[0].contenido
                }
                data[i].barrio=(await repoBarrio.getBarrioById(data[i].id_barrio)).data[0]
            }
            
        }
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
    async getOficinaByUser(idUsuario){
        const {data,error}= await repoOficina.getOficinaByUser(idUsuario)
        if (data!=null) {
            for (let i = 0; i < data.length; i++) {
                const foto=(await repoFotos.getFotosByOficina(data[i].id_oficina)).data;
                if (foto==null) {
                    data[i].foto="https://i.ibb.co/pnrQpnJ/2327055.png"
                }else{
                    data[i].foto=foto[0].contenido
                }
            }
            
        }
        return {data,error}
    }

    async postOficina(oficina){
        try {
            const res1=await repo.postOficina(oficina);
            const idOfi=res1.data.id_oficina;
            // await repoFotos.postFoto(idOfi,oficina.imagen);
        } catch (error) {
            console.log(error);
            return false;
        }
        return true;

    }

}
