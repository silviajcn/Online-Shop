import { types } from '../types/types';
import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';







//ACTION DELETE PRODUCT-----------------------------------------------------------------------------

//Action DELETE Product Async
//Action DELETE Product Sync
export const deleteProductSync = (code) => {
    return {
        type: types.delete,
        payload: code
    }
}






//ACTION SEARCH PRODUCT-----------------------------------------------------------------------------

//Action SEARCH Product Async
export const searchProductAsync = (product) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "ropamujer");
        const q = query(prodCollections, where("nameropa", "==", product))
        const datos = await getDocs(q);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        console.log(producto);
        dispatch(searchProductSync(producto))
    }
}

//Action SEARCH Product Sync
export const searchProductSync = (product) => {
    return {
        type: types.search,
        payload: product
    }
}





//ACTION DETAIL PRODUCT-----------------------------------------------------------------------------

//Action DETAIL Product Async
//Action DETAIL Product Sync
export const showDetailProductSync = (product) => {
    return {
        type: types.detail,
        payload: product
    }
}





//ACTION LIST PRODUCT-----------------------------------------------------------------------------

//Action LIST Product Async
export const listProductAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "ropamujer"));
        //console.log(querySnapshot);

        const productos = [];
        querySnapshot.forEach((doc) => {

            productos.push({
                ...doc.data()
            })
        });
        console.log(productos);
        dispatch(listProductSync(productos));
    }
}

//Action LIST Product Sync
export const listProductSync = (products) => {
    return {
        type: types.list,
        payload: products
    }
}





//ACTION CREATE PRODUCT-----------------------------------------------------------------------------

//Action CREATE Product Async
export const registerProductAsync = (newProduct) => {
    return (dispatch) => {
        addDoc(collection(db, "ropamujer"), newProduct)
        .then(resp => {
            dispatch(registerProductSync(newProduct))
            dispatch(listProductAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//Action CREATE Product Sync
export const registerProductSync = (product) => {
    return {
        type: types.register,
        payload: product
    }
}