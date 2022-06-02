import React, { useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

function MssqlUpdate() {
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [sqlSingleUpdateOneThousandTime, setSqlSingleUpdateOneThousandTime] = useState(0);
    var [sqlSingleUpdateTenThousandTime, setSqlSingleUpdateTenThousandTime] = useState(0);
    var [sqlSingleUpdateOneHundredThousandTime, setSqlSingleUpdateOneHundredThousandTime] = useState(0);
    var [sqlSingleUpdateOneMilionTime, setSqlSingleUpdateOneMilionTime] = useState(0);

    //WEAK
    var [sqlWeakUpdateOneThousandTime, setSqlWeakUpdateOneThousandTime] = useState(0);
    var [sqlWeakUpdateTenThousandTime, setSqlWeakUpdateTenThousandTime] = useState(0);
    var [sqlWeakUpdateOneHundredThousandTime, setSqlWeakUpdateReadOneHundredThousandTime] = useState(0);
    var [sqlWeakUpdateOneMilionTime, setSqlWeakUpdateOneMilionTime] = useState(0);

    //TERNARY
    var [sqlTernaryUpdateOneThousandTime, setSqlTernaryUpdateOneThousandTime] = useState(0);
    var [sqlTernaryUpdateTenThousandTime, setSqlTernaryUpdateTenThousandTime] = useState(0);
    var [sqlTernaryUpdateOneHundredThousandTime, setSqlTernaryUpdateReadOneHundredThousandTime] = useState(0);
    var [sqlTernaryUpdateOneMilionTime, setSqlTernaryUpdateOneMilionTime] = useState(0);

    //INDEX
    var [sqlIndexUpdateOneThousandTime, setSqlIndexUpdateOneThousandTime] = useState(0);
    var [sqlIndexUpdateTenThousandTime, setSqlIndexUpdateTenThousandTime] = useState(0);
    var [sqlIndexUpdateOneHundredThousandTime, setSqlIndexUpdateReadOneHundredThousandTime] = useState(0);
    var [sqlIndexUpdateOneMilionTime, setSqlIndexUpdateOneMilionTime] = useState(0);


    //SINGLE
    const sqlSingleUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/SingleTable/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlSingleUpdateOneThousandTime(response.data);
                localStorage.setItem("lsSqlSingleUpdateOneThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlSingleUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/SingleTable/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlSingleUpdateTenThousandTime(response.data);
                localStorage.setItem("lsSqlSingleUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/SingleTable/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlSingleUpdateOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlSingleUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/SingleTable/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlSingleUpdateOneMilionTime(response.data);
                localStorage.setItem("lsSqlSingleUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }


    //WEAK
    const sqlWeakUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/WeakRelation/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlWeakUpdateOneThousandTime(response.data);
                localStorage.setItem("lsSqlWeakUpdateOneThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlWeakUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/WeakRelation/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlWeakUpdateTenThousandTime(response.data);
                localStorage.setItem("lsSqlWeakUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlWeakUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/WeakRelation/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlWeakUpdateReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlWeakUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlWeakUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/WeakRelation/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlWeakUpdateOneMilionTime(response.data);
                localStorage.setItem("lsSqlWeakUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //TERNARY
    const sqlTernaryUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/TernaryRelation/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlTernaryUpdateOneThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryUpdateOneThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlTernaryUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/TernaryRelation/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlTernaryUpdateTenThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlTernaryUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/TernaryRelation/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlTernaryUpdateReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlTernaryUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlTernaryUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/TernaryRelation/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlTernaryUpdateOneMilionTime(response.data);
                localStorage.setItem("lsSqlTernaryUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //INDEX
    const sqlIndexUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/Index/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlIndexUpdateOneThousandTime(response.data);
                localStorage.setItem("lsSqlIndexUpdateOneThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const sqlIndexUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/Index/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlIndexUpdateTenThousandTime(response.data);
                localStorage.setItem("lsSqlIndexUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlIndexUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/Index/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlIndexUpdateReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlIndexUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlIndexUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:5000/api/Index/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlIndexUpdateOneMilionTime(response.data);
                localStorage.setItem("lsSqlIndexUpdateOneMilionTime", response.data);
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
                            <h1>Mssql update data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlSingleUpdateOneThousandButton" type="button" onClick={sqlSingleUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="sqlSingleUpdateOneThousandTime">Execution time: {sqlSingleUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlSingleUpdateTenThousandButton" type="button" onClick={sqlSingleUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="sqlSingleUpdateTenThousandTime">Execution time: {sqlSingleUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlSingleUpdateOneHundredThousandButton" type="button" onClick={sqlSingleUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="sqlSingleUpdateOneHundredThousandTime">Execution time: {sqlSingleUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlSingleUpdateOneMilionButton" type="button" onClick={sqlSingleUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="sqlSingleUpdateOneMilionTime">Execution time: {sqlSingleUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql add data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlWeakUpdateOneThousandButton" type="button" onClick={sqlWeakUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="sqlWeakUpdateOneThousandTime">Execution time: {sqlWeakUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlWeakUpdateTenThousandButton" type="button" onClick={sqlWeakUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="sqlWeakUpdateTenThousandTime">Execution time: {sqlWeakUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlWeakUpdateOneHundredThousandButton" type="button" onClick={sqlWeakUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="sqlWeakUpdateOneHundredThousandTime">Execution time: {sqlWeakUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlWeakUpdateOneMilionButton" type="button" onClick={sqlWeakUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="sqlWeakUpdateOneMilionTime">Execution time: {sqlWeakUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql add data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlTernaryUpdateOneThousandButton" type="button" onClick={sqlTernaryUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="sqlTernaryUpdateOneThousandTime">Execution time: {sqlTernaryUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlTernaryUpdateTenThousandButton" type="button" onClick={sqlTernaryUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="sqlTernaryUpdateTenThousandTime">Execution time: {sqlTernaryUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlTernaryUpdateOneHundredThousandButton" type="button" onClick={sqlTernaryUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="sqlTernaryUpdateOneHundredThousandTime">Execution time: {sqlTernaryUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlTernaryUpdateOneMilionButton" type="button" onClick={sqlTernaryUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="sqlTernaryUpdateOneMilionTime">Execution time: {sqlTernaryUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql add data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlIndexUpdateOneThousandButton" type="button" onClick={sqlIndexUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="sqlIndexUpdateOneThousandTime">Execution time: {sqlIndexUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlIndexUpdateTenThousandButton" type="button" onClick={sqlIndexUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="sqlIndexUpdateTenThousandTime">Execution time: {sqlIndexUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlIndexUpdateOneHundredThousandButton" type="button" onClick={sqlIndexUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="sqlIndexUpdateOneHundredThousandTime">Execution time: {sqlIndexUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="sqlIndexUpdateOneMilionButton" type="button" onClick={sqlIndexUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="sqlIndexUpdateOneMilionTime">Execution time: {sqlIndexUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MssqlUpdate);