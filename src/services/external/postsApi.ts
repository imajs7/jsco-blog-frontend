import axios from "axios";
import apiConfig from './apiConfig';

const postNewBlog = async () => {

    try {
        const response = await axios(
            {
                baseURL: `${apiConfig.BASE_URL}`,
                method: 'POST',
                url: '/posts',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: null,
                auth: {
                    username: `${apiConfig.SECRET_KEY}`,
                    password: `${apiConfig.SECRET_SALT}`
                },
            }
        );
        return response;
    } catch ( error ) {
        console.log ( error as Error );
        return null;
    }

};

export {
    postNewBlog
};
