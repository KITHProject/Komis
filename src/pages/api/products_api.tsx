import { db } from "@/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";




const fetchProducts = async () => {
    let products = []
    const querySnapshot = await getDocs(collection(db, "products"));
    products = await Promise.all(querySnapshot.docs.map((doc) => doc.data()));
    return products
  }



const addProduct = async (e: any) => {

  console.log("adding")
  var product_price = 1;
  var title = "opel skoda";

  e.preventDefault()
  try {
    console.log("trying")
    addDoc(collection(db, 'products'), {
      price: product_price,
      year: product_price,
      name: title,
      image: title,
      poked: title
    })

  console.log("send")
  } catch (err) {
    alert(err)
    console.log("error")
  }
  console.log("sen2222d")
  }

  export {fetchProducts, addProduct}