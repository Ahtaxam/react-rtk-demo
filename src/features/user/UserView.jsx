import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

function UserView() {
    const users = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])  

  return (
    <div>
        <p>User List</p>
        {
            users.loading  && <p>Loading....</p>
        }
        {
           !users.users.loading && users.users.length > 0 && users.users.map(u => <p>{u}</p>)
        }

        
    </div>
  )
}

export default UserView