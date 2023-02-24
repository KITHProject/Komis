import { db } from '@/firebase/firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

interface ProductProps {
  name: string
  description: string
  price: number
  year?: number
}

export const addProduct = async ({ ...props }: ProductProps) => {
  var postedAt = new Date().toLocaleString('en-US')

  await addDoc(collection(db, 'products'), {
    postedAt: postedAt,
    name: props.name,
    description: props.description,
    price: props.price,
    year: props.year,
  }).then((res) => {
    return res
  })
}

export const fetchProducts = async () => {
  let products = []
  const querySnapshot = await getDocs(collection(db, 'products'))
  products = await Promise.all(querySnapshot.docs.map((doc) => doc.data()))
  return products
}
