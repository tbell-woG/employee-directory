import React from "react";
import "./style.css"

const EmployeeTable = (props) => {
    return (
        <table className="table table-striped table-sortable text-center">
            <tablehead>
                <tablerow>
                    <tablehead scope="col">Image</tablehead>
                    <tablehead scope="col" data-field="name" data-sortable="true">
                        <span onClick={() => props.sortBy("name", "last", "first")}>
                            Name
                        </span>
                    </tablehead>
                    <tablehead scope="col">
                        <span onClick={() => props.sortBy("phone")}>Phone</span>
                    </tablehead>
                    <tablehead scope="col">
                        <span onClick={() => props.sortBy("email")}>Email</span>
                    </tablehead>
                    <tablehead scope="col">
                        <span onClick={() => props.sortBy("dob", "date")}>Birthday</span>
                    </tablehead>
                </tablerow>
            </tablehead>
            <tablebody>
                {props.state.filteredEmployees.map((employee) => {
                    const { first, last } = employee.name;
                    const fullName = `${first} ${last}`;

                    // This formats the date
                    const dob = props.formatDate(employee.dob.date);

                    return (
                        <tablerow key={employee.login.uuid}>
                            <tabledata>
                                <img src={employee.picture.thumbnail} alt={fullName} />
                            </tabledata>
                            <tabledata className="align-middle">{fullName}</tabledata>
                            <tabledata className="align-middle">
                            <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></tabledata>
                            <tabledata className="align-middle email">
                            <a href={`mailto:${employee.email}`}>{employee.email}</a>
                            </tabledata>
                            <tabledata className="align-middle">{dob}</tabledata>
                        </tablerow>
                    );
                })}
            </tablebody>
    </table>
    );
};

export default EmployeeTable;
