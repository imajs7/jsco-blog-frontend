
const getLocalStorage = () => {

    const rawData = localStorage.getItem('jscoblog');
    return rawData ? JSON.parse( rawData) : null;

};

export default getLocalStorage;