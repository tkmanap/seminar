import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortConst = new AbortController()

        fetch(url, {signal: abortConst.signal})
            .then(res => {
                if (!res.ok) throw Error('Failed to fetch the data')
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                //console.log(err.message);
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })

        return () => {
            abortConst.abort()
        }
    }, [url])

    return {data, isPending, error}
}

export default useFetch