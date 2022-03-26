import { Injectable } from "@nestjs/common";
import { TipoCategoriaProductoDaoImpl } from "@productos/dao/impl/tipo.categoria.producto.dao.impl";
import { TipoCategoriaProductoEntity } from "@productos/models/entity/tipo.categoria.producto.entity";
import { TipoCategoriaProductoManager } from "../tipo.categoria.producto.manager";

/**
 * Clase encargada de la capa de negocio de las categorias de productos. <br>
 * @createAt 2022-03-25, 20:36:59 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class TipoCategoriaProductoManagerImpl implements TipoCategoriaProductoManager {

    constructor(
        private tipoCategoriaProductoDao: TipoCategoriaProductoDaoImpl
    ) { }

    async registrarTipoCategoriaProducto(categoriaProducto: TipoCategoriaProductoEntity): Promise<TipoCategoriaProductoEntity> {
        return await this.tipoCategoriaProductoDao.insert(categoriaProducto);
    }

    async findByPk(idCategoriaProducto: number): Promise<TipoCategoriaProductoEntity> {
        return await this.tipoCategoriaProductoDao.findByPk(idCategoriaProducto);
    }

    async findAll(): Promise<TipoCategoriaProductoEntity[]> {
        return await this.tipoCategoriaProductoDao.findAll();
    }

    async findLikeNombre(nombre: string): Promise<TipoCategoriaProductoEntity[]> {
        return await this.tipoCategoriaProductoDao.findLikeNombre(nombre.toUpperCase());
    }

}