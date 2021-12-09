const fetchManage = ( endpoint, body, method = 'GET' ) => {
    if ( method === 'GET' ) {
        return fetch( endpoint );
    } else {
        return fetch( endpoint, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        });
    }
        

}

export {
    fetchManage
}