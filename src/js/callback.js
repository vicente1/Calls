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

export const buscarPersona = ( curp, callback)=>{
    const persona = personas[curp];
    if (persona) {
        callback(null, persona);
    } else {
        callback(`No existe persona con el CURP ${curp}`);
    }
    //callback(persona);
}