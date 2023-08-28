//  Funciones generadoras

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction();


    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );
    console.log( myGenerator.next() );

}


function* myFirstGeneratorFunction() {

    yield 'primer valor';
    yield 'sedundo valor';
    yield 'tercer valor';
    yield 'cuarto valor';
    
    return 'Ya no hay valores';
    yield 'quinto valor';
}




