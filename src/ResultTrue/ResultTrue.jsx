import { Link } from "react-router-dom";

const ResultTrue =  () => {
return (
    <section className="content">
        <Link className="button back" to="/">Again</Link>
        <p className="bold">Yes! Let's do it!</p>
        <p>You're good, always...</p>
    </section>
)
}

export default ResultTrue;