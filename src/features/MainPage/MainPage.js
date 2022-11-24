import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import { useDeps } from "../../shared/DepContext";
import "react-datepicker/dist/react-datepicker.css";
import TableData from "../../shared/components/TableData";
import "./MainPage.css";

function MainPage() {

    const {getDataService} = useDeps();
    const [inputStartDate, setInputStartDate] = useState();
    const [inputEndDate, setInputEndDate] = useState();
    //const [sensorId, setSensorId] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [pressedButton, setPressedButton] = useState(false);
    const [showDatas, setShowDatas] = useState(false)

    const [result, setResult] = useState()

    let strStartDate = []
    let strEndDate = []

    useEffect(() => {
        setPressedButton(false)
        console.log(result)
      }, [pressedButton, result]);

    const handleStartDate = (date) => {
        setInputStartDate(date);
    };

    const handleEndDate = (date) => {
        setInputEndDate(date);
    };

    // const handleSensorId = (e) => {
    //     setSensorId(e.target.value)
    // };

    const handleOption = (e) => {
        setSelectedOption(e.target.value)
    };

    const convDate = (inputDate) => {
        let strInputDate = inputDate.toLocaleString('sv-SE');
        let convDate = []
        convDate = strInputDate.split(" ");
        convDate[1] = convDate[1].replace(/:/g, "-");
        return convDate;
    };

    const handleSubmit = async () => {

        // strStartDate = convDate(inputStartDate)
        // strEndDate = convDate(inputEndDate)

        try {
            strStartDate = convDate(inputStartDate)
            strEndDate = convDate(inputEndDate)
            const response = await getDataService.getData({
                site: selectedOption, 
                //id_sensor: sensorId, 
                sdate: strStartDate[0], 
                edate: strEndDate[0], 
                stime: strStartDate[1], 
                etime: strEndDate[1]
            })
            setPressedButton(true)
            setShowDatas(true)
            setResult(response.resultInternet);
        } catch (e) {
            alert(e.message)
        }
    };

    return (
        <div className="container-1">
            <div className="title">Budget PRTG</div>
            <div className="container-2">
                <div>   
                    <label>Start Date:
                        <DatePicker
                        selected={inputStartDate}
                        onChange={handleStartDate}
                        timeInputLabel="Time:"
                        showTimeInput
                        dateFormat="dd-MM-yyyy hh:mm aa"
                        isClearable
                        placeholderText="Input Start Date"
                        />
                    </label>
                </div>
                <div>
                    <label>End Date:
                        <DatePicker
                        selected={inputEndDate}
                        onChange={handleEndDate}
                        timeInputLabel="Time:"
                        showTimeInput
                        dateFormat="dd-MM-yyyy h:mm aa"
                        isClearable
                        placeholderText="Input End Date"
                        />
                    </label>
                </div>
                {/* <div>
                    <label>Sensor ID: <br/>
                        <input type="text" onChange={handleSensorId} placeholder="Input Sensor ID"/>
                    </label>
                </div> */}
                <div>
                    <label>Site: <br/>
                        <select id="site-names" value={selectedOption} onChange={handleOption}>
                            <option value="" disabled hidden>Choose here</option>
                            <option value="all-site">All Site</option>
                            <option value="BIB">BIB</option>
                            <option value="Berau">Berau</option>
                            <option value="MSIG">MSIG</option>
                            <option value="site-d">Site D</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button className="button" onClick={handleSubmit}>Get Sensor Data</button> 
                    <button className="button">Add/Delete Sensor</button>               
                </div>
            </div>
            {showDatas ? <div><TableData result={result}/></div> : <></>}
        </div>
    )
}

export default MainPage