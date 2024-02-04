import React, {lazy, Suspense, } from "react";

import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Loading from "../Loading/Loading";;

const Question = lazy(() => import("../Question/Question"));
const ResultYes = lazy(() => import("../ResultTrue/ResultTrue"));
const ResultNo = lazy(() => import("../ResultFalse/ResultFalse"));

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <Routes>
                <Route path="/" element={<Question />}></Route>
                <Route path="/result-yes" element={<ResultYes />}></Route>
                <Route path="/result-no" element={<ResultNo />}></Route>
                <Route path="/loading" element={<Loading />}></Route>

            </Routes>
        </Suspense>
    )
};

export default App;