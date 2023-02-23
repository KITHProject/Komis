import { Actions } from "./Actions";
import { Services } from "./Services";

// linijki:6-11 tutaj nie powinno być chyba tak że deklaruje to na nowo jak jest już w ProductCard.tsx ale nie wiem jak to zrobić xd
// linijka 18: chicałym że jak klikniesz to się otweira taki modal z jakby mini tabela gdzie masz wiecej info


interface ProductProps {
    name : string;
    description: string;
    price: number;
    year?: number;
}

export function Row ({...props}: ProductProps){
    return (
        <>
           <tr className="odd:bg-slate-50">
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{props.name}{props.year}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{props.description}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{props.price}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">0</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><Services/></td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "><Actions/></td>
            </tr>
        </>
    );
}



