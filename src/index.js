import { buscarPersona } from './js/callback';
import './styles.css';

const personaCurp = 'MEAN';

buscarPersona( personaCurp, (err, persona) =>{
    
    if (err) {
        console.error(err);
    } else {
        console.log(persona);        
    }
});