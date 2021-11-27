import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("COMPRA")
export class CompraEntity {

    @PrimaryColumn({ name: "ID_COMPRA" })
    idCompra: number;

    @Column({ name: "ID_EMPLEADO" })
    idEmpleado: number;

    @Column({ name: "ID_CLIENTE" })
    idCliente: number;

    @Column({ name: "FECHA_COMPRA" })
    fechaCompra: Date;

    @Column({ name: "VALOR_TOTAL" })
    valorTotal: number;

}