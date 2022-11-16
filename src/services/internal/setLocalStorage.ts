
const setLocalStorage = ( localValue : any ) => {
    try {
        localStorage.setItem( 'jscoblog', localValue );
    } catch( error ) {
        console.log( 'Local storage error: ', error );
    }
};

export default setLocalStorage;