import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { NotificationManager } from 'react-notifications';

function MssqlRead() {
    var [loading, setLoading] = useState(false);

    var [sqlSingleReadOneThousandTime, setSqlSingleReadOneThousandTime] = useState(0);
    var [sqlSingleReadTenThousandTime, setSqlSingleReadTenThousandTime] = useState(0);
    var [sqlSingleReadOneHundredThousandTime, setSqlSingleReadOneHundredThousandTime] = useState(0);
    var [sqlSingleReadOneMilionTime, setSqlSingleReadOneMilionTime] = useState(0);

    //WEAK
    var [sqlWeakReadOneThousandTime, setSqlWeakReadOneThousandTime] = useState(0);
    var [sqlWeakReadTenThousandTime, setSqlWeakReadTenThousandTime] = useState(0);
    var [sqlWeakReadOneHundredThousandTime, setSqlWeakReadOneHundredThousandTime] = useState(0);
    var [sqlWeakReadOneMilionTime, setSqlWeakReadOneMilionTime] = useState(0);

    //TERNARY
    var [sqlTernaryReadOneThousandTime, setSqlTernaryReadOneThousandTime] = useState(0);
    var [sqlTernaryReadTenThousandTime, setSqlTernaryReadTenThousandTime] = useState(0);
    var [sqlTernaryReadOneHundredThousandTime, setSqlTernaryReadOneHundredThousandTime] = useState(0);
    var [sqlTernaryReadOneMilionTime, setSqlTernaryReadOneMilionTime] = useState(0);

     //TERNARY
     var [sqlIndexReadOneThousandTime, setSqlIndexReadOneThousandTime] = useState(0);
     var [sqlIndexReadTenThousandTime, setSqlIndexReadTenThousandTime] = useState(0);
     var [sqlIndexReadOneHundredThousandTime, setSqlIndexReadOneHundredThousandTime] = useState(0);
     var [sqlIndexReadOneMilionTime, setSqlIndexReadOneMilionTime] = useState(0);

    //SINGLE
    const sqlSingleReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/SingleTable/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlSingleReadOneThousandTime(response.data);
                localStorage.setItem("lsSqlSingleReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/SingleTable/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlSingleReadTenThousandTime(response.data);
                localStorage.setItem("lsSqlSingleReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/SingleTable/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlSingleReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlSingleReadOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlSingleReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/SingleTable/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlSingleReadOneMilionTime(response.data);
                localStorage.setItem("lsSqlSingleReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //WEAK
    const sqlWeakReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/WeakRelation/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlWeakReadOneThousandTime(response.data);
                localStorage.setItem("lsSqlWeakReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlWeakReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/WeakRelation/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlWeakReadTenThousandTime(response.data);
                localStorage.setItem("lsSqlWeakReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlWeakReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/WeakRelation/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlWeakReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlWeakReadOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlWeakReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/WeakRelation/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlWeakReadOneMilionTime(response.data);
                localStorage.setItem("lsSqlWeakReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //TERNARY
    const sqlTernaryReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/TernaryRelation/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlTernaryReadOneThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlTernaryReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/TernaryRelation/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlTernaryReadTenThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlTernaryReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/TernaryRelation/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlTernaryReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryReadOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlTernaryReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/TernaryRelation/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlTernaryReadOneMilionTime(response.data);
                localStorage.setItem("lsSqlTernaryReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //INDEX
    const sqlIndexReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/Index/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlIndexReadOneThousandTime(response.data);
                localStorage.setItem("lsSqlIndexReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlIndexReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/Index/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlIndexReadTenThousandTime(response.data);
                localStorage.setItem("lsSqlIndexReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlIndexReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/Index/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlIndexReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlIndexReadOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlIndexReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:5000/api/Index/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlIndexReadOneMilionTime(response.data);
                localStorage.setItem("lsSqlIndexReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    if (loading) {
        return (
            <div className="text-center mt-5 mb-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql read data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlSingleReadOneThousandButton" type="button" onClick={sqlSingleReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="sqlSingleReadOneThousandTime">Execution time: {sqlSingleReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlSingleReadTenThousandButton" type="button" onClick={sqlSingleReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="sqlSingleReadTenThousandTime">Execution time: {sqlSingleReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlSingleReadOneHundredThousandButton" type="button" onClick={sqlSingleReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="sqlSingleReadOneHundredThousandTime">Execution time: {sqlSingleReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlSingleReadOneMilionButton" type="button" onClick={sqlSingleReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="sqlSingleReadOneMilionTime">Execution time: {sqlSingleReadOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql read data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlWeakReadOneThousandButton" type="button" onClick={sqlWeakReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="sqlWeakReadOneThousandTime">Execution time: {sqlWeakReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlWeakReadTenThousandButton" type="button" onClick={sqlWeakReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="sqlWeakReadTenThousandTime">Execution time: {sqlWeakReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlWeakReadOneHundredThousandButton" type="button" onClick={sqlWeakReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="sqlWeakReadOneHundredThousandTime">Execution time: {sqlWeakReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlWeakReadOneMilionButton" type="button" onClick={sqlWeakReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="sqlWeakReadOneMilionTime">Execution time: {sqlWeakReadOneMilionTime} seconds</p>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql read data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlTernaryReadOneThousandButton" type="button" onClick={sqlTernaryReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="sqlTernaryReadOneThousandTime">Execution time: {sqlTernaryReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlTernaryReadTenThousandButton" type="button" onClick={sqlTernaryReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="sqlTernaryReadTenThousandTime">Execution time: {sqlTernaryReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlTernaryReadOneHundredThousandButton" type="button" onClick={sqlTernaryReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="sqlTernaryReadOneHundredThousandTime">Execution time: {sqlTernaryReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlTernaryReadOneMilionButton" type="button" onClick={sqlTernaryReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="sqlTernaryReadOneMilionTime">Execution time: {sqlTernaryReadOneMilionTime} seconds</p>
                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql read data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlIndexReadOneThousandButton" type="button" onClick={sqlIndexReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="sqlIndexReadOneThousandTime">Execution time: {sqlIndexReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlIndexReadTenThousandButton" type="button" onClick={sqlIndexReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="sqlIndexReadTenThousandTime">Execution time: {sqlIndexReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlIndexReadOneHundredThousandButton" type="button" onClick={sqlIndexReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="sqlIndexReadOneHundredThousandTime">Execution time: {sqlIndexReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="sqlIndexReadOneMilionButton" type="button" onClick={sqlIndexReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="sqlIndexReadOneMilionTime">Execution time: {sqlIndexReadOneMilionTime} seconds</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MssqlRead);