import React from "react";
import { withRouter } from "react-router-dom";

function AddResults(){
    return (
        <div className="container">
            <h1 className="mt-5 mb-3">Add results - Single table/collection</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">MSSQL</th>
                        <th scope="col">MongoDB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Add - 1.000</th>
                        <td><p className="lead" id="SqlSingleAddOneThousandTime">{localStorage.lsSqlSingleAddOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleAddOneThousandTime">{localStorage.lsMongoSingleAddOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 10.000</th>
                        <td><p className="lead" id="SqlSingleAddTenThousandTime">{localStorage.lsSqlSingleAddTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleAddTenThousandTime">{localStorage.lsMongoSingleAddTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 100.000</th>
                        <td><p className="lead" id="SqlSingleAddOneHundredThousandTime">{localStorage.lsSqlSingleAddOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleAddOneHundredThousandTime">{localStorage.lsMongoSingleAddOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add 1.000.000</th>
                        <td><p className="lead" id="SqlSingleAddOneMilionTime">{localStorage.lsSqlSingleAddOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleAddOneMilionTime">{localStorage.lsMongoSingleAddOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Add results - Weak relation</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">MSSQL</th>
                        <th scope="col">MongoDB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Add - 1.000</th>
                        <td><p className="lead" id="SqlWeakAddOneThousandTime">{localStorage.lsSqlWeakAddOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakAddOneThousandTime">{localStorage.lsMongoWeakAddOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 10.000</th>
                        <td><p className="lead" id="SqlWeakAddTenThousandTime">{localStorage.lsSqlWeakAddTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakAddTenThousandTime">{localStorage.lsMongoWeakAddTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 100.000</th>
                        <td><p className="lead" id="SqlWeakAddOneHundredThousandTime">{localStorage.lsSqlWeakAddOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakAddOneHundredThousandTime">{localStorage.lsMongoWeakAddOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add 1.000.000</th>
                        <td><p className="lead" id="SqlWeakAddOneMilionTime">{localStorage.lsSqlWeakAddOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakAddOneMilionTime">{localStorage.lsMongoWeakAddOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Add results - Ternary relation</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">MSSQL</th>
                        <th scope="col">MongoDB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Add - 1.000</th>
                        <td><p className="lead" id="SqlTernaryAddOneThousandTime">{localStorage.lsSqlTernaryAddOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryAddOneThousandTime">{localStorage.lsMongoTernaryAddOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 10.000</th>
                        <td><p className="lead" id="SqlTernaryAddTenThousandTime">{localStorage.lsSqlTernaryAddTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryAddTenThousandTime">{localStorage.lsMongoTernaryAddTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 100.000</th>
                        <td><p className="lead" id="SqlTernaryAddOneHundredThousandTime">{localStorage.lsSqlTernaryAddOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryAddOneHundredThousandTime">{localStorage.lsMongoTernaryAddOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add 1.000.000</th>
                        <td><p className="lead" id="SqlTernaryAddOneMilionTime">{localStorage.lsSqlTernaryAddOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryAddOneMilionTime">{localStorage.lsMongoTernaryAddOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Add results - Single table/collection with index</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">MSSQL</th>
                        <th scope="col">MongoDB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Add - 1.000</th>
                        <td><p className="lead" id="SqlIndexAddOneThousandTime">{localStorage.lsSqlIndexAddOneThousandTime} seconds</p></td>
                        <td><p className="lead">{localStorage.lsMongoIndexAddOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 10.000</th>
                        <td><p className="lead" id="SqlIndexAddTenThousandTime">{localStorage.lsSqlIndexAddTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexAddTenThousandTime">{localStorage.lsMongoIndexAddTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add - 100.000</th>
                        <td><p className="lead" id="SqlIndexAddOneHundredThousandTime">{localStorage.lsSqlIndexAddOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexAddOneHundredThousandTime">{localStorage.lsMongoIndexAddOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Add 1.000.000</th>
                        <td><p className="lead" id="SqlIndexAddOneMilionTime">{localStorage.lsSqlIndexAddOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="lsMongoIndexAddOneMilionTime">{localStorage.lsMongoIndexAddOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(AddResults);