import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {


    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    findHero( id1, (error, hero1) => {

        // element.innerHTML = hero?.name || 'No hay heroe'; // Manejo de errores

        if( error ){
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2) => {
            if( error ){
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ hero1.name} / ${ hero2.name}`;

        })

    });

}


/**
 * 
 * @param {String} id 
 * @param { (error: String|Null, hero: Object) => void } callback 
 */
const findHero = ( id, callback) => {


    const hero = heroes.find( hero => hero.id === id );

    if( !hero ) {
        callback(` Hero With id ${ id } not fund`);
        return; //Undefined
    }


    callback(null, hero );
}