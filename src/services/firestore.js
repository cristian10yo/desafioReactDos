import { initializeApp } from "firebase/app"; //aplicacion general
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from "firebase/firestore";

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
};

export async function createBuyOrder (orderData){
  const collectionRef = collection ( firestore, "orders");
  let respuesta = await addDoc (collectionRef, orderData);
  return respuesta.id;

}

// FUNCIÓN PARA CARGAR LOS PRODUCTOS A LA BASE DE DATOS DE FIREBASE

/*export async function exportDataToFirestore (){
  
const data = [
  {
      
      title: "Auricular Sony",
      price: 2500,
      detail: "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
      img: "/assets/auricsony.jpg",
      stock: 2,
      category: "Bluetooth",
  },
  {
      
      title: "Auricular Razer",
      price: 3500,
      detail: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los auriculares Razer no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
      img: "/assets/razerkraken.jpg",
      stock: 3,
      category: "Gamer",
  },
  {
      
      title: "Auricular Philips",
      price: 1700,
      detail: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Philips y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.",
      img: "/assets/auricularesblue/auricularBluetoothPhilips.jpg",
      stock: 5,
      category: "Bluetooth",
  },
  {
      
      title:"Auricular Apple",
      offer: true,
      price:2000,
      detail:"A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods se basa en la geometría del oído, por eso son más cómodos que cualquier otro audífono de este tipo.Las bocinas del interior de los EarPods han sido diseñadas para mejorar la calidad del sonido y minimizar su pérdida. ¿El resultado? Un audio de alta calidad.Los EarPods también incluyen un control remoto integrado en el cable que te permite ajustar el volumen, controlar la reproducción de música y video, y responder o finalizar llamadas",
      img:"/assets/apple.jpg",
      stock:2,
      category: "Microfono",
      
  }
];

const collectionRef =  collection (firestore, "Auriculares")

for (let item of data){
  const newDoc = await addDoc (collectionRef, item);
}
}
*/
  export default firestore;
  