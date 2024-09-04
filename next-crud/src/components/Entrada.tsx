interface EntradaPropsBase {
  texto: string;
  somenteLeitura?: boolean;
  valor: any;
  tipo?: "text" | "number";
  valorMudou?: (v: any) => void;
}
export default function Entrada(props: EntradaPropsBase)
{
  return (
    <div className="flex flex-col mb-2">
      <label>{props.texto}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50 px-4 py-2 ${
          props.somenteLeitura ? "" : "focus:bg-white"
        }`}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
