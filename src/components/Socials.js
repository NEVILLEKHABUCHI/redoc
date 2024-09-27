import Header from './Header1';

const Socials=()=>{
    return(
        <div className='socials'>
            <Header/>
            <nav>
                <button>Science</button>
                <button>Medicine</button>
                <button>Mathematics</button>
                <button>Agriculture</button>
                <button>History</button>
            </nav>
            <div className='search-bar'>
                <input type='text' placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Socials;