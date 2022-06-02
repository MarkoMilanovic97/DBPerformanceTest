import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { NotificationManager } from 'react-notifications';

function MssqlDelete(){
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [sqlSingleDeleteOneThousandTime, setSqlSingleDeleteOneThousandTime] = useState(0);
    var [sqlSingleDeleteTenThousandTime, setSqlSingleDeleteTenThousandTime] = useState(0);
    var [sqlSingleDeleteOneHundredThousandTime, setSqlSingleDeleteOneHundredThousandTime] = useState(0);
    var [sqlSingleDeleteOneMilionTime, setSqlSingleDeleteOneMilionTime] = useState(0);

    //WEAK
    var [sqlWeakDeleteeOneThousandTime, setSqlWeakDeleteOneThousandTime] = useState(0);
    var [sqlWeakDeleteTenThousandTime, setSqlWeakDeleteTenThousandTime] = useState(0);
    var [sqlWeakDeleteOneHundredThousandTime, setSqlWeakDeleteReadOneHundredThousandTime] = useState(0);
    var [sqlWeakDeleteOneMilionTime, setSqlWeakDeleteOneMilionTime] = useState(0);

    //TERNARY
    var [sqlTernaryDeleteeOneThousandTime, setSqlTernaryDeleteOneThousandTime] = useState(0);
    var [sqlWeakTernaryTenThousandTime, setSqlTernaryDeleteTenThousandTime] = useState(0);
    var [sqlTernaryDeleteOneHundredThousandTime, setSqlTernaryDeleteReadOneHundredThousandTime] = useState(0);
    var [sqlTernaryDeleteOneMilionTime, setSqlTernaryDeleteOneMilionTime] = useState(0);

    //INDEX
    var [sqlIndexDeleteeOneThousandTime, setSqlIndexDeleteOneThousandTime] = useState(0);
    var [sqlIndexTernaryTenThousandTime, setSqlIndexDeleteTenThousandTime] = useState(0);
    var [sqlIndexDeleteOneHundredThousandTime, setSqlIndexDeleteReadOneHundredThousandTime] = useState(0);
    var [sqlIndexDeleteOneMilionTime, setSqlIndexDeleteOneMilionTime] = useState(0);

    //SINGLE
    const sqlSingleDeleteOneThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:5000/api/SingleTable/onethousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
            } else {
                setSqlSingleDeleteOneThousandTime(response.data);
                localStorage.setItem("lsSqlSingleDeleteOneThousandTime", response.data);
                setLoading(false);
            }
            
        });
    }

    const sqlSingleDeleteTenThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:5000/api/SingleTable/tenthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
            } else {
                setSqlSingleDeleteTenThousandTime(response.data);
                localStorage.setItem("lsSqlSingleDeleteTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleDeleteOneHundredThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:5000/api/SingleTable/onehundredthousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
            } else {
                setSqlSingleDeleteOneHundredThousandTime(response.data);
                localStorage.setItem("lsSqlSingleDeleteOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const sqlSingleDeleteOneMilion = () => {
        setLoading(true);
        axios.delete("http://localhost:5000/api/SingleTable/onemilion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
            } else {
                setSqlSingleDeleteOneMilionTime(response.data);
                localStorage.setItem("lsSqlSingleDeleteOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

        //WEAK
        const sqlWeakDeleteOneThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/WeakRelation/onethousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
                } else {
                    setSqlWeakDeleteOneThousandTime(response.data);
                    localStorage.setItem("lsSqlWeakDeleteOneThousandTime", response.data);
                    setLoading(false);
                }
                
            });
        }
    
        const sqlWeakDeleteTenThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/WeakRelation/tenthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
                } else {
                    setSqlWeakDeleteTenThousandTime(response.data);
                    localStorage.setItem("lsSqlWeakDeleteTenThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlWeakDeleteOneHundredThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/WeakRelation/onehundredthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
                } else {
                    setSqlWeakDeleteReadOneHundredThousandTime(response.data);
                    localStorage.setItem("lsSqlWeakDeleteOneHundredThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlWeakDeleteOneMilion = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/WeakRelation/onemilion").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
                } else {
                    setSqlWeakDeleteOneMilionTime(response.data);
                    localStorage.setItem("lsSqlWeakDeleteOneMilionTime", response.data);
                    setLoading(false);
                }
            });
        }


        //TERNARY
        const sqlTernaryDeleteOneThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/TernaryRelation/onethousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
                } else {
                    setSqlTernaryDeleteOneThousandTime(response.data);
                    localStorage.setItem("lsSqlTernaryDeleteOneThousandTime", response.data);
                    setLoading(false);
                }
                
            });
        }
    
        const sqlTernaryDeleteTenThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/TernaryRelation/tenthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
                } else {
                    setSqlTernaryDeleteTenThousandTime(response.data);
                    localStorage.setItem("lsSqlTernaryDeleteTenThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlTernaryDeleteOneHundredThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/TernaryRelation/onehundredthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
                } else {
                    setSqlTernaryDeleteReadOneHundredThousandTime(response.data);
                    localStorage.setItem("lsSqlTernaryDeleteOneHundredThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlTernaryDeleteOneMilion = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/TernaryRelation/onemilion").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
                } else {
                    setSqlTernaryDeleteOneMilionTime(response.data);
                    localStorage.setItem("lsSqlTernaryDeleteOneMilionTime", response.data);
                    setLoading(false);
                }
            });
        }

        //INDEX
        const sqlIndexDeleteOneThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/Index/onethousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000 rows.', 5000);
                } else {
                    setSqlIndexDeleteOneThousandTime(response.data);
                    localStorage.setItem("lsSqlIndexDeleteOneThousandTime", response.data);
                    setLoading(false);
                }
                
            });
        }
    
        const sqlIndexDeleteTenThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/Index/tenthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 10000 rows.', 5000);
                } else {
                    setSqlIndexDeleteTenThousandTime(response.data);
                    localStorage.setItem("lsSqlIndexDeleteTenThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlIndexDeleteOneHundredThousand = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/Index/onehundredthousand").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 100000 rows.', 5000);
                } else {
                    setSqlIndexDeleteReadOneHundredThousandTime(response.data);
                    localStorage.setItem("lsSqlIndexDeleteOneHundredThousandTime", response.data);
                    setLoading(false);
                }
            });
        }
    
        const sqlIndexDeleteOneMilion = () => {
            setLoading(true);
            axios.delete("http://localhost:5000/api/Index/onemilion").then((response) => {
                if (response.data === "error") {
                    setLoading(false);
                    return NotificationManager.error('Please insert more rows and try again.', 'Table contains less than 1000000 rows.', 5000);
                } else {
                    setSqlIndexDeleteOneMilionTime(response.data);
                    localStorage.setItem("lsSqlIndexDeleteOneMilionTime", response.data);
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
                            <h1>Mssql delete data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlSingleDeleteOneThousandButton" type="button" onClick={sqlSingleDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead" id="sqlSingleDeleteOneThousandTime">Execution time: {sqlSingleDeleteOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlSingleDeleteTenThousandButton" type="button" onClick={sqlSingleDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead" id="sqlSingleDeleteTenThousandTime">Execution time: {sqlSingleDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlSingleDeleteOneHundredThousandButton" type="button" onClick={sqlSingleDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead" id="sqlSingleDeleteOneHundredThousandTime">Execution time: {sqlSingleDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlSingleDeleteOneMilionButton" type="button" onClick={sqlSingleDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead" id="sqlSingleDeleteOneMilionTime">Execution time: {sqlSingleDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql delete data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlWeakDeleteOneThousandButton" type="button" onClick={sqlWeakDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead" id="sqlWeakDeleteeOneThousandTime">Execution time: {sqlWeakDeleteeOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlWeakDeleteTenThousandButton" type="button" onClick={sqlWeakDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead" id="sqlWeakDeleteTenThousandTime">Execution time: {sqlWeakDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlWeakDeleteOneHundredThousandButton" type="button" onClick={sqlWeakDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead" id="sqlWeakDeleteOneHundredThousandTime">Execution time: {sqlWeakDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlWeakDeleteOneMilionButton" type="button" onClick={sqlWeakDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead" id="sqlWeakDeleteOneMilionTime">Execution time: {sqlWeakDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql delete data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlTernaryDeleteOneThousandButton" type="button" onClick={sqlTernaryDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead" id="sqlTernaryDeleteeOneThousandTime">Execution time: {sqlTernaryDeleteeOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlTernaryDeleteTenThousandButton" type="button" onClick={sqlTernaryDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead" id="sqlWeakTernaryTenThousandTime">Execution time: {sqlWeakTernaryTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlTernaryDeleteOneHundredThousandButton" type="button" onClick={sqlTernaryDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead" id="sqlTernaryDeleteOneHundredThousandTime">Execution time: {sqlTernaryDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlTernaryDeleteOneMilionButton" type="button" onClick={sqlTernaryDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead" id="sqlTernaryDeleteOneMilionTime">Execution time: {sqlTernaryDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql delete data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlIndexDeleteOneThousandButton" type="button" onClick={sqlIndexDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead" id="sqlIndexDeleteeOneThousandTime">Execution time: {sqlIndexDeleteeOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlIndexDeleteTenThousandButton" type="button" onClick={sqlIndexDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead" id="sqlIndexTernaryTenThousandTime">Execution time: {sqlIndexTernaryTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlIndexDeleteOneHundredThousandButton" type="button" onClick={sqlIndexDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead" id="sqlIndexDeleteOneHundredThousandTime">Execution time: {sqlIndexDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="sqlIndexDeleteOneMilionButton" type="button" onClick={sqlIndexDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead" id="sqlIndexDeleteOneMilionTime">Execution time: {sqlIndexDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MssqlDelete);