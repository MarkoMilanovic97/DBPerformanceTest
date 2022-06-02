import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";

function MssqlAdd() {

    //
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [sqlSingleAddOneThousandTime, setSqlSingleAddOneThousandTime] = useState(0);
    var [sqlSingleAddTenThousandTime, setSqlSingleAddTenThousandTime] = useState(0);
    var [sqlSingleAddOneHundredThousandTime, setSqlSingleAddOneHundredThousandTime] = useState(0);
    var [sqlSingleAddOneMilionTime, setSqlSingleAddOneMilionTime] = useState(0);

    //WEAK
    var [sqlWeakAddOneThousandTime, setSqlWeakAddOneThousandTime] = useState(0);
    var [sqlWeakAddTenThousandTime, setSqlWeakAddTenThousandTime] = useState(0);
    var [sqlWeakAddOneHundredThousandTime, setSqlWeakAddOneHundredThousandTime] = useState(0);
    var [sqlWeakAddOneMilionTime, setSqlWeakAddOneMilionTime] = useState(0);

    //TERNARY
    var [sqlTernaryAddOneThousandTime, setSqlTernaryAddOneThousandTime] = useState(0);
    var [sqlTernaryAddTenThousandTime, setSqlTernaryAddTenThousandTime] = useState(0);
    var [sqlTernaryAddOneHundredThousandTime, setSqlTernaryAddOneHundredThousandTime] = useState(0);
    var [sqlTernaryAddOneMilionTime, setSqlTernaryAddOneMilionTime] = useState(0);

    //INDEX
    var [sqlIndexAddOneThousandTime, setSqlIndexAddOneThousandTime] = useState(0);
    var [sqlIndexAddTenThousandTime, setSqlIndexAddTenThousandTime] = useState(0);
    var [sqlIndexAddOneHundredThousandTime, setSqlIndexAddOneHundredThousandTime] = useState(0);
    var [sqlIndexAddOneMilionTime, setSqlIndexAddOneMilionTime] = useState(0);

    //SINGLE
    const sqlSingleAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/SingleTable/onethousand").then((response) => {
            setSqlSingleAddOneThousandTime(response.data);
            localStorage.setItem("lsSqlSingleAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlSingleAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/SingleTable/tenthousand").then((response) => {
            setSqlSingleAddTenThousandTime(response.data);
            localStorage.setItem("lsSqlSingleAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlSingleAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/SingleTable/onehundredthousand").then((response) => {
            setSqlSingleAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsSqlSingleAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlSingleAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/SingleTable/onemilion").then((response) => {
            setSqlSingleAddOneMilionTime(response.data);
            localStorage.setItem("lsSqlSingleAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

    //WEAK
    const sqlWeakAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/WeakRelation/onethousand").then((response) => {
            setSqlWeakAddOneThousandTime(response.data);
            localStorage.setItem("lsSqlWeakAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlWeakAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/WeakRelation/tenthousand").then((response) => {
            setSqlWeakAddTenThousandTime(response.data);
            localStorage.setItem("lsSqlWeakAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlWeakAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/WeakRelation/onehundredthousand").then((response) => {
            setSqlWeakAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsSqlWeakAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlWeakAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/WeakRelation/onemilion").then((response) => {
            setSqlWeakAddOneMilionTime(response.data);
            localStorage.setItem("lsSqlWeakAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

    //TERNARY
    const sqlTernaryAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/TernaryRelation/onethousand").then((response) => {
            setSqlTernaryAddOneThousandTime(response.data);
            localStorage.setItem("lsSqlTernaryAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlTernaryAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/TernaryRelation/tenthousand").then((response) => {
            setSqlTernaryAddTenThousandTime(response.data);
            localStorage.setItem("lsSqlTernaryAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlTernaryAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/TernaryRelation/onehundredthousand").then((response) => {
            setSqlTernaryAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsSqlTernaryAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlTernaryAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/TernaryRelation/onemilion").then((response) => {
            setSqlTernaryAddOneMilionTime(response.data);
            localStorage.setItem("lsSqlTernaryAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

    //INDEX
    const sqlIndexAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/Index/onethousand").then((response) => {
            setSqlIndexAddOneThousandTime(response.data);
            localStorage.setItem("lsSqlIndexAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlIndexAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/Index/tenthousand").then((response) => {
            setSqlIndexAddTenThousandTime(response.data);
            localStorage.setItem("lsSqlIndexAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlIndexAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/Index/onehundredthousand").then((response) => {
            setSqlIndexAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsSqlIndexAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const sqlIndexAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:5000/api/Index/onemilion").then((response) => {
            setSqlIndexAddOneMilionTime(response.data);
            localStorage.setItem("lsSqlIndexAddOneMilionTime", response.data);
            setLoading(false);
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
                            <h1>Mssql add data - Single table</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlSingleAddOneThousandButton" type="button" onClick={sqlSingleAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="sqlSingleAddOneThousandTime">Execution time: {sqlSingleAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlSingleAddTenThousandButton" type="button" onClick={sqlSingleAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="sqlSingleAddTenThousandTime">Execution time: {sqlSingleAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlSingleAddOneHundredThousandButton" type="button" onClick={sqlSingleAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="sqlSingleAddOneHundredThousandTime">Execution time: {sqlSingleAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlSingleAddOneMilionButton" type="button" onClick={sqlSingleAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="sqlSingleAddOneMilionTime">Execution time: {sqlSingleAddOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>Mssql add data - Weak Relation</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlWeakAddOneThousandButton" type="button" onClick={sqlWeakAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="sqlWeakAddOneThousandTime">Execution time: {sqlWeakAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlWeakAddTenThousandButton" type="button" onClick={sqlWeakAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="sqlWeakAddTenThousandTime">Execution time: {sqlWeakAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlWeakAddOneHundredThousandButton" type="button" onClick={sqlWeakAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="sqlWeakAddOneHundredThousandTime">Execution time: {sqlWeakAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlWeakAddOneMilionButton" type="button" onClick={sqlWeakAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="sqlWeakAddOneMilionTime">Execution time: {sqlWeakAddOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4">
                        <div className="container">
                            <h1>Mssql add data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlTernaryAddOneThousandButton" type="button" onClick={sqlTernaryAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="sqlTernaryAddOneThousandTime">Execution time: {sqlTernaryAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlTernaryAddTenThousandButton" type="button" onClick={sqlTernaryAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="sqlTernaryAddTenThousandTime">Execution time: {sqlTernaryAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlTernaryAddOneHundredThousandButton" type="button" onClick={sqlTernaryAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="sqlTernaryAddOneHundredThousandTime">Execution time: {sqlTernaryAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlTernaryAddOneMilionButton" type="button" onClick={sqlTernaryAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="sqlTernaryAddOneMilionTime">Execution time: {sqlTernaryAddOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="container">
                            <h1>Mssql add data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlIndexAddOneThousandButton" type="button" onClick={sqlIndexAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="sqlIndexAddOneThousandTime">Execution time: {sqlIndexAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlIndexAddTenThousandButton" type="button" onClick={sqlIndexAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="sqlIndexAddTenThousandTime">Execution time: {sqlIndexAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlIndexAddOneHundredThousandButton" type="button" onClick={sqlIndexAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="sqlIndexAddOneHundredThousandTime">Execution time: {sqlIndexAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="sqlIndexAddOneMilionButton" type="button" onClick={sqlIndexAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="sqlIndexAddOneMilionTime">Execution time: {sqlIndexAddOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MssqlAdd);