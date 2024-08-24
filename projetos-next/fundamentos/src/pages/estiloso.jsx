import Layout from '@/components/Layout';
import styles from '@/styles/Estiloso.module.css';
import Link from 'next/link';

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo titulo props">
      <div className={styles.roxo}>
        <h1>Estiloso usando CSS Modularizado</h1>
      </div>
    </Layout>
  );
}
