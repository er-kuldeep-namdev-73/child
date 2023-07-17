import React from 'react'

const Table = () => {
  return (
    <div>
        <table className='table table-primary table-striped'>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Prize</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bicycle</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table