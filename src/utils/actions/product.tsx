import { db } from "@/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";


interface ProductProps {
    name : string;
    description: string;
    price: number;
    year?: number;
}

export const addProduct = async ({...props}: ProductProps) => {
    var postedAt = new Date().toLocaleString("en-US");
  
    try {
        await addDoc(collection(db, 'products'), {
            postedAt: postedAt,
            name : props.name,
            description: props.description,
            price: props.price,
            year: props.year,
        }).then((res) => {
            return res
        }
        )
    } catch (err) {
        alert(err)
    }
    
  }

export const fetchProducts = async () => {
    let products = "nothing"
    try {
        console.log(2)
        await getDocs(collection(db, "products")).then((res) => {
            console.log(res.docs[0])
            return res
        }
        )
    } catch (err) {
        alert(err)
    }
    // const querySnapshot = 
    // products = await Promise.all(querySnapshot.docs.map((doc) => doc.data()));
    // console.log(products)
    return products
  }


