import { Link } from "react-router-dom";

const ResultFalse =  () => {
return (
    <section className="content">
        <Link className="button back" to="/">Again</Link>
        <p className="bold">No, this isn't right. You can feel it... It feels nasty.</p>
        <p>You're good whatever you do/think/fear. If it doesn't feel good it's not for you. It's not right.</p>
        <p>Thoughts about the future or the past are never true, because there's always only the here and the now.</p>
        <p>And in the here and the now you can feel and the answer appears.</p>
    </section>
)
}

export default ResultFalse;