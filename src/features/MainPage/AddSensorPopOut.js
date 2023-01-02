import "./AddSensorPopOut.css";

const AddSensor = () => {

    return (
        <div className="container">
            <div style={{fontFamily: 'Times New Roman',fontWeight:'bold', fontSize: '20px'}}>Add Sensor</div>
            <div className="content-container">
                <div className="text-style">Site</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="text" />
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">Link/Device Name</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="text" />
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">ID Sensor</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="text" />
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">Type</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <select id="site-names" value={""}>
                        <option value="" disabled hidden>Choose here</option>
                        <option value="internet">Internet</option>
                        <option value="intranet">Intranet</option>
                        <option value="CPU">CPU</option>
                        <option value="Memory">Memory</option>
                    </select>
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">Bandwidth (MBps)</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="number"/> 
                </div>
            </div>
            <div className="button-container">
                <div>12</div>
                <div>13</div>
            </div>
        </div>
    )
}

export default AddSensor