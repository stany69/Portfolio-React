
import './Footer.css'
import linkedin from '../media/linkedin.png'
import insta from '../media/insta.png'
import behance from '../media/behance.png'
import drible from '../media/drible.png'





function Footer(){
    return(
        <div className='footer_wrapper' >
            <div className='footer_text'>
                <h2>Contacts</h2>
                <p className = 'p_up'>Want to know more or just chat? </p>
                <p className = 'p_down'>You are welcome!</p>
            </div>
            <div className = 'button'>
                <input class="btn" type="button" value="Send message"/>
            </div>
            <div className = 'social_media'>
                <img class className = "social"
                     src = {linkedin}
                     alt = "social_media"
                     />
                <img class className = "social"
                     src = {insta}
                     alt = "social_media"
                     />
                <img class className = "social"
                     src = {behance}
                     alt = "social_media"
                     /> 
                 <img class className = "social"
                     src = {drible}
                     alt = "social_media"
                     />         


            </div>
            <div className = 'like_me'>
                <p className = 'like'>Like me on</p>
                <p className = 'like'>LinkedIn, Instagram, Behance, Dribble</p>
            </div>
            
        </div>
    )
}



export default Footer