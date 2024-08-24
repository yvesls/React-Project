import Layout from '@/components/Layout';

export default function Jsx() {
  const titulo = 'Meu título';
  const titulo2 = 'Subtitulo aqui';

  function rodape() {
    return <h3>Meu Rodapé!</h3>;
  }

  return (
    <Layout titulo="Entendendo o JSX">
      <div>
        <h1>{titulo}</h1>
        <h2>{titulo2}</h2>
        <hr />
        <h3>{'muito legal'.toUpperCase()}</h3>
        <p>{JSON.stringify({ Nome: 'João', idade: 39 })}</p>
        <p>Meu nome é João!</p>
        {rodape()}
      </div>
    </Layout>
  );
}
