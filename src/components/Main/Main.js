import "./Main.css";
import burger from '../media/burger.png'
import hayk from '../media/BSPP2266.png'
import haykMobile from '../media/haykTel.png'

function Main() {
  return (
    <div className="main">
      <div className="inants_hayk">
      
        <div className = 'upper_part'>
          <div className = 'burger'>
          <img className = 'hamburger' 
                  src = {burger} 
                  alt = 'ham_pfoto'
                  />
          </div>
          <div className = 'text_inants'>
          <section className = 'sec_sec'>
            <h1>
              Inants <br /> Hayk
            </h1>
            <p className="web_dev">web developer <br/>28 years old, Yerevan</p>
            <p className="lang"><span className="lang_span">RU</span> | ENG</p>
          </section>
          </div>
          
        </div>
        <div className="hayks_pic">
          <img className = 'hayk_photo'
          src = {hayk}
          alt = 'hayk_photo'
          />
        </div>
        <div className="hayks_pic-mobile">
          <img className = 'hayk_photo-mobile'
          src = {haykMobile}
          alt = 'hayk_photo-mobile'
          />
        </div>
      </div>
      <div className="about_me">
        <section className="about_me-sec">
        <h2>About me</h2>
        <p className="about_me-par">
          Hi, I'm Hayk – web developer from Yerevan. <br/>I'm interested in
          development and everything connected with it.
        </p>
        <p className="about_me-par par_two">Ready to implement excellent projects<br/> with wonderful people.</p>
        </section>
      </div>
      
      <div className="skills_container">
        <div className="skills_text">
        <h2 className = 'skills_h2'>Skills</h2>
        <p>I work in such technologies as</p>
        </div>
       
      
      </div>
    </div>
  );
}

export default Main;
