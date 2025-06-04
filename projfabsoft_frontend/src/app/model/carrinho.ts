import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Carrinho {
    id: number;
    cliente: Cliente;
    produtos: Produto[];
}