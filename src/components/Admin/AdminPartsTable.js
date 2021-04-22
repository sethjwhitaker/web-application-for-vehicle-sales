import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from "./admin.css"

export default function AdminPartsTable() {

    //api fetch call for vehicle list
    useEffect(async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
    }, [deleted, reload]); //only rerender when deleted changes
    //empty array for onMount only

    return (
        <div>Part Table</div>
    )
}
