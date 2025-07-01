import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Pedido {
    id: number;
    cliente: Cliente;
    produtos: Produto[];
    produtosTrocados: Produto[];
    total: number;
}