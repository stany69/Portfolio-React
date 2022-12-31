
import './Header.css'


function Header(){
    return(
        <div className="header_wrapper">
             
            <ul className='header_list'>
                
                <li>
                    <a className='home' href ='#'>Home</a>
                </li>
                <li>
                    <a href ='#'>About me</a>
                </li>
                <li>
                    <a href ='#'>Skills</a>
                </li>
                <li>
                    <a href ='#'>Portfolio</a>
                </li>
                <li>
                    <a href ='#'>Contacts</a>
                </li>
                
            </ul>
            <span className='header_span'></span>
            
        </div>
        
    )
}




export default Header