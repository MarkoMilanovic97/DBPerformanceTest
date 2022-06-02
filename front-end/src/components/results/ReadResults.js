import React from "react";
import { withRouter } from "react-router-dom";

function ReadResults(){
    return (
        <div className="container">
            <h1 className="mt-5 mb-3">Read results - Single table/collection</h1>
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
                        <th scope="row">Read - 1.000</th>
                        <td><p className="lead" id="SqlSingleReadOneThousandTime">{localStorage.lsSqlSingleReadOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleReadOneThousandTime">{localStorage.lsMongoSingleReadOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 10.000</th>
                        <td><p className="lead" id="SqlSingleReadTenThousandTime">{localStorage.lsSqlSingleReadTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleReadTenThousandTime">{localStorage.lsMongoSingleReadTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 100.000</th>
                        <td><p className="lead" id="SqlSingleReadOneHundredThousandTime">{localStorage.lsSqlSingleReadOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleReadOneHundredThousandTime">{localStorage.lsMongoSingleReadOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read 1.000.000</th>
                        <td><p className="lead" id="SqlSingleReadOneMilionTime">{localStorage.lsSqlSingleReadOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoSingleReadOneMilionTime">{localStorage.lsMongoSingleReadOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Read results - Weak relation</h1>
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
                        <th scope="row">Read - 1.000</th>
                        <td><p className="lead" id="SqlWeakReadOneThousandTime">{localStorage.lsSqlWeakReadOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakReadOneThousandTime">{localStorage.lsMongoWeakReadOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 10.000</th>
                        <td><p className="lead" id="SqlWeakReadTenThousandTime">{localStorage.lsSqlWeakReadTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakReadTenThousandTime">{localStorage.lsMongoWeakReadTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 100.000</th>
                        <td><p className="lead" id="SqlWeakReadOneHundredThousandTime">{localStorage.lsSqlWeakReadOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakReadOneHundredThousandTime">{localStorage.lsMongoWeakReadOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read 1.000.000</th>
                        <td><p className="lead" id="SqlWeakReadOneMilionTime">{localStorage.lsSqlWeakReadOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoWeakReadOneMilionTime">{localStorage.lsMongoWeakReadOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Read results - Ternary relation</h1>
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
                        <th scope="row">Read - 1.000</th>
                        <td><p className="lead" id="SqlTernaryReadOneThousandTime">{localStorage.lsSqlTernaryReadOneThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryReadOneThousandTime">{localStorage.lsMongoTernaryReadOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 10.000</th>
                        <td><p className="lead" id="SqlTernaryReadTenThousandTime">{localStorage.lsSqlTernaryReadTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryReadTenThousandTime">{localStorage.lsMongoTernaryReadTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 100.000</th>
                        <td><p className="lead" id="SqlTernaryReadOneHundredThousandTime">{localStorage.lsSqlTernaryReadOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryReadOneHundredThousandTime">{localStorage.lsMongoTernaryReadOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read 1.000.000</th>
                        <td><p className="lead" id="SqlTernaryReadOneMilionTime">{localStorage.lsSqlTernaryReadOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoTernaryReadOneMilionTime">{localStorage.lsMongoTernaryReadOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>

            <h1 className="mt-5 mb-3">Read results - Single table/collection with index</h1>
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
                        <th scope="row">Read - 1.000</th>
                        <td><p className="lead" id="SqlIndexReadOneThousandTime">{localStorage.lsSqlIndexReadOneThousandTime} seconds</p></td>
                        <td><p className="lead">{localStorage.lsMongoIndexReadOneThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 10.000</th>
                        <td><p className="lead" id="SqlIndexReadTenThousandTime">{localStorage.lsSqlIndexReadTenThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexReadTenThousandTime">{localStorage.lsMongoIndexReadTenThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read - 100.000</th>
                        <td><p className="lead" id="SqlIndexReadOneHundredThousandTime">{localStorage.lsSqlIndexReadOneHundredThousandTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexReadOneHundredThousandTime">{localStorage.lsMongoIndexReadOneHundredThousandTime} seconds</p></td>
                    </tr>
                    <tr>
                        <th scope="row">Read 1.000.000</th>
                        <td><p className="lead" id="SqlIndexReadOneMilionTime">{localStorage.lsSqlIndexReadOneMilionTime} seconds</p></td>
                        <td><p className="lead" id="MongoIndexReadOneMilionTime">{localStorage.lsMongoIndexReadOneMilionTime} seconds</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default withRouter(ReadResults);