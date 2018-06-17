export class Produto {
    nome: string;
    preco: number;
    categoria: string;

    constructor(nome: string, preco: number, categoria: string) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}
