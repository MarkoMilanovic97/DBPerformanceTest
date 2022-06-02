import React, { useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

function MongoRead(){
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [mongoSingleReadOneThousandTime, setMongoSingleReadOneThousandTime] = useState(0);
    var [mongoSingleReadTenThousandTime, setMongoSingleReadTenThousandTime] = useState(0);
    var [mongoSingleReadOneHundredThousandTime, setMongoSingleReadOneHundredThousandTime] = useState(0);
    var [mongoSingleReadOneMilionTime, setMongoSingleReadOneMilionTime] = useState(0);

     //WEAK
     var [mongoWeakReadOneThousandTime, setMongoWeakReadOneThousandTime] = useState(0);
     var [mongoWeakReadTenThousandTime, setMongoWeakReadTenThousandTime] = useState(0);
     var [mongoWeakReadOneHundredThousandTime, setMongoWeakReadOneHundredThousandTime] = useState(0);
     var [mongoWeakReadOneMilionTime, setMongoWeakReadOneMilionTime] = useState(0);

     //TERNARY
     var [mongoTernaryReadOneThousandTime, setMongoTernaryReadOneThousandTime] = useState(0);
     var [mongoTernaryReadTenThousandTime, setMongoTernaryReadTenThousandTime] = useState(0);
     var [mongoTernaryReadOneHundredThousandTime, setMongoTernaryReadOneHundredThousandTime] = useState(0);
     var [mongoTernaryReadOneMilionTime, setMongoTernaryReadOneMilionTime] = useState(0);

     //INDEX
     var [mongoIndexReadOneThousandTime, setMongoIndexReadOneThousandTime] = useState(0);
     var [mongoIndexReadTenThousandTime, setMongoIndexReadTenThousandTime] = useState(0);
     var [mongoIndexReadOneHundredThousandTime, setMongoIndexReadOneHundredThousandTime] = useState(0);
     var [mongoIndexReadOneMilionTime, setMongoIndexReadOneMilionTime] = useState(0);

     //SINGLE
    const mongoSingleReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/single-collection/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoSingleReadOneThousandTime(response.data);
                localStorage.setItem("lsMongoSingleReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoSingleReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/single-collection/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoSingleReadTenThousandTime(response.data);
                localStorage.setItem("lsMongoSingleReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoSingleReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/single-collection/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoSingleReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoSingleReadOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const mongoSingleReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:8080/single-collection/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoSingleReadOneMilionTime(response.data);
                localStorage.setItem("lsMongoSingleReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //WEAK
    const mongoWeakReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/weak-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoWeakReadOneThousandTime(response.data);
                localStorage.setItem("lsMongoWeakReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/weak-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoWeakReadTenThousandTime(response.data);
                localStorage.setItem("lsMongoWeakReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/weak-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoWeakReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoWeakReadOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:8080/weak-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoWeakReadOneMilionTime(response.data);
                localStorage.setItem("lsMongoWeakReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //TERNARY
    const mongoTernaryReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/ternary-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoTernaryReadOneThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/ternary-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoTernaryReadTenThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/ternary-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoTernaryReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryReadOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:8080/ternary-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoTernaryReadOneMilionTime(response.data);
                localStorage.setItem("lsMongoTernaryReadOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //INDEX
    const mongoIndexReadOneThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/index/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoIndexReadOneThousandTime(response.data);
                localStorage.setItem("lsMongoIndexReadOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexReadTenThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/index/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoIndexReadTenThousandTime(response.data);
                localStorage.setItem("lsMongoIndexReadTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexReadOneHundredThousand = () => {
        setLoading(true);
        axios.get("http://localhost:8080/index/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoIndexReadOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoIndexReadOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexReadOneMilion = () => {
        setLoading(true);
        axios.get("http://localhost:8080/index/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoIndexReadOneMilionTime(response.data);
                localStorage.setItem("lsMongoIndexReadOneMilionTime", response.data);
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
                            <h1>MondoDB read data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoSingleReadOneThousandButton" type="button" onClick={mongoSingleReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="mongoSingleReadOneThousandTime">Execution time: {mongoSingleReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoSingleReadTenThousandButton" type="button" onClick={mongoSingleReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="mongoSingleReadTenThousandTime">Execution time: {mongoSingleReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoSingleReadOneHundredThousandButton" type="button" onClick={mongoSingleReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="mongoSingleReadOneHundredThousandTime">Execution time: {mongoSingleReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoSingleReadOneMilionButton" type="button" onClick={mongoSingleReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="mongoSingleReadOneMilionTime">Execution time: {mongoSingleReadOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoWeakReadOneThousandButton" type="button" onClick={mongoWeakReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="mongoWeakReadOneThousandTime">Execution time: {mongoWeakReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoWeakReadTenThousandButton" type="button" onClick={mongoWeakReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="mongoWeakReadTenThousandTime">Execution time: {mongoWeakReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoWeakReadOneHundredThousandButton" type="button" onClick={mongoWeakReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="mongoWeakReadOneHundredThousandTime">Execution time: {mongoWeakReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoWeakReadOneMilionButton" type="button" onClick={mongoWeakReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="mongoWeakReadOneMilionTime">Execution time: {mongoWeakReadOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoTernaryReadOneThousandButton" type="button" onClick={mongoTernaryReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="mongoTernaryReadOneThousandTime">Execution time: {mongoTernaryReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoTernaryReadTenThousandButton" type="button" onClick={mongoTernaryReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="mongoTernaryReadTenThousandTime">Execution time: {mongoTernaryReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoTernaryReadOneHundredThousandButton" type="button" onClick={mongoTernaryReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="mongoTernaryReadOneHundredThousandTime">Execution time: {mongoTernaryReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoTernaryReadOneMilionButton" type="button" onClick={mongoTernaryReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="mongoTernaryReadOneMilionTime">Execution time: {mongoTernaryReadOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB read data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoIndexReadOneThousandButton" type="button" onClick={mongoIndexReadOneThousand}>Read Thousand records</button>
                            <p className="lead" id="mongoIndexReadOneThousandTime">Execution time: {mongoIndexReadOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoIndexReadTenThousandButton" type="button" onClick={mongoIndexReadTenThousand}>Read Ten thousand records</button>
                            <p className="lead" id="mongoIndexReadTenThousandTime">Execution time: {mongoIndexReadTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoIndexReadOneHundredThousandButton" type="button" onClick={mongoIndexReadOneHundredThousand}>Read One hundred thousand records</button>
                            <p className="lead" id="mongoIndexReadOneHundredThousandTime">Execution time: {mongoIndexReadOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-success rounded-0" id="mongoIndexReadOneMilionButton" type="button" onClick={mongoIndexReadOneMilion}>Read One milion records</button>
                            <p className="lead" id="mongoIndexReadOneMilionTime">Execution time: {mongoIndexReadOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MongoRead);