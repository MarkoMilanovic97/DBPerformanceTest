import React from "react";
import { withRouter } from "react-router-dom";

function DeleteResults(){
    return (
        <div className="container">
            <h1 className="mt-5 mb-3">Delete results - Single table/collection</h1>
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
                        <th scope="row">Delete - 1.000</th>
                        <td><p className="lead" id="SqlSingleDeleteOneThousandTime">{localStorage.lsSqlSingleDeleteOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleDeleteOneThousandTime">{localStorage.lsMongoSingleDeleteOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 10.000</th>
                        <td><p className="lead" id="SqlSingleDeleteTenThousandTime">{localStorage.lsSqlSingleDeleteTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleDeleteTenThousandTime">{localStorage.lsMongoSingleDeleteTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 100.000</th>
                        <td><p className="lead" id="SqlSingleDeleteOneHundredThousandTime">{localStorage.lsSqlSingleDeleteOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleDeleteOneHundredThousandTime">{localStorage.lsMongoSingleDeleteOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete 1.000.000</th>
                        <td><p className="lead" id="SqlSingleDeleteOneMilionTime">{localStorage.lsSqlSingleDeleteOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleDeleteOneMilionTime">{localStorage.lsMongoSingleDeleteOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Delete results - Weak relation</h1>
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
                        <th scope="row">Delete - 1.000</th>
                        <td><p className="lead" id="lsSqlWeakDeleteOneThousandTime">{localStorage.lsSqlWeakDeleteOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakDeleteOneThousandTime">{localStorage.lsMongoWeakDeleteOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 10.000</th>
                        <td><p className="lead" id="SqlWeakDeleteTenThousandTime">{localStorage.lsSqlWeakDeleteTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakDeleteTenThousandTime">{localStorage.lsMongoWeakDeleteTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 100.000</th>
                        <td><p className="lead" id="SqlWeakDeleteOneHundredThousandTime">{localStorage.lsSqlWeakDeleteOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakDeleteOneHundredThousandTime">{localStorage.lsMongoWeakDeleteOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete 1.000.000</th>
                        <td><p className="lead" id="SqlWeakDeleteOneMilionTime">{localStorage.lsSqlWeakDeleteOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakDeleteOneMilionTime">{localStorage.lsMongoWeakDeleteOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Delete results - Ternary relation</h1>
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
                        <th scope="row">Delete - 1.000</th>
                        <td><p className="lead" id="SqlTernaryDeleteOneThousandTime">{localStorage.lsSqlTernaryDeleteOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryDeleteOneThousandTime">{localStorage.lsMongoTernaryDeleteOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 10.000</th>
                        <td><p className="lead" id="SqlTernaryDeleteTenThousandTime">{localStorage.lsSqlTernaryDeleteTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryDeleteTenThousandTime">{localStorage.lsMongoTernaryDeleteTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 100.000</th>
                        <td><p className="lead" id="SqlTernaryDeleteOneHundredThousandTime">{localStorage.lsSqlTernaryDeleteOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryDeleteOneHundredThousandTime">{localStorage.lsMongoTernaryDeleteOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete 1.000.000</th>
                        <td><p className="lead" id="SqlTernaryDeleteOneMilionTime">{localStorage.lsSqlTernaryDeleteOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryDeleteOneMilionTime">{localStorage.lsMongoTernaryDeleteOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Delete results - Single table/collection with index</h1>
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
                        <th scope="row">Delete - 1.000</th>
                        <td><p className="lead" id="SqlIndexDeleteOneThousandTime">{localStorage.lsSqlIndexDeleteOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexDeleteOneThousandTime">{localStorage.lsMongoIndexDeleteOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 10.000</th>
                        <td><p className="lead" id="SqlIndexDeleteTenThousandTime">{localStorage.lsSqlIndexDeleteTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexDeleteTenThousandTime">{localStorage.lsMongoIndexDeleteTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete - 100.000</th>
                        <td><p className="lead" id="SqlIndexDeleteOneHundredThousandTime">{localStorage.lsSqlIndexDeleteOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexDeleteOneHundredThousandTime">{localStorage.lsMongoIndexDeleteOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Delete 1.000.000</th>
                        <td><p className="lead" id="SqlIndexDeleteOneMilionTime">{localStorage.lsSqlIndexDeleteOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexDeleteOneMilionTime">{localStorage.lsMongoIndexDeleteOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(DeleteResults);