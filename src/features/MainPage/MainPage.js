import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import { useDeps } from "../../shared/DepContext";
import "react-datepicker/dist/react-datepicker.css";
import TableData from "../../shared/components/TableData";
import "./MainPage.css";
import TableDevices from "../../shared/components/TableDevices";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../shared/components/PDFGenerate";
import Loading from "../../shared/components/Loading";
import AddSensor from "./AddSensorPopOut";

function MainPage() {

    const {getDataService} = useDeps();
    const [inputStartDate, setInputStartDate] = useState();
    const [inputEndDate, setInputEndDate] = useState();
    //const [sensorId, setSensorId] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [pressedButton, setPressedButton] = useState(false);
    const [showDatas, setShowDatas] = useState(false)

    const [resultInter, setResultInter] = useState() //[{ id: "", site: "", link: "", average_up: 0, uti_traffic_in: 0, uti_traffic_out: 0, traffic_in: 0, traffic_out: 0, notes: "", bandwidth_cap: 0 }])
    const [resultIntra, setResultIntra] = useState()
    const [resultDevice, setResultDevice] = useState()
    const [timeType, setTimeType] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isAddSensor, setIsAddSensor] = useState(false)
    //const [dateReport, setDateReport] = useState('')

    let strStartDate = []
    let strEndDate = []

    useEffect(() => {
        setPressedButton(false)
        // if (inputStartDate <= inputEndDate) {
        //     console.log("BENAAAAAAAAAAAAAAAAAAARRR")
        // } else {
        //     console.log("SALAAAAAAAAAAAAAAAAAAAHHH")
        // }
      }, [pressedButton, resultInter, resultIntra, resultDevice, isLoading, isAddSensor]);

    const handleStartDate = (date) => {
        setInputStartDate(date);
    };

    const handleEndDate = (date) => {
        setInputEndDate(date);
    };

    // const handleNotes = (e, index, arrMap) => {
    //     arrMap[index]["notes"] = e.target.value
    // };

    const handleInterNotes = (data) => {
        setResultInter([...data]);
    };

    const handleIntraNotes = (data) => {
        setResultIntra([...data]);
    };

    const handleDeviceNotes = (data) => {
        setResultDevice([...data]);
    }

    // const handleSensorId = (e) => {
    //     setSensorId(e.target.value)
    // };

    const handleOption = (e) => {
        setSelectedOption(e.target.value)
    };

    const handleAddButton = () => {
        setIsAddSensor(true)
    }

    const handleCloseAddSensor = () => {
        setIsAddSensor(false)
    }

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

        var status = false
        var today = new Date()
        var diff = Math.abs(inputStartDate.getTime() - inputEndDate.getTime()) / 3600000;
        var hours = inputStartDate.getHours()
        let daytype = ''
        
        if (inputStartDate < today && inputStartDate != null) {
            if (inputEndDate < today && inputEndDate != null) {
                if (inputStartDate < inputEndDate && diff >= 1) {
                    if (selectedOption !== ""){
                        status = true
                    }
                }
            }
        }

        if (hours < 12) {
            daytype = "Morning"
        } else if (hours >= 12) {
            daytype = "Evening"
        }

        if (status) {
            try {
                setIsLoading(true)
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
                setResultInter(response.resultInternet)
                setResultIntra(response.resultIntranet)
                setResultDevice(response.resultCPU)
                setTimeType(daytype)
            } catch (e) {
                alert(e.message)
            } finally {
                setIsLoading(false)
            }
        } else {
            alert("input time wrong, input can't be empty, or time input must be 1 hour difference minimal")
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
                            <option value="KIM">KIM</option>
                            <option value="MAL">MAL</option>
                            <option value="BSL">BSL</option>
                            <option value="SML">SML</option>
                            <option value="MSIG">MSIG</option>
                            <option value="BCHO">BCHO</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button className="button" onClick={handleSubmit}>Get Sensor Data</button> 
                    {showDatas ? (
                        <PDFDownloadLink document={<MyDocument date={inputStartDate.toLocaleDateString("en-IN")} time={timeType} dataInter={resultInter} dataIntra={resultIntra} dataDevices={resultDevice} />} fileName={"Laporan_" + inputStartDate.toLocaleDateString("es-CL") + "_" + timeType}>
                            {({loading}) => (loading ? <></> : <button className="button">Download Report</button> )}
                        </PDFDownloadLink>
                    ) : <></>}
                    {/* <button className="button">Add/Delete Sensor</button>                */}
                </div>
                <div>
                    {/* {showDatas ? (
                        <PDFDownloadLink document={<MyDocument date={"09-12-2022"} time={'Morning'} />} fileName="laporan">
                            {({loading}) => (loading ? <></> : <button className="button">Download Report</button> )}
                        </PDFDownloadLink>
                    ) : <></>} */}
                    <button className="button" onClick={handleAddButton}>Add Sensor</button>
                    <button className="button">Delete Sensor</button>
                </div>
            </div>
            {/* {showDatas ? (
                <div>
                    <div>
                        Internet
                        <TableData handlerNotes={handleInterNotes} result={resultInter}/>
                    </div>
                    <div>
                        Intranet
                        <TableData handlerNotes={handleIntraNotes} result={resultIntra}/>
                    </div>
                </div>
            ) : <></>} */}
            {showDatas ? resultInter ? (
                <div>
                    <div className="text-style">Internet</div>
                    <TableData handlerNotes={handleInterNotes} result={resultInter}/>
                </div>
            ) : <></>  : <></> }
            {showDatas ? resultIntra ? (
                <div>
                    <div className="text-style">Intranet</div>
                    <TableData handlerNotes={handleIntraNotes} result={resultIntra}/>
                </div>
            ) : <></>  : <></> }
            {showDatas ? resultDevice ? (
                <div>
                    <div className="text-style">Devices</div>
                    <TableDevices handlerNotes={handleDeviceNotes} result={resultDevice}/>
                </div>
            ) : <></> : <></> }
            {isLoading ? <Loading/> : <></>}
            {isAddSensor ? <AddSensor closeTab={handleCloseAddSensor}/> : <></>}
        </div>
    )
}

export default MainPage