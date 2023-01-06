import { useState, useEffect } from "react"
import "./DeleteSensorPopOut.css"
import TableDeletePage from "./DeleteSensorPopOut/TableDataDeletePage"
import Loading from "../../shared/components/Loading";
import { useDeps } from "../../shared/DepContext";


const DeleteSensor = (props) => {

    const {getDataService} = useDeps();
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(15)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                const response = await getDataService.getSensorList(page)
                //setLastPage(response.lastPage)
                setData(response.dataSensors)
                setLastPage(response.lastPage)
            } catch (e) {
                alert(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        getData();
    }, [page]);

    const nextPage = () => {
        setPage(page + 1)
    };

    const previousPage = () => {
        setPage(page - 1)
    };

    return (
        <div className="big-frame">
            <div className="delete-title-box">Delete Sensor</div>
            <div className="table-sensor-list">
                <TableDeletePage data={data}/>
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
                <button className="cancel-button-style cancel-button-effect" onClick={props.closeTab}>Cancel</button>
            </div>
            {isLoading ? <Loading/> : <></>}
        </div>
    )
}

export default DeleteSensor