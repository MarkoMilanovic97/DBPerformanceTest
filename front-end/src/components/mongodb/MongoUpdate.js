import React, { useState } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

function MongoUpdate() {
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [mongoSingleUpdateOneThousandTime, setMongoSingleUpdateOneThousandTime] = useState(0);
    var [mongoSingleUpdateTenThousandTIme, setMongoSingleUpdateTenThousandTIme] = useState(0);
    var [mongoSingleUpdateOneHundredThousandTime, setMongoSingleUpdateOneHundredThousandTime] = useState(0);
    var [mongoSingleUpdateOneMilionTime, setMongoSingleUpdateOneMilionTime] = useState(0);

    //WEAK
    var [mongoWeakUpdateOneThousandTime, setMongoWeakUpdateOneThousandTime] = useState(0);
    var [mongoWeakUpdateTenThousandTime, setMongoWeakUpdateTenThousandTime] = useState(0);
    var [mongoWeakUpdateOneHundredThousandTime, setMongoWeakUpdateOneHundredThousandTime] = useState(0);
    var [mongoWeakUpdateOneMilionTime, setMongoWeakUpdateOneMilionTime] = useState(0);

    //TERNARY
    var [mongoTernaryUpdateOneThousandTime, setMongoTernaryUpdateOneThousandTime] = useState(0);
    var [mongoTernaryUpdateTenThousandTime, setMongoTernaryUpdateTenThousandTime] = useState(0);
    var [mongoTernaryUpdateOneHundredThousandTime, setMongoTernaryUpdateOneHundredThousandTime] = useState(0);
    var [mongoTernaryUpdateOneMilionTime, setMongoTernaryUpdateOneMilionTime] = useState(0);

    //INDEX
    var [mongoInddexUpdateOneThousandTime, setMongoIndexUpdateOneThousandTime] = useState(0);
    var [mongoIndexUpdateTenThousandTime, setMongoIndexUpdateTenThousandTime] = useState(0);
    var [mongoIndexUpdateOneHundredThousandTime, setMongoIndexUpdateOneHundredThousandTime] = useState(0);
    var [mongoIndexUpdateOneMilionTime, setMongoIndexUpdateOneMilionTime] = useState(0);


    const mongoSingleUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/single-collection/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoSingleUpdateOneThousandTime(response.data);
                localStorage.setItem("lsMongoSingleUpdateOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoSingleUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/single-collection/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoSingleUpdateTenThousandTIme(response.data);
                localStorage.setItem("lsMongoSingleUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoSingleUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/single-collection/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoSingleUpdateOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoSingleUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }

        });
    }

    const mongoSingleUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:8080/single-collection/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoSingleUpdateOneMilionTime(response.data);
                localStorage.setItem("lsMongoSingleUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //WEAK
    const mongoWeakUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/weak-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoWeakUpdateOneThousandTime(response.data);
                localStorage.setItem("lsMongoWeakUpdateOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/weak-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoWeakUpdateTenThousandTime(response.data);
                localStorage.setItem("lsMongoWeakUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/weak-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoWeakUpdateOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoWeakUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoWeakUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:8080/weak-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoWeakUpdateOneMilionTime(response.data);
                localStorage.setItem("lsMongoWeakUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //TERNARY
    const mongoTernaryUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/ternary-relation/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoTernaryUpdateOneThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryUpdateOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/ternary-relation/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoTernaryUpdateTenThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/ternary-relation/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoTernaryUpdateOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoTernaryUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoTernaryUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:8080/ternary-relation/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoTernaryUpdateOneMilionTime(response.data);
                localStorage.setItem("lsMongoTernaryUpdateOneMilionTime", response.data);
                setLoading(false);
            }
        });
    }

    //INDEX
    const mongoIndexUpdateOneThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/index/one-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000 records.', 5000);
            } else {
                setMongoIndexUpdateOneThousandTime(response.data);
                localStorage.setItem("lsMongoIndexUpdateOneThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexUpdateTenThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/index/ten-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 10000 records.', 5000);
            } else {
                setMongoIndexUpdateTenThousandTime(response.data);
                localStorage.setItem("lsMongoIndexUpdateTenThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexUpdateOneHundredThousand = () => {
        setLoading(true);
        axios.put("http://localhost:8080/index/one-hundred-thousand").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 100000 records.', 5000);
            } else {
                setMongoIndexUpdateOneHundredThousandTime(response.data);
                localStorage.setItem("lsMongoIndexUpdateOneHundredThousandTime", response.data);
                setLoading(false);
            }
        });
    }

    const mongoIndexUpdateOneMilion = () => {
        setLoading(true);
        axios.put("http://localhost:8080/index/one-milion").then((response) => {
            if (response.data === "error") {
                setLoading(false);
                return NotificationManager.error('Please insert more records and try again.', 'Collection contains less than 1000000 records.', 5000);
            } else {
                setMongoIndexUpdateOneMilionTime(response.data);
                localStorage.setItem("lsMongoIndexUpdateOneMilionTime", response.data);
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
                            <h1>MondoDB update data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoSingleUpdateOneThousandButton" type="button" onClick={mongoSingleUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="mongoSingleUpdateOneThousandTime">Execution time: {mongoSingleUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoSingleUpdateTenThousandButton" type="button" onClick={mongoSingleUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="mongoSingleUpdateTenThousandTIme">Execution time: {mongoSingleUpdateTenThousandTIme} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoSingleUpdateOneHundredThousandButton" type="button" onClick={mongoSingleUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="mongoSingleUpdateOneHundredThousandTime">Execution time: {mongoSingleUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoSingleUpdateOneMilionButton" type="button" onClick={mongoSingleUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="mongoSingleUpdateOneMilionTime">Execution time: {mongoSingleUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB update data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoWeakUpdateOneThousandButton" type="button" onClick={mongoWeakUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="mongoWeakUpdateOneThousandTime">Execution time: {mongoWeakUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoWeakUpdateTenThousandButton" type="button" onClick={mongoWeakUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="mongoWeakUpdateTenThousandTime">Execution time: {mongoWeakUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoWeakUpdateOneHundredThousandButton" type="button" onClick={mongoWeakUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="mongoWeakUpdateOneHundredThousandTime">Execution time: {mongoWeakUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoWeakUpdateOneMilionButton" type="button" onClick={mongoWeakUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="mongoWeakUpdateOneMilionTime">Execution time: {mongoWeakUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB update data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoTernaryUpdateOneThousandButton" type="button" onClick={mongoTernaryUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="mongoTernaryUpdateOneThousandTime">Execution time: {mongoTernaryUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoTernaryUpdateTenThousandButton" type="button" onClick={mongoTernaryUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="mongoTernaryUpdateTenThousandTime">Execution time: {mongoTernaryUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoTernaryUpdateOneHundredThousandButton" type="button" onClick={mongoTernaryUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="mongoTernaryUpdateOneHundredThousandTime">Execution time: {mongoTernaryUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoTernaryUpdateOneMilionButton" type="button" onClick={mongoTernaryUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="mongoTernaryUpdateOneHundredThousandTime">Execution time: {mongoTernaryUpdateOneHundredThousandTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MognoDB update data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoIndexUpdateOneThousandButton" type="button" onClick={mongoIndexUpdateOneThousand}>Update Thousand records</button>
                            <p className="lead" id="mongoInddexUpdateOneThousandTime">Execution time: {mongoInddexUpdateOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoIndexUpdateTenThousandButton" type="button" onClick={mongoIndexUpdateTenThousand}>Update Ten thousand records</button>
                            <p className="lead" id="mongoIndexUpdateTenThousandTime">Execution time: {mongoIndexUpdateTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoIndexUpdateOneHundredThousandButton" type="button" onClick={mongoIndexUpdateOneHundredThousand}>Update One hundred thousand records</button>
                            <p className="lead" id="mongoIndexUpdateOneHundredThousandTime">Execution time: {mongoIndexUpdateOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-warning rounded-0" id="mongoIndexUpdateOneMilion" type="button" onClick={mongoIndexUpdateOneMilion}>Update One milion records</button>
                            <p className="lead" id="mongoIndexUpdateOneMilionTime">Execution time: {mongoIndexUpdateOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MongoUpdate);