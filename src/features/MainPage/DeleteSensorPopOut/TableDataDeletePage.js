import "./TableDataDeletePage.css"

function TableDeletePage(props) {

    const data = props.data

    return (
        <table className="table-style">
            <thead className="th-style-bg">
                <tr>
                    <th className="th-style">Site</th>
                    <th className="th-style">Link/Device</th>
                    <th className="th-style">ID</th>
                    <th className="th-style">Type</th>
                    <th className="th-style"/>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    let style = ""
                    
                    if (index % 2 !== 0) {
                        style = "tr-style-bg"
                    }

                    return (
                    <tr className={style} key={item["Id"]}>
                        {Object.entries(item).slice(0, 4).map((val) => {
                            return <td className="td-style">{val[1]}</td>
                        })}
                        <td className="td-style">
                            <button className="button-delete button-delete-effect" onClick={() => props.handleDelete(item["Id"])}>Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default TableDeletePage