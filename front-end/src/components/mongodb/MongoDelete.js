import React, { useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
function MongoDelete(){
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [mongoSingleDeleteOneThousandTime, setMongoSingleDeleteOneThousandTime] = useState(0);
    var [mongoSingleDeleteTenThousandTime, setMongoSingleDeleteTenThousandTime] = useState(0);
    var [mongoSingleDeleteOneHundredThousandTime, setMongoSingleDeleteOneHundredThousandTime] = useState(0);
    var [mongoSingleDeleteOneMilionTime, setMongoSingleDeleteOneMilionTime] = useState(0);

    //WEAK
    var [mongoWeakDeleteOneThousandTime, setMongoWeakDeleteOneThousandTime] = useState(0);
    var [mongoWeakDeleteTenThousandTime, setMongoWeakDeleteTenThousandTime] = useState(0);
    var [mongoWeakDeleteOneHundredThousandTime, setMongoWeakDeleteOneHundredThousandTime] = useState(0);
    var [mongoWeakDeleteOneMilionTime, setMongoWeakDeleteOneMilionTime] = useState(0);

    //TERNARY
    var [mongoTernaryDeleteOneThousandTime, setMongoTernaryDeleteOneThousandTime] = useState(0);
    var [mongoTernaryDeleteTenThousandTime, setMongoTernaryDeleteTenThousandTime] = useState(0);
    var [mongoTernaryDeleteOneHundredThousandTime, setMongoTernaryDeleteOneHundredThousandTime] = useState(0);
    var [mongoTernaryDeleteOneMilionTime, setMongoTernaryDeleteOneMilionTime] = useState(0);

    //INDEX
    var [mongoIndexDeleteOneThousandTime, setMongoIndexDeleteOneThousandTime] = useState(0);
    var [mongoIndexDeleteTenThousandTime, setMongoIndexDeleteTenThousandTime] = useState(0);
    var [mongoIndexDeleteOneHundredThousandTime, setMongoIndexDeleteOneHundredThousandTime] = useState(0);
    var [mongoIndexDeleteOneMilionTime, setMongoIndexDeleteOneMilionTime] = useState(0);

    const mongoSingleDeleteOneThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/single-collection/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoSingleDeleteOneThousandTime(response.data);
                localStorage.setItem("lsMongoSingleDeleteOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    //SINGLE
    const mongoSingleDeleteTenThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/single-collection/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoSingleDeleteTenThousandTime(response.data);
                localStorage.setItem("lsMongoSingleDeleteTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoSingleDeleteOneHundredThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/single-collection/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoSingleDeleteOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoSingleDeleteOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const mongoSingleDeleteOneMilion = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/single-collection/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoSingleDeleteOneMilionTime(response.data);
                localStorage.setItem("lsMongoSingleDeleteOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //WEAK
    const mongoWeakDeleteOneThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/weak-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoWeakDeleteOneThousandTime(response.data);
                localStorage.setItem("lsMongoWeakDeleteOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakDeleteTenThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/weak-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoWeakDeleteTenThousandTime(response.data);
                localStorage.setItem("lsMongoWeakDeleteTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakDeleteOneHundredThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/weak-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoWeakDeleteOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoWeakDeleteOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakDeleteOneMilion = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/weak-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoWeakDeleteOneMilionTime(response.data);
                localStorage.setItem("lsMongoWeakDeleteOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //TERNARY
    const mongoTernaryDeleteOneThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/ternary-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoTernaryDeleteOneThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryDeleteOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryDeleteTenThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/ternary-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoTernaryDeleteTenThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryDeleteTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryDeleteOneHundredThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/ternary-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoTernaryDeleteOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryDeleteOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryDeleteOneMilion = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/ternary-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoTernaryDeleteOneMilionTime(response.data);
                localStorage.setItem("lsMongoTernaryDeleteOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //INDEX
    const mongoIndexDeleteOneThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/index/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoIndexDeleteOneThousandTime(response.data);
                localStorage.setItem("lsMongoIndexDeleteOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexDeleteTenThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/index/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoIndexDeleteTenThousandTime(response.data);
                localStorage.setItem("lsMongoIndexDeleteTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexDeleteOneHundredThousand = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/index/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoIndexDeleteOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoIndexDeleteOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexDeleteOneMilion = () => {
        setLoading(true);
        axios.delete("http://localhost:8080/index/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoIndexDeleteOneMilionTime(response.data);
                localStorage.setItem("lsMongoIndexDeleteOneMilionTime", response.data);
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
                            <h1>MondoDB delete data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoSingleDeleteOneThousandButton" type="button" onClick={mongoSingleDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead">Execution time: {mongoSingleDeleteOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoSingleDeleteTenThousandButton" type="button" onClick={mongoSingleDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead">Execution time: {mongoSingleDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoSingleDeleteOneHundredThousandButton" type="button" onClick={mongoSingleDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead">Execution time: {mongoSingleDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoSingleDeleteOneMilionButton" type="button" onClick={mongoSingleDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead">Execution time: {mongoSingleDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoWeakDeleteOneThousandButton" type="button" onClick={mongoWeakDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead">Execution time: {mongoWeakDeleteOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoWeakDeleteTenThousandButton" type="button" onClick={mongoWeakDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead">Execution time: {mongoWeakDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoWeakDeleteOneHundredThousandButton" type="button" onClick={mongoWeakDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead">Execution time: {mongoWeakDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoWeakDeleteOneMilionButton" type="button" onClick={mongoWeakDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead">Execution time: {mongoWeakDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoTernaryDeleteOneThousandButton" type="button" onClick={mongoTernaryDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead">Execution time: {mongoTernaryDeleteOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoTernaryDeleteTenThousandButton" type="button" onClick={mongoTernaryDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead">Execution time: {mongoTernaryDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoTernaryDeleteOneHundredThousandButton" type="button" onClick={mongoTernaryDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead">Execution time: {mongoTernaryDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoTernaryDeleteOneMilionButton" type="button" onClick={mongoTernaryDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead">Execution time: {mongoTernaryDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoIndexDeleteOneThousandButton" type="button" onClick={mongoIndexDeleteOneThousand}>Delete Thousand records</button>
                            <p className="lead">Execution time: {mongoIndexDeleteOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoIndexDeleteTenThousandButton" type="button" onClick={mongoIndexDeleteTenThousand}>Delete Ten thousand records</button>
                            <p className="lead">Execution time: {mongoIndexDeleteTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoIndexDeleteOneHundredThousandButton" type="button" onClick={mongoIndexDeleteOneHundredThousand}>Delete One hundred thousand records</button>
                            <p className="lead">Execution time: {mongoIndexDeleteOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-danger rounded-0" id="mongoIndexDeleteOneMilion" type="button" onClick={mongoIndexDeleteOneMilion}>Delete One milion records</button>
                            <p className="lead">Execution time: {mongoIndexDeleteOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MongoDelete);