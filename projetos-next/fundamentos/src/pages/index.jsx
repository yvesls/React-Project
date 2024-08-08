import Link from "next/link"

export default function Inicio() {
    return (
        <div>
            <Link href="/estiloso">Estiloso</Link>
            <br /><br />
            <Link href="/jsx">Jsx</Link>
            <br /><br />
            <Link href="/exemplo">Exemplo</Link>
            <br /><br />
            <Link href="/teste">Teste</Link>
        </div>
    )
}