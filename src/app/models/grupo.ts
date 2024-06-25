import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Demanda } from "./demanda";

export class Grupo {
    id!: number;
    nome!: string;
    
    demandaSolicitada!: Demanda;
    demandaInscrita!: Demanda;
    curso!: Curso;
    alunos: Aluno[] = [];

    constructor() {}
}
