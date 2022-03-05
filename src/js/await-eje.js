import { buscarPersonaAsync, buscarPersona } from "./promesa";

const personasCurps = [ 'PESV', 'SANM', 'MEAN'];
const personasPromesas = personasCurps.map(buscarPersona);

export const obtenerPesonasArr = async() =>{
    
    return await Promise.all(personasCurps.map(buscarPersona));
};

export const obtenerPersonaAwait = async (curp) => {

    try {
        const persona = await buscarPersonaAsync(curp);
        return persona;
    } catch (error) {
        console.warn(error);
        return{
            nombre: 'Sin nombre',
            apellido: 'Sin apellidos'
        };
    }
}

export const personasCiclo = async() =>{
    
    for await (const persona of personasPromesas){
        console.log(persona);
    }
    
    //const personas= await Promise.all(personasPromesas);
    //personas.forEach(persona =>console.log(persona)); 

}

export const personaIfAwait = async(curp) =>{
    if ((await buscarPersonaAsync(curp)).nombre==='Jose Vicente') {
        console.log(`El CURP ${curp} tiene el nombre correcto`);
    } else {
        console.log('Cambiar nombre');
    }
}
