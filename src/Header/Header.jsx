import styling from "./Header.module.css";
const Header = () => {
    return (
        <header className={styling.header}>
            <h1 className={styling.title}>Burn Again?</h1>
            <h2 className={styling.subTitle}>Offcourse, take a moment to breath...</h2>
        </header>
    )
};

export default Header;