import {useState} from "react";
import "./TableData.css"

function TableData() {
    const initState = [
        { id: 123, a: "Bread", b: 50, c: 12, d: 15, e: 25, f: 45, g: "kucing", h: 85 },
        { id: 222, a: "Butter", b: 47, c: 25, d: 27, e: 33, f: 51, g: "ayam", h: 75 },
        { id: 212, a: "Jam", b: 58, c: 83, d: 12, e: 90, f: 78, g: "bebek", h: 55 },
      ];
      const [state, setState] = useState(initState);
    
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
                    <th rowSpan={2} className="row-merge">Bandwidth capacity</th>
                </tr>
                <tr>
                    <th>download</th>
                    <th>upload</th>
                    <th>download</th>
                    <th>upload</th>
                </tr>
            </thead>
            <tbody>
                {state.map((item) => (
                    <tr key={item.id}>
                        {Object.values(item).map((val) => (
                            <td>{val}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
      );
}

export default TableData