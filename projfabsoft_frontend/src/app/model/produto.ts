export class Produto {
  id?: number;
  nome: string = '';
  descricao: string = '';
  preco: number = 0;
  quantidadeEstoque: number = 0;
  imagemUrl?: string;

  constructor(
    id?: number,
    nome: string = '',
    descricao: string = '',
    preco: number = 0,
    quantidadeEstoque: number = 0,
    imagemUrl?: string
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.quantidadeEstoque = quantidadeEstoque;
    this.imagemUrl = imagemUrl;
  }
}
