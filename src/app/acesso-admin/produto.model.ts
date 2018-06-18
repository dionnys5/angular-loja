export class Produto {
    nome: string;
    preco: number;
    categoria: string;
    img: string;

    constructor(nome: string, preco: number, categoria: string, img: string) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.img = img;
    }
}
