
const data = [
    {
        id: 1,
        title: "Auricular Sony",
        price: 2500,
        detail: "Auricular Sony",
        img: "",
        stock: 2,
        category: "auricular bluetooth",
    },
    {
        id: 2,
        title: "Auricular Razer",
        price: 3500,
        detail: "Auricular Razer",
        img: "",
        stock: 3,
        category: "auricular bluetooth",
    },
    {
        id: 3,
        title: "Auricular Philips",
        price: 1700,
        detail: "Auricular Philips",
        img: "/assets/auricularesblue/auricularBluetoothPhilips.jpg",
        stock: 5,
        category: "auricular bluetooth",
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

    export function getSingleItem (){
        return new Promise ((resolve,reject)=>{
            setTimeout (()=>
            resolve (data[2])
            
                        )
        },1500
        )
        }

