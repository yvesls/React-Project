import Navegador from '@/components/Navegador';
import Link from 'next/link';

export default function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}
    >
      <Navegador destino="/exemplo" texto="Exemplo"></Navegador>

      <Navegador
        destino="/estiloso"
        texto="Estiloso"
        cor="darkviolet"
      ></Navegador>

      <Navegador destino="/jsx" texto="JSX" cor="crimson"></Navegador>
      <Navegador
        destino="/navegacao"
        texto="Navegação 01"
        cor="green"
      ></Navegador>

      <Navegador
        destino="/cliente/123"
        texto="Navegação 02"
        cor="blue"
      ></Navegador>

      <Navegador
        destino="/cliente/es-2/123"
        texto="Navegação Filial"
        cor="orange"
      ></Navegador>

      <Navegador destino="/estado" texto="Navegação 03" cor="grey"></Navegador>

      <Navegador
        destino="/integracao_1"
        texto="Integração API #01"
        cor="deeppink"
      ></Navegador>

      <Navegador
        destino="/estatico"
        texto="Conteúdo estático"
        cor="darkgrey"
      ></Navegador>
    </div>
  );
}
