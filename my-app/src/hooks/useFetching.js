import { useState } from "react"

export  const useFetching = (callback) => {
    const [isLoading, setIzloading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIzloading(true)
            await callback();
        } catch (e) {
            setError(e.message)
        } finally {
            setIzloading(false);
        }
    }

    return [fetching, isLoading, error]

}