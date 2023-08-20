import React, { useState } from 'react'

const LeaderBoard = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost of Prize</th>
                        <th>Vote Count</th>
                        <th>Vote</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/Image/LeaderBoard/baby.jpg" alt="..." height={"40px"} width={"40px"} className='rounded-circle' />Kuldeep</td>
                        <td>2100.00/-</td>
                        <td>{count}</td>
                        <td><button className='btn btn-success' onClick={() => { setCount(count + 1) }}>Vote</button></td>
                    </tr>
                    <tr>
                        <td><img src="/Image/LeaderBoard/baby.jpg" alt="..." height={"40px"} width={"40px"} className='rounded-circle' />Manish</td>
                        <td>2100.00/-</td>
                        <td>15</td>
                        <td><button className='btn btn-success'>Vote</button></td>
                    </tr>
                </tbody>
            </table>
        </ >
    )
}

export default LeaderBoard