import './styles.css';
//import { obtenerPesonasArr, obtenerPersonaAwait } from './js/await-eje';
import { personasCiclo, personaIfAwait } from './js/await-eje';
personasCiclo();
personaIfAwait('PESV');
/*
console.time('await');

obtenerPersonaAwait('MEAD')
    .then( persona =>{
        console.log(persona);
        console.timeEnd('await');

    }).catch(console.warn);

obtenerPesonasArr().then(personas =>{
    console.table(personas);
    console.timeEnd('await');
});
*/
