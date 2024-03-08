export default function Comment({prop = {}}) {
    return (
        <div>
            <table>
                <tr>
                    <th>Username</th>
                    <th>Feedback</th>
                    <th>Rating</th>
                </tr>
                {prop.map((data)=>{
                    return(
                        <tr>
                            <td>{data.username}</td>
                            <td>{data.feedback}</td>
                            <td>{data.rating}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}