import React from 'react'

export default function Testing2() {
    const url = `${window.location.protocol}//${window.location.hostname}/sales`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(0);
    const [reload, setReload] = useState(0);

    //api fetch call for part list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted, reload]); //only rerender when deleted changes
    //empty array for onMount only

    useEffect(async () => {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}/sale_items`);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted, reload]);
    
    return (
        <div>
            
        </div>
    )
}
