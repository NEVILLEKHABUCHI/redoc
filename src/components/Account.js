const Account = () => {
    return (
        <div className="account" >
            <header className="acc-header">
                <p></p>
                <i class="fa-solid fa-bars"></i>
            </header>
            <div className="search-btn">
                    <input type="text" placeholder="Search"></input>
                </div>
            <div className="acc-body">
                <div className="left">
                    <h4>JIMMY RUBIA</h4>
                    <nav id="nav-bar">
                        <div>
                            <p>Add Note</p>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div>Peer Review</div>
                        <div>Socials</div>
                        <div>Chats</div>
                        <div>My Works</div>
                    </nav>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Account;