import "./TableData.css"

function TableDevices(props) {
    const data = props.result;

    const handleNotes = (e, index, data) => {
        data[index]["notes"] = e.target.value
        props.handlerNotes(data)
    };

    return (
        <table>
            <thead>
                <tr>
                    <th className="normal">Location</th>
                    <th className="normal">Type</th>
                    <th className="normal">Category</th>
                    <th className="normal">Usage</th>
                    <th className="normal">Condition</th>
                    <th className="normal">Notes</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        {Object.entries(item).slice(1).map((val) => {
                            if (val[0] !== "notes") {
                                return <td>{val[1]}</td>
                            } else {
                                return <td><textarea rows="5" cols="30" onChange={e => handleNotes(e, index, data)}></textarea></td>
                            }
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableDevices