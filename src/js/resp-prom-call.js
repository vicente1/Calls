import { buscarPersona as buscarPersonaCallback} from './js/callback';
import { buscarPersona } from './js/promesa';
import './styles.css';

const personaCurp = 'MEAN';
const persona2Curp = 'SANM';
const persona3Curp = 'PESC';

/*buscarPersona(personaCurp).then(persona =>{
    
    buscarPersona(persona2Curp).then(persona2 =>{
        console.log(`Registrando a ${persona.nombre}
       y ${persona2.nombre} en la BD`);
    });
});*/

Promise.all([ buscarPersona(personaCurp),
            buscarPersona(persona2Curp),
            buscarPersona(persona3Curp)])
            .then( ([persona, persona2,persona3]) =>{
                console.log(`Registrando a ${persona.nombre},  
                ${persona2.nombre},
                ${persona3.nombre} en la BD`);
            }).catch( err =>{
                alert(err)
            }).finally( ()=>{
                console.log('Fin de promise.all');
            })

console.log('Fin del programa');
/*
buscarPersona( personaCurp, (err, persona) =>{
    
    if (err) {
      return console.error(err);
    } 
    buscarPersona( persona2Curp, (err,persona2)=>{
        if (err) {
            return console.error(err);
          }
          buscarPersona( persona3Curp, (err,persona3)=>{
            if (err) {
                return console.error(err);
              } 
              console.log(`Registrando a ${persona.nombre}  
              ${persona2.nombre} 
              ${persona3.nombre} en la BD`);
        }); 
         
    });
});
*/