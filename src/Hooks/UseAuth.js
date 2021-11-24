import {useContext} from 'react';
import {Context} from '../Context/AuthContext';

function useAuth(){

    let {state, setState} = useContext(Context)

    return (
        [state, setState]
    )
    

}

export default useAuth;