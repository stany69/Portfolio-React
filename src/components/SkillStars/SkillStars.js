import './SkillStars.css'



function SkillStars(props){
    const {title,url,count_stars} = props

     function generateStars(num){
        let array = []
        for (let i = 1 ; i < 5 ; i++ ){
            if (num > i ){
                array.push('fa fa-star active')
            }else{
                array.push('fa fa-star not_active')
            }
        }
        return array
     }

      let stars_data = generateStars(count_stars)

        return(
          <div className='skill_elem'>
            <img src={url} width ='88' height = '88' />
            <p className = 'it_platform'>{title}</p>

           <p className = 'stars_num'>{count_stars}</p>
           <div className = 'stars_set'>
             <span className = 'fa fa-star active'/>
             {stars_data.map(elem => <span className = {elem}></span>)}
            </div>
          </div>
    )
}


export default SkillStars