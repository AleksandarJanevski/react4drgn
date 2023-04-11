import React from "react";
import PropTypes from 'prop-types'

export const Table = ({ array }) => {
    return (
        <div>
            <h2>Current Project Staff</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Section</th>
                        <th>Position</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Pick Up</th>
                        <th>Call Time</th>
                    </tr></thead>

                <tbody>
                    {array.map((staff, i) => {
                        return (
                            <tr key={i}>
                                <td>{staff.section}</td>
                                <td>{staff.position}</td>
                                <td>{staff.name}</td>
                                <td>{staff.contact}</td>
                                <td>{staff.pickUp}</td>
                                <td>{staff.callTime}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >

    )
}

Table.propTypes = {
    array: PropTypes.array
}