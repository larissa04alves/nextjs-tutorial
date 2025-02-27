'use client' //todo arquivo de error tem que ter use client

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const error = (error: any) => {
    console.log(error);
    return <div>{error.error.message}</div>
    // <div>There was an error...</div>
}

export default error    