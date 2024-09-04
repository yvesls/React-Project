import { Cliente } from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";
interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}
export default function Tabela(props: TabelaProps) {
  const exibirAcoes = !!props.clienteSelecionado || !!props.clienteExcluido;
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Codigo</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }
  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="text-center">
        {props.clienteSelecionado && (
          <button
            className="text-green-600 rounded-full p-2 m-1 hover:bg-white"
            onClick={() => props.clienteSelecionado!(cliente)}
          >
            {IconeEdicao}
          </button>
        )}
        {props.clienteExcluido && (
          <button
            className="text-red-600 rounded-full p-2 m-1 hover:bg-white"
            onClick={() => props.clienteExcluido!(cliente)}
          >
            {IconeLixo}
          </button>
        )}
      </td>
    );
  }
  function renderizarDados() {
    return props.clientes.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes && renderizarAcoes(cliente)}
        </tr>
      );
    });
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
