import { CategoriaProductoEntity } from "@productos/models/entity/categoria.producto.entity";

export interface CategoriaProductoService {

    /**
     * Método encargado de registrar una categoría de producto.
     * @param {CategoriaProductoEntity} categoriaProducto 
     */
    insert(categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity>;

    /**
     * Método encargado de actualizar una categoría de producto.
     * @param {CategoriaProductoEntity} categoriaProducto 
     */
    update(categoriaProducto: CategoriaProductoEntity): Promise<CategoriaProductoEntity>;

    /**
     * Método encargado de encontrar una categoría de producto por la PK.
     * @param {number} idCategoriaProducto 
     */
    findByPk(idCategoriaProducto: number): Promise<CategoriaProductoEntity>;

    /**
     * Retorna todas las categorias de los productos.
     */
    findAll(): Promise<Array<CategoriaProductoEntity>>;

    /**
     * Método para buscar una lista de elementos por su nombre.
     * @param nombre parte del nombre a buscar en la tabla categoria_producto
     */
    findLikeNombre(nombre: string): Promise<Array<CategoriaProductoEntity>>;
}