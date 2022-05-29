import { Injectable } from '@angular/core';
import { addDoc, collectionData, collection, doc, docData, Firestore, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Product{
  id?: string;
  title: string;
  description: string;
  amount: number;
  coin: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) { }

  getProducts(): Observable<Product[]>{
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

  getProductById(id): Observable<Product>{
    const productDocRef = doc(this.firestore, `products/${id}`);
    return docData(productDocRef, { idField: 'id' }) as Observable<Product>;
  }

  addProduct(product: Product){
    const productsRef = collection(this.firestore, 'products');
    return addDoc(productsRef, product);
  }

  deleteProduct(product: Product){
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }

  updateProduct(product: Product){
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return updateDoc(productDocRef, {
      title: product.title,
      description: product.description,
      amount: product.amount,
      coin: product.coin,
      image: product.image
    });
  }
}
