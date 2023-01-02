import "./AddSensorPopOut.css";
import { useDeps } from "../../shared/DepContext";
import { useState } from "react";

const AddSensor = (props) => {

    const {getDataService} = useDeps();
    const [site, setSite] = useState('');
    const [link, setLink] = useState('');
    const [id, setId] = useState('');
    const [type, setType] = useState('');
    const [bandwidth, setBandwidth] = useState(0);
    const [result, setResult] = useState('');

    // useEffect(() => {
    // }, [movies]);

    const handleSite = (e) => {
        setSite(e.target.value)
    };

    const handleLink = (e) => {
        setLink(e.target.value)
    };

    const handleId = (e) => {
        setId(e.target.value)
    };

    const handleType = (e) => {
        setType(e.target.value)
    };

    const handleBandwidth = (e) => {
        setBandwidth(e.target.value)
    };

    const handleSubmit = async () => {

        var status = false

        if (site !== '') {
            if (link !== '') {
                if (id !== '') {
                    if (type !== ''){
                        if (bandwidth !== null){
                            status = true
                        }
                    }
                }
            }
        }

        if (status) {
            console.log(site, link, id, type, bandwidth)
            try {
                const response = await getDataService.addSensor({
                    site: site, 
                    link: link, 
                    id: id, 
                    type: type, 
                    bandwidth: 0, //problem di variable angka javascript
                })
                setResult(response.message)
            } catch (e) {
                alert(e.message)
            } finally {
                // var answer = window.confirm(result);
                // if (answer) {
                //     props.closeTab
                // }
                // else {
                //     props.closeTab
                // }
                alert(result)
            }
        } else {
            alert("input can't be empty")
        }
    };


    return (
        <div className="container">
            <div style={{fontFamily: 'Times New Roman',fontWeight:'bold', fontSize: '20px'}}>Add Sensor</div>
            <div className="content-container">
                <div className="text-style">Site</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <select id="site-names" value={site} onChange={handleSite}>
                        <option value="" disabled hidden>Choose here</option>
                        <option value="BIB">BIB</option>
                        <option value="KIM">KIM</option>
                        <option value="MAL">MAL</option>
                        <option value="BSL">BSL</option>
                        <option value="SML">SML</option>
                        <option value="MSIG">MSIG</option>
                        <option value="BCHO">BCHO</option>
                    </select>
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">Link/Device Name</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="text" value={link} onChange={handleLink}/>
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">ID Sensor</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <input type="text" value={id} onChange={handleId}/>
                </div>
            </div>
            <div className="content-container">
                <div className="text-style">Type</div>
                <div className="symbol-style">:</div>
                <div className="input-style">
                    <select id="types" value={type} onChange={handleType}>
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
                    <input type="number" value={bandwidth} onChange={handleBandwidth}/> 
                </div>
            </div>
            <div className="button-container">
                <button className="button-add button-effect" onClick={handleSubmit}>Add</button>
                <button className="button-cancel button-effect" onClick={props.closeTab}>Cancel</button>
            </div>
        </div>
    )
}

export default AddSensor