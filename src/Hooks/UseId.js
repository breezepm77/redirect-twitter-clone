import {useContext} from 'react';
import {Context} from '../Context/AuthId';

function userId(){
    let {local, setLocal} = useContext(Context)

    return (
        [local, setLocal]
    )
    

}

export default userId;