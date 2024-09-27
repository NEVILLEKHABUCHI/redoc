import Header from './Header1';

const Main = () => {
    return (
        <div className="main">
            <Header/>

            <div className="body">
                <div className="left">
                    <div>
                        <p></p>
                        <img src="./images/page3.jpg" alt="background" className="img1" />
                    </div>
                    <div>
                        <p></p>
                        <img src="./images/page4.jpg" alt="background" className="img2" />
                    </div>
                </div>

                <div className="right">
                    <div>
                        <h2>SITE NAME</h2>
                        <p className="device-large">
                        This site lets you blah blah blah blah blah blah. Collaborative research has long been an essential aspect of scientific advancement.
                        Traditionally, collaboration took place through direct, face-to-face interactions, often at 2014. Before the advent of working correspondence, a process 
                        that was time-consuming and inneficient. Researcchers had to oschedule in-person meetings, which were often constrained by travel budgets, logistical difficulties 
                        and scheduling.
                        </p>
                        <p className="device-small">This site lets you blah blah blah blah blah blah. Collaborative research has long been an essential aspect of scientific advancement.
                        Traditionally, collaboration took place through direct</p>
                    </div>

                    <button className="main-btn">EXPLORE</button>
                </div>
            </div>
        </div>
    )
}

export default Main;