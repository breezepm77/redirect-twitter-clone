import {useContext} from 'react';
import {Context} from '../Context/AuthUser';

function useUser(){
    let {user, setUser} = useContext(Context)

    return (
        [user, setUser]
    )
    

}

export default useUser;