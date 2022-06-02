import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";

function MongoAdd(){
    
    var [loading, setLoading] = useState(false);

    //SINGLE
    var [mongoSingleAddOneThousandTime, setMongoSingleAddOneThousandTime] = useState(0);
    var [mongoSingleAddTenThousandTime, setMongoSingleAddTenThousandTime] = useState(0);
    var [mongoSingleAddOneHundredThousandTime, setMongoSingleAddOneHundredThousandTime] = useState(0);
    var [mongoSingleAddOneMilionTime, setMongoSingleAddOneMilionTime] = useState(0);

    //WEAK
    var [mongoWeakAddOneThousandTime, setMongoWeakAddOneThousandTime] = useState(0);
    var [mongoWeakAddTenThousandTime, setMongoWeakAddTenThousandTime] = useState(0);
    var [mongoWeakAddOneHundredThousandTime, setMongoWeakAddOneHundredThousandTime] = useState(0);
    var [mongoWeakAddOneMilionTime, setMongoWeakAddOneMilionTime] = useState(0);

    //TERNARY
    var [mongoTernaryAddOneThousandTime, setMongoTernaryAddOneThousandTime] = useState(0);
    var [mongoTernaryAddTenThousandTime, setMongoTernaryAddTenThousandTime] = useState(0);
    var [mongoTernaryAddOneHundredThousandTime, setMongoTernaryAddOneHundredThousandTime] = useState(0);
    var [mongoTernaryAddOneMilionTime, setMongoTernaryAddOneMilionTime] = useState(0);

    //INDEX
    var [mongoIndexAddOneThousandTime, setMongoIndexAddOneThousandTime] = useState(0);
    var [mongoIndexAddTenThousandTime, setMongoIndexAddTenThousandTime] = useState(0);
    var [mongoIndexAddOneHundredThousandTime, setMongoIndexAddOneHundredThousandTime] = useState(0);
    var [mongoIndexAddOneMilionTime, setMongoIndexAddOneMilionTime] = useState(0);

    //SINGLE
    const mongoSingleAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/single-collection/one-thousand").then((response) => {
            setMongoSingleAddOneThousandTime(response.data);
            localStorage.setItem("lsMongoSingleAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoSingleAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/single-collection/ten-thousand").then((response) => {
            setMongoSingleAddTenThousandTime(response.data);
            localStorage.setItem("lsMongoSingleAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoSingleAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/single-collection/one-hundred-thousand").then((response) => {
            setMongoSingleAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsMongoSingleAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoSingleAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:8080/single-collection/one-milion").then((response) => {
            setMongoSingleAddOneMilionTime(response.data);
            localStorage.setItem("lsMongoSingleAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

    //WEAK
    const mongoWeakAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/weak-relation/one-thousand").then((response) => {
            setMongoWeakAddOneThousandTime(response.data);
            localStorage.setItem("lsMongoWeakAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoWeakAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/weak-relation/ten-thousand").then((response) => {
            setMongoWeakAddTenThousandTime(response.data);
            localStorage.setItem("lsMongoWeakAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoWeakAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/weak-relation/one-hundred-thousand").then((response) => {
            setMongoWeakAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsMongoWeakAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoWeakAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:8080/weak-relation/one-milion").then((response) => {
            setMongoWeakAddOneMilionTime(response.data);
            localStorage.setItem("lsMongoWeakAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

    //TERNARY
    const mongoTernaryAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/ternary-relation/one-thousand").then((response) => {
            setMongoTernaryAddOneThousandTime(response.data);
            localStorage.setItem("lsMongoTernaryAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoTernaryAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/ternary-relation/ten-thousand").then((response) => {
            setMongoTernaryAddTenThousandTime(response.data);
            localStorage.setItem("lsMongoTernaryAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoTernaryAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/ternary-relation/one-hundred-thousand").then((response) => {
            setMongoTernaryAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsMongoTernaryAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoTernaryAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:8080/ternary-relation/one-milion").then((response) => {
            setMongoTernaryAddOneMilionTime(response.data);
            localStorage.setItem("lsMongoTernaryAddOneMilionTime", response.data);
            setLoading(false);
        });
    }

     //INDEX
     const mongoIndexAddOneThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/index/one-thousand").then((response) => {
            setMongoIndexAddOneThousandTime(response.data);
            localStorage.setItem("lsMongoIndexAddOneThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoIndexAddTenThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/index/ten-thousand").then((response) => {
            setMongoIndexAddTenThousandTime(response.data);
            localStorage.setItem("lsMongoIndexAddTenThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoIndexAddOneHundredThousand = () => {
        setLoading(true);
        axios.post("http://localhost:8080/index/one-hundred-thousand").then((response) => {
            setMongoIndexAddOneHundredThousandTime(response.data);
            localStorage.setItem("lsMongoIndexAddOneHundredThousandTime", response.data);
            setLoading(false);
        });
    }

    const mongoIndexAddOneMilion = () => {
        setLoading(true);
        axios.post("http://localhost:8080/index/one-milion").then((response) => {
            setMongoIndexAddOneMilionTime(response.data);
            localStorage.setItem("lsMongoIndexAddOneMilionTime", response.data);
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
                            <h1>MongoDB add data - Single</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoSingleAddOneThousandButton" type="button" onClick={mongoSingleAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="mongoSingleAddOneThousandTime">Execution time: {mongoSingleAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoSingleAddTenThousandButton" type="button" onClick={mongoSingleAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="mongoSingleAddTenThousandTime">Execution time: {mongoSingleAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoSingleAddOneHundredThousandButton" type="button" onClick={mongoSingleAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="mongoSingleAddOneHundredThousandTime">Execution time: {mongoSingleAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoSingleAddOneMilionButton" type="button" onClick={mongoSingleAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="mongoSingleAddOneMilionTime">Execution time: {mongoSingleAddOneMilionTime} seconds</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <h1>MongoDB add data - Weak</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoWeakAddOneThousandButton" type="button" onClick={mongoWeakAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="mongoWeakAddOneThousandTime">Execution time: {mongoWeakAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoWeakAddTenThousandButton" type="button" onClick={mongoWeakAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="mongoWeakAddTenThousandTime">Execution time: {mongoWeakAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoWeakAddOneHundredThousand" type="button" onClick={mongoWeakAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="mongoWeakAddOneHundredThousandTime">Execution time: {mongoWeakAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoWeakAddOneMilion" type="button" onClick={mongoWeakAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="mongoWeakAddOneMilionTime">Execution time: {mongoWeakAddOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MongoDB add data - Ternary</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoTernaryAddOneThousandButton" type="button" onClick={mongoTernaryAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="mongoTernaryAddOneThousandTime">Execution time: {mongoTernaryAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoTernaryAddTenThousandButton" type="button" onClick={mongoTernaryAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="mongoTernaryAddTenThousandTime">Execution time: {mongoTernaryAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoTernaryAddOneHundredThousand" type="button" onClick={mongoTernaryAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="mongoTernaryAddOneHundredThousandTime">Execution time: {mongoTernaryAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoTernaryAddOneMilionButton" type="button" onClick={mongoTernaryAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="mongoTernaryAddOneMilionTime">Execution time: {mongoTernaryAddOneMilionTime} seconds</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="container">
                            <h1>MongoDB add data - Index</h1>
                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoIndexAddOneThousandButton" type="button" onClick={mongoIndexAddOneThousand}>Add Thousand records</button>
                            <p className="lead" id="mongoIndexAddOneThousandTime">Execution time: {mongoIndexAddOneThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoIndexAddTenThousandButton" type="button" onClick={mongoIndexAddTenThousand}>Add Ten thousand records</button>
                            <p className="lead" id="mongoIndexAddTenThousandTime">Execution time: {mongoIndexAddTenThousandTime} seconds</p>

                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoIndexAddOneHundredThousandButton" type="button" onClick={mongoIndexAddOneHundredThousand}>Add One hundred thousand records</button>
                            <p className="lead" id="mongoIndexAddOneHundredThousandTime">Execution time: {mongoIndexAddOneHundredThousandTime} seconds</p>


                            <button className="w-100 btn btn-lg btn-outline-primary rounded-0" id="mongoIndexAddOneMilionButton" type="button" onClick={mongoIndexAddOneMilion}>Add One milion records</button>
                            <p className="lead" id="mongoIndexAddOneMilionTime">Execution time: {mongoIndexAddOneMilionTime} seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MongoAdd);