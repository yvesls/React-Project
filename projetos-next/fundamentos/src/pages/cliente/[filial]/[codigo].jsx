import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function Codigo() {
  const router = useRouter();

  return (
    <Layout titulo="Navegação dinâmica">
      <div>Código = {router.query.codigo}</div>
      <div>Filial = {router.query.filial}</div>
    </Layout>
  );
}
