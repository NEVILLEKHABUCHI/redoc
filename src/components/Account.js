import React, {useState} from 'react';

const Account = () => {
    const [currentPage, setCurrentPage] = useState('peer-review');
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
                        <a href=''>
                            <p>Add Note</p>
                            <i class="fa-solid fa-plus"></i>
                        </a>
                        <a href='#' onClick={()=>setCurrentPage('peer-review')}>Peer Review</a>
                        <a href='#' onClick={()=>setCurrentPage('socials')}>Socials</a>
                        <a href='#' onClick={()=>setCurrentPage('chats')}>Chats</a>
                        <a href='#'>My Works</a>
                    </nav>
                </div>
                <div className="right">
                   {currentPage==='peer-review' && (
                     <div className='nav-content' id='peer-review'>
                     This is the peer review page
                 </div>
                   )}

                   {currentPage==='socials' && (
                     <div className='nav-content' id='socials'>
                     This is the socials page
                 </div>
                   )}

                    {currentPage==='chats' && (
                        <div className='nav-content' id='chats'>
                        This is the chats page
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Account;