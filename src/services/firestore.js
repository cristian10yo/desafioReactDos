import { initializeApp } from "firebase/app"; //aplicacion general
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbR25myx8dLAGJQKhkjbgcprMym9Me7Q4",
    authDomain: "falsystore.firebaseapp.com",
    projectId: "falsystore",
    storageBucket: "falsystore.appspot.com",
    messagingSenderId: "1014884954762",
    appId: "1:1014884954762:web:a46b8856fc2fafae987373"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app); //inicializamos la conexión a la base de datos

export async function getMockItems (){
    const collectionRef = collection ( firestore, "Auriculares")
    let snapshotDB= await getDocs (collectionRef);

    let dataDocs= snapshotDB.docs.map ((documento) => {
      let docFormateado = {...documento.data(),id:documento.id};
    return  docFormateado;

    });
    return dataDocs;
}


export async function getSingleItem (idParams){
  const docRef = doc(firestore, "Auriculares",idParams);
  const docSnapshot = await getDoc (docRef);

  return {...docSnapshot.data(),id: docSnapshot.id}
}

export async function getItemsByCategory(catParams){
  const collectionRef = collection(firestore, "Auriculares");
  const queryCategory = query ( collectionRef, where ("category","==",catParams)); 

  const respuesta = await getDocs (queryCategory);
  let dataDocs =respuesta.docs.map ((documento)=>{
  let docFormateado = {...documento.data (), id: documento.id};
  return docFormateado;
});
return dataDocs;
}

  export default firestore;
  