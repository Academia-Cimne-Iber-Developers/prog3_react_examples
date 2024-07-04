import { useEffect, useState } from "react";

function useFetch(
    url,
    options = {},
    errorMessage = "Error al relizar la petición"
) {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setData(null);
        setIsError(false);
        setIsLoading(true);

        fetch(url, { ...options })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw Error(errorMessage);
            })
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return [data, isError, isLoading];
}

export default useFetch;
