import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Integracao() {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(1);

  function obterCliente() {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then(res => res.json())
      .then(dados => setCliente(dados));
  }

  async function obterClienteAsync() {
    const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await res.json();
    setCliente(dados);
  }

  return (
    <Layout titulo="Integração #01">
      <div>
        <input
          type="number"
          name="input"
          id="input"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
        />
        <button type="button" onClick={() => obterClienteAsync()}>
          Obter cliente
        </button>
      </div>
      <ul>
        <li>Codigo: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  );
}
