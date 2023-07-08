import PictureAbout from '../assets/images/f5.jpg'
import '../assets/styles/About.css'



const About = () =>{
    return(
        <div >
            <div className="topAbout" style={{backgroundImage:`url(${PictureAbout})`}}>
            </div>
            <div className="bottomAbout">
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos placeat in modi,
                 nulla enim cumque aut totam facilis vitae vel perferendis excepturi impedit aliquid atque aperiam, 
                 commodi molestias, facere adipisci tempora? Nostrum veniam quis dolorum, 
                modi dolore in deleniti debitis quaerat sunt iusto ratione similique eius voluptates culpa blanditiis doloribus itaque quo. 
                Tempora debitis ipsum ea sequi, aspernatur nesciunt. Omnis blanditiis possimus nostrum iusto totam,
                 qui excepturi, perspiciatis facere repellendus nesciunt ut,
                  porro repellat rem quos quam voluptatem ducimus veniam? Unde, asperiores maiores! Culpa iure ad blanditiis,
                   in hic sapiente consequuntur, dolore, dolores facere incidunt veniam. Dicta, rerum natus.
            </p>
            </div>
        </div>
    )
}
export default About;