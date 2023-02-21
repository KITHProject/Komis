import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";


interface ProductProps {
    name : string;
    description: string;
    price: number;
    year?: number;
}

export const addProduct = async ({...props}: ProductProps) => {
    var postedAt = new Date().toLocaleString("en-US");
  
    try {
        console.log(db)
        await addDoc(collection(db, 'products'), {
            postedAt: postedAt,
            name : props.name,
            description: props.description,
            price: props.price,
            year: props.year,
        }).then((res) => {
            console.log(res)
            return res
        }
        )
    } catch (err) {
        alert(err)
    }
    
  }