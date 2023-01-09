//import { useEffect } from "react";
import "./TableData.css"

function TableData(props) {
    // const initState = [
    //     { id: 123, a: "Bread", b: 50, c: 12, d: 15, e: 25, f: 45, g: "kucing", h: 85 },
    //     { id: 222, a: "Butter", b: 47, c: 25, d: 27, e: 33, f: 51, g: "ayam", h: 75 },
    //     { id: 212, a: "Jam", b: 58, c: 83, d: 12, e: 90, f: 78, g: "bebek", h: 55 },
    //   ];
      const data = props.result;

    //   useEffect(() => {
    //     console.log(data)
    //   }, [props.result]);

      const handleNotes = (e, index, data) => {
            data[index]["notes"] = e.target.value
            props.handlerNotes(data)
        };
    
      return (
        <table>
            <thead>
                <tr>
                    <th rowSpan={2} className="row-merge">Site</th>
                    <th rowSpan={2} className="row-merge">Link</th>
                    <th rowSpan={2} className="row-merge">SLA</th>
                    <th colSpan={2} className="col-merge">Utilization</th>
                    <th colSpan={2} className="col-merge">Traffic Average</th>
                    <th rowSpan={2} className="row-merge">Notes</th>
                    <th rowSpan={2} className="row-merge">Bandwidth Capacity</th>
                </tr>
                <tr>
                    <th>Download</th>
                    <th>Upload</th>
                    <th>Download</th>
                    <th>Upload</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item["Id"]}>
                        {Object.entries(item).slice(1).map((val, ind) => {
                            let unit = ""
                            if (ind > 1 && ind <= 4) {
                                unit = " %"
                            } else if (ind > 4) {
                                unit = " MBps"
                            }

                            if (val[0] !== "notes") {
                                return <td>{val[1] + unit}</td>
                            } else {
                                return <td><textarea placeholder={val[1]} rows="5" cols="30" onChange={e => handleNotes(e, index, data)}></textarea></td>
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
      );
}

export default TableData