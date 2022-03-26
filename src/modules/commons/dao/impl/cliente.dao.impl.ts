import { ClienteEntity } from "@commons/models/entity/cliente.entity";
import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";
import { ClienteDao } from "../cliente.dao";

/**
 * Clase encargada de la capa de datos de los clientes. <br>
 * @createAt 2022-03-25, 19:49:24 <br>
 * @autor <a href='https://www.jhonsebastianas.com/'>JhonSebastianAS</a>
 */
@Injectable()
export class ClienteDaoImpl implements ClienteDao {

    constructor(@InjectEntityManager()
    private entityManager: EntityManager) { }

    async insert(cliente: ClienteEntity): Promise<ClienteEntity> {
        return await this.entityManager.save(cliente);
    }

    async update(cliente: ClienteEntity): Promise<ClienteEntity> {
        return await this.entityManager.save(cliente);
    }

    async findByPk(idCliente: number): Promise<ClienteEntity> {
        return await this.entityManager.findOne<ClienteEntity>(ClienteEntity, idCliente);
    }

    async findByIdentificacion(tipoIdentificacion: number, numeroIdentificacion: string): Promise<ClienteEntity> {
        return await this.entityManager.findOne(ClienteEntity,
            { idTipoIdentificacion: tipoIdentificacion, numeroIdentificacion }
        );
    }

}