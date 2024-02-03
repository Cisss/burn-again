import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import Question from "../Question/Question";
import ResultYes from "../ResultTrue/ResultTrue";
import ResultNo from "../ResultFalse/ResultFalse";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Question />}></Route>
                <Route path="/result-yes" element={<ResultYes />}></Route>
                <Route path="/result-no" element={<ResultNo />}></Route>
            </Routes>
        </>
    )
};

export default App;