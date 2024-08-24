import Cabecalho from '@/components/Cabecalho';
import Layout from '@/components/Layout';

export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes">
      <Cabecalho titulo="Fumdamentos de Next.js & React" />
      <Cabecalho titulo="Aprenda Next na prática" />
    </Layout>
  );
}
