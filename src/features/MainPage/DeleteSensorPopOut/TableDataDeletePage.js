import "./TableDataDeletePage.css"

function TableDeletePage(props) {

    const data = [
        { id: 1, a: "Bread", b: 50, c: 12, d: 15, e: 25},
        { id: 2, a: "Butter", b: 47, c: 25, d: 27, e: 33},
        { id: 3, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 4, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 5, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 6, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 7, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 8, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 9, a: "Jam", b: 58, c: 83, d: 12, e: 90},
        { id: 10, a: "Jam", b: 58, c: 83, d: 12, e: 90},
    ]

    const handleDelete = (id) => {

    };

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
                    <tr className={style} key={item.id}>
                        {Object.entries(item).slice(0, 4).map((val) => {
                            return <td className="td-style">{val[1]}</td>
                        })}
                        <td className="td-style">
                            <button className="button-delete button-delete-effect" onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default TableDeletePage