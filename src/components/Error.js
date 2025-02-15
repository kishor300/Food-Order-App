import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
    console.log("err ==>", err);
    return (
        <>
            <h1>{err.status} : {err.statusText}</h1>
            <div>{err.data}</div>
        </>
    )
}

export default Error;