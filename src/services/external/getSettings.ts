import axios from "axios";
import apiConfig from './apiConfig';

const getAllSettings = async () => {

    const url = `${apiConfig.BASE_URL}/api/v1/settings/`;

    try {
        const response = await axios.get(
            url,
			{
				headers: {
					'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
				}
			}
        );
        const data = response.data;
        return data;
    } catch ( error ) {
        console.log ( error as Error );
    }

};

const getBannerObject = async () => {

    const url = `${apiConfig.BASE_URL}/api/v1/settings/keyname/banner`;

    try {
        const response = await axios.get(
            url,
			{
				headers: {
					'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
				}
			}
        );
        const data = response.data;
        return data;
    } catch ( error ) {
        console.log ( error as Error );
    }

};

export { 
    getAllSettings,
    getBannerObject
};
