import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import { Cliente } from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientes = [
    new Cliente("Ana", 12, "1"),
    new Cliente("Bia", 17, "2"),
    new Cliente("Pedro", 17, "3"),
    new Cliente("André", 15, "4"),
  ];

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function excluirCliente(cliente: Cliente) {
    console.log("Excluido sempre", cliente)
  }
  function salvarCliente(cliente: Cliente) {
    console.log("Salvando sempre", cliente)
    setVisivel('tabela')
  }
  function criarCliente() {
    setCliente(Cliente.vazio)
    setVisivel('form')
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? 
        (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={criarCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ): (
          <Formulario cliente={cliente} 
          cancelado={() => setVisivel('tabela')}
          clienteMudou={salvarCliente}
          />
        )
      }
      </Layout>
    </div>
  );
}
