import './SkillComp.css'
import SkillStars from '../SkillStars/SkillStars'


let data = [
    {id: 1, title: 'HTML5', url: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', count_stars: 4},
    {id: 2, title: 'CSS3', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png', count_stars: 3},
    {id: 3, title: 'JS', url: 'https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png', count_stars: 4},
    {id: 4, title: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', count_stars: 4},
]








function SkillComp(){
    return(
        <div className="skill_wrapper">

        {data.map(elem =>

        <SkillStars 
        title = {elem.title}
         url = {elem.url}
          count_stars = {elem.count_stars} 
          key = {elem.id}
           /> 
           )}
    </div>


    )
}


export default SkillComp