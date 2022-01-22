import { typesProducts } from '../types/types';
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from '../firebase/firebaseConfig';




//CATEGORIES PRODUCTS ---------------------------------------------

//Action CATEGORY Product Async
export const categoryProductAsync = (category) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "ingredients");
        const q = query(prodCollections, where("menu", "==", category))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        //console.log(producto);
        dispatch(categoryProductSync(producto))
    }
}

//Action Category Product Sync
export const categoryProductSync = (category) => {
    return {
        type: typesProducts.category,
        payload: category
    }
}




//LIST CATEGORIES ---------------------------------------------

//Action List CATEGORIES Async
 export const listCategoriesAsync = () => {
     return async (dispatch) => {

         const querySnapshot = await getDocs(collection(db, "menus"));
         //console.log(querySnapshot);

         const menu = [];
         querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
             menu.push({
                 ...doc.data()
             })
         });
         //console.log(productos);
         dispatch(listCategoriesSync(menu));
     }
 }


//Action List Product Sync
export const listCategoriesSync = (menus) => {
    return {
        type: typesProducts.menus,
        payload: menus
    }
}






//SEARCH PRODUCT ---------------------------------------------

//Action Search Product Async
export const searchProductAsync = (product) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "ingredients");
        const q = query(prodCollections, where("menu", "==", product))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        console.log(producto);
        dispatch(searchProductSync(producto))
    }
}

//Action Search Product Sync
export const searchProductSync = (product) => {
    return {
        type: typesProducts.search,
        payload: product
    }
}


//SHOW DETAILS PRODUCT ---------------------------------------------

//Action Show Detail Product Async
export const showDetailProductAsync = (id) => {

    return async (dispatch) => {
        const prodCollections = collection(db, "ingredients");
        const q = query(prodCollections, where("id", "==", id))
        const datos = await getDocs(q);
        //console.log(datos);

        const producto = [];
        datos.forEach((doc) => {
            producto.push(doc.data())
        })
        console.log(producto);
        dispatch(showDetailProductSync(producto))
    }
}

//Action Show Detail Product Sync
export const showDetailProductSync = (product) => {
    return {
        type: typesProducts.detail,
        payload: product
    }
}






//LIST PRODUCT ---------------------------------------------

//Action List Product Async
 export const listProductsAsync = () => {
     return async (dispatch) => {

         const querySnapshot = await getDocs(collection(db, "ingredients"));
         //console.log(querySnapshot);

         const productos = [];
         querySnapshot.forEach((doc) => {
            //console.log(doc);
            //console.log(doc.data());
             productos.push({
                 ...doc.data()
             })
         });
         //console.log(productos);
         dispatch(listProductsSync(productos));
     }
 }


//Action List Product Sync
export const listProductsSync = (products) => {
    return {
        type: typesProducts.list,
        payload: products
    }
}