import React, { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../data.js";
import styling from "./Question.module.css";
import useSound from "use-sound";
import bell from "../assets/invite-the-bell.mp3";

const Question = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [bellRang, setBellRang] = useState(false);
    const [play] = useSound(bell);

    const handleClick = (value) => {
        setCurrentQuestion(value);

        if (bellRang === false) {
            play();
            setBellRang(true);
        }
    };

    return (
        <section className="content">
           {questions[currentQuestion].back !== false && <button onClick={() => handleClick(questions[currentQuestion].back)} className="button back">BACK</button>}
            <h2>{ questions[currentQuestion].title }</h2>
            <p className="bold">{ questions[currentQuestion].question }</p>
            <ul>
                {questions[currentQuestion].answers.map(({id, text, followUp, resultPage}) => (
                    <li className={styling.item} key={id}>
                        {followUp ? <button onClick={() => handleClick(followUp)} className="button">{text}</button>
                        : <Link to={resultPage}  className="button">{text}</Link>
                        }
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Question;