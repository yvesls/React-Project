export default function Jsx() {
    // pode código js puro
    const titulo = "Meu Título"
    const subtitulo = <h4>Meu nome é Jerônimo!</h4>

    function rodape() {
        return <h3>Meu Rodapé!</h3>
    }
    return (
        <div>
            <h1>{titulo}</h1>
            {"Uper ai".toUpperCase()}
                {subtitulo}
            <p>
                {JSON.stringify({nome: "Jerônimo", idade: 194})}
            </p>
            {rodape()}
        </div>
    )
}