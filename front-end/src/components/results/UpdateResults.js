import React from "react";
import { withRouter } from "react-router-dom";

function UpdateResults() {
    return (
        <div className="container">
            <h1 className="mt-5 mb-3">Update results - Single table/collection</h1>
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
                        <th scope="row">Update - 1.000</th>
                        <td><p className="lead" id="SqlSingleUpdateOneThousandTime">{localStorage.lsSqlSingleUpdateOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleUpdateOneThousandTime">{localStorage.lsMongoSingleUpdateOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 10.000</th>
                        <td><p className="lead" id="SqlSingleUpdateTenThousandTime">{localStorage.lsSqlSingleUpdateTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleUpdateTenThousandTime">{localStorage.lsMongoSingleUpdateTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 100.000</th>
                        <td><p className="lead" id="SqlSingleUpdateOneHundredThousandTime">{localStorage.lsSqlSingleUpdateOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleUpdateOneHundredThousandTime">{localStorage.lsMongoSingleUpdateOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update 1.000.000</th>
                        <td><p className="lead" id="SqlSingleUpdateOneMilionTime">{localStorage.lsSqlSingleUpdateOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleUpdateOneMilionTime">{localStorage.lsMongoSingleUpdateOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Update results - Weak relation</h1>
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
                        <th scope="row">Update - 1.000</th>
                        <td><p className="lead" id="SqlWeakUpdateOneThousandTime">{localStorage.lsSqlWeakUpdateOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakUpdateOneThousandTime">{localStorage.lsMongoWeakUpdateOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 10.000</th>
                        <td><p className="lead" id="SqlWeakUpdateTenThousandTime">{localStorage.lsSqlWeakUpdateTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakUpdateTenThousandTime">{localStorage.lsMongoWeakUpdateTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 100.000</th>
                        <td><p className="lead" id="SqlWeakUpdateOneHundredThousandTime">{localStorage.lsSqlWeakUpdateOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakUpdateOneHundredThousandTime">{localStorage.lsMongoWeakUpdateOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update 1.000.000</th>
                        <td><p className="lead" id="SqlWeakUpdateOneMilionTime">{localStorage.lsSqlWeakUpdateOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakUpdateOneMilionTime">{localStorage.lsMongoWeakUpdateOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Update results - Ternary relation</h1>
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
                        <th scope="row">Update - 1.000</th>
                        <td><p className="lead" id="SqlTernaryUpdateOneThousandTime">{localStorage.lsSqlTernaryUpdateOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryUpdateOneThousandTime">{localStorage.lsMongoTernaryUpdateOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 10.000</th>
                        <td><p className="lead" id="SqlTernaryUpdateTenThousandTime">{localStorage.lsSqlTernaryUpdateTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryUpdateTenThousandTime">{localStorage.lsMongoTernaryUpdateTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 100.000</th>
                        <td><p className="lead" id="SqlTernaryUpdateOneHundredThousandTime">{localStorage.lsSqlTernaryUpdateOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryUpdateOneHundredThousandTime">{localStorage.lsMongoTernaryUpdateOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update 1.000.000</th>
                        <td><p className="lead" id="SqlTernaryUpdateOneMilionTime">{localStorage.lsSqlTernaryUpdateOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryUpdateOneMilionTime">{localStorage.lsMongoTernaryUpdateOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Update results - Single table/relation with index</h1>
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
                        <th scope="row">Update - 1.000</th>
                        <td><p className="lead" id="SqlIndexUpdateOneThousandTime">{localStorage.lsSqlIndexUpdateOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexUpdateOneThousandTime">{localStorage.lsMongoIndexUpdateOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 10.000</th>
                        <td><p className="lead" id="SqlIndexUpdateTenThousandTime">{localStorage.lsSqlIndexUpdateTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexUpdateTenThousandTime">{localStorage.lsMongoIndexUpdateTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update - 100.000</th>
                        <td><p className="lead" id="SqlIndexUpdateOneHundredThousandTime">{localStorage.lsSqlIndexUpdateOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexUpdateOneHundredThousandTime">{localStorage.lsMongoIndexUpdateOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Update 1.000.000</th>
                        <td><p className="lead" id="SqlIndexUpdateOneMilionTime">{localStorage.lsSqlIndexUpdateOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexUpdateOneMilionTime">{localStorage.lsMongoIndexUpdateOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(UpdateResults);