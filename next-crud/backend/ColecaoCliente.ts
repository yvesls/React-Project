import { Cliente } from "@/src/core/Cliente";
import ClienteRepository from "../src/core/ClienteRepository";

export default class ColecaoCliente implements ClienteRepository {
    async salvar(cliente: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    async excluir(cliente: Cliente): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async obterTodos(): Promise<Cliente[]> {
        throw new Error("Method not implemented.");
    }
    
}