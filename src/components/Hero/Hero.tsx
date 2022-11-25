import { useEffect, useState } from "react";
import ISettings from "../../models/ISettings";
import { getAllSettings } from "../../services/external/getSettings";
import Loading from "../Loading/Loading";

const Hero = () => {

    const [ data, setData ] = useState<ISettings | null>( null );

    useEffect(
        () => {
          const getData = async () => {
            const fetchedData = await getAllSettings();
            setData( fetchedData );
          }  
          getData();
        },
        []
    );

    return ( 

        <>
            {
                data ? (
                    <div>
                        {
                            JSON.stringify( data )
                        }
                    </div>
                ) : (<Loading/>)
            }
        </>

     );
}
 
export default Hero;