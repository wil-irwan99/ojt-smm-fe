import { useState } from "react"
import "./DeleteSensorPopOut.css"
import TableDeletePage from "./DeleteSensorPopOut/TableDataDeletePage"


const DeleteSensor = (props) => {

    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(15)


    const nextPage = () => {
        setPage(page + 1)
    };

    const previousPage = () => {
        setPage(page - 1)
    };

    const getLastPage = () => {

    }

    return (
        <div className="big-frame">
            <div className="delete-title-box">Delete Sensor</div>
            <div className="table-sensor-list">
                <TableDeletePage></TableDeletePage>
            </div>
            <div className="paging-container">
                <div className="paging-sub-container">
                    {page !== 1 ? <button onClick={previousPage}>{"<"}</button>  : <></>}
                </div>
                <div className="paging-sub-container">
                    {page}
                </div>
                <div className="paging-sub-container">
                    {page !== lastPage ? <button onClick={nextPage}>{">"}</button>  : <></>}
                </div>
            </div>
            <div className="cancel-button-container">
                <button className="cancel-button-style cancel-button-effect">Cancel</button>
            </div>
        </div>
    )
}

export default DeleteSensor