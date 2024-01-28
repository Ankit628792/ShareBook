import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeUser } from '../../actions';
import Loader from '../loader/Loader'

function Signout() {

    const dispatch = useDispatch()

    const history = useHistory();

    useEffect(() => {
        fetch(`/api/user/signout`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then((res) => {
            dispatch(removeUser())
            history.push('/signin', { replace: true })
            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <>
            <div className="flex items-center justify-center w-full min-h-screen">
                <Loader />
            </div>
        </>
    )
}

export default Signout
