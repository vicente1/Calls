const personas ={
    PESV: {
        nombre: 'Jose Vicente',
        apellido: 'Perez Soto' 
    },
    SANM: {
        nombre: 'Martin',
        apellido: 'Sanchez Noguera' 
    },
    MEAN: {
        nombre: 'Nuvia',
        apellido: 'Merida Aguirre' 
    },
}

export const buscarPersona = (curp) => {
    const persona = personas[curp];
    return new Promise( (resolve, reject) =>{

        if (persona) {
            resolve(persona);
        } else {
            reject(`No existe persona con el CURP ${curp}`);
        }
    });
}

export const buscarPersonaAsync = async(curp) => {
    const persona = personas[curp];
    if (persona) {
        return persona;
        } else {
            throw `No existe persona con el CURP ${curp}`;
            
        }

}

const promesaLenta = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        resolve('Promesa Lenta')
    }, 2000);
});

const promesaMedia = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        resolve('Promesa Media')
    }, 1500);
});

const promesaRapida = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        resolve('Promesa Rapida')
    }, 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}
