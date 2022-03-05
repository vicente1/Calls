import './styles.css';
//import {promesaLenta,promesaMedia,promesaRapida} from './js/promesa';
import{buscarPersona, buscarPersonaAsync} from './js/promesa'

buscarPersona('MEAN')
    .then(persona=>console.log(persona))
    .catch(console.warn);

buscarPersonaAsync('PESV')
    .then(persona=>console.log(persona))
    .catch(console.warn);

buscarPersonaAsync('PESC')
    .then(persona=>console.log(persona))
    .catch(console.warn);
/*
promesaLenta.then(console.log);
promesaMedia.then(mensaje => console.log(mensaje));
promesaRapida.then(console.log);

Promise.race([promesaLenta,promesaMedia,promesaRapida])
.then(console.log);
*/
