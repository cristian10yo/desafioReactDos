
const data = [
    {
        id: 1,
        title: "Auricular Sony",
        price: 2500,
        detail: "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
        img: "/assets/auricsony.jpg",
        stock: 2,
        category: "Bluetooth",
    },
    {
        id: 2,
        title: "Auricular Razer",
        price: 3500,
        detail: "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los auriculares Razer no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
        img: "/assets/razerkraken.jpg",
        stock: 3,
        category: "Gamer",
    },
    {
        id: 3,
        title: "Auricular Philips",
        price: 1700,
        detail: "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Philips y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.",
        img: "/assets/auricularesblue/auricularBluetoothPhilips.jpg",
        stock: 5,
        category: "Bluetooth",
    },
    {
        id:4,
        title:"Auricular Apple",
        price:2000,
        detail:"A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods se basa en la geometría del oído, por eso son más cómodos que cualquier otro audífono de este tipo.Las bocinas del interior de los EarPods han sido diseñadas para mejorar la calidad del sonido y minimizar su pérdida. ¿El resultado? Un audio de alta calidad.Los EarPods también incluyen un control remoto integrado en el cable que te permite ajustar el volumen, controlar la reproducción de música y video, y responder o finalizar llamadas",
        img:"/assets/apple.jpg",
        stock:2,
        category: "Microfono",
    }
]

export default function getMockItems (){
    return new Promise ((resolve,reject)=>{
        /*setTimeout (()=>*/
        resolve (data)
        
                   /* )
    },1500
    )*/
    })}

    export function getSingleItem (idItem){
        return new Promise ((resolve,reject)=>{
            let itemFind= data.find ((item)=>{
                return item.id=== parseInt (idItem)
            });
            setTimeout ( ()=>{

            
            if (itemFind) resolve (itemFind);
            else reject (new Error ("item no encontrado"))
        },1500)
        });
    }
            
    export function getItemsByCategory (cat){
        return new Promise ((resolve,reject)=>{
            let itemFind= data.filter ((item)=>{
                return item.category ===  cat;
            });
            setTimeout ( ()=>{

            
            if (itemFind) resolve (itemFind);
            else reject (new Error ("item no encontrado"))
        },1500)
        });
    }
        

