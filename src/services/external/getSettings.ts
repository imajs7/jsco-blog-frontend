import axios from "axios";
import apiConfig from './apiConfig';

const getSettings = async () => {

    const url = `${apiConfig.BASE_URL}/settings`;

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

export default getSettings;
