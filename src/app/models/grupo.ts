import { Aluno } from "./aluno";
import { Demanda } from "./demanda";

export class Grupo {
    id!: number;
    nome!: string;
    demanda!: Demanda;
    alunos: Aluno[] = [];

    constructor(
        id: number,
        nome: string,
        demanda: Demanda,
        alunos: Aluno[]
    ) {
        this.id = id;
        this.nome = nome;
        this.demanda = demanda;
        this.alunos = alunos;
    }
}