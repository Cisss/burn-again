import styling from "./Loader.module.css";
const Loader = () => {
    return (
        <>
            <header id="header" className={styling.header}>
                <span className={styling.title}>
                </span>
                <span className={styling.subtitle}></span>
            </header>
            <section className="content">
                <h1 className={styling.building}>Oempa Loempa's are building!</h1>
                <div className={styling.loadingAnimation}><div></div><div></div><div></div><div></div></div>
            </section>
        </>
    )
}

export default Loader;