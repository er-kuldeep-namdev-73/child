import React from 'react'
import LeaderBoard from './LeaderBoard'

const Table = () => {
    return (
        <div className='row'>
            <div className='col-sm-6'>
                <table className='table table-primary table-striped'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Prize</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Kuldeep</td>
                            <td>Bicycle</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-sm-6'>
                <LeaderBoard />
            </div>
        </div>
    )
}

export default Table