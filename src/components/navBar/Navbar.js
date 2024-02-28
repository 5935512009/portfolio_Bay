import './navbar.css'
function Narbar(){
    return(<>
        <section className="navbar">
            <div className='webName'>
                Bay
            </div>
            <div>
                <ul className='navbar-list'>
                    <li><a href='https://www.google.com'> about</a></li> 
                    <li>blog</li>
                    <li>service</li>
                    <li>contact</li>
                    <li>dont know</li>
                </ul>
            </div>
            <div className='login'>
                Not
            </div>
            </section>
    </>)
}
export default Narbar;