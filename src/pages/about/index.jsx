/* eslint-disable react/no-unescaped-entities */
import selfPicture from '../../assets/images/fiona1.jpg'
import "./about.css"

function About() {
  return (
    <div className="about-container">
      <section>
        <h2>About me</h2>
        <br />
        <p>Hello, I'm Fiona, a counsellor living in Aviemore, Scotland. Prior to training in counselling, I embraced various roles within the outdoor sports industry, cultivating a profound love for nature and adventure. Living in various countries, I sought opportunities to be in the mountains and generally enjoy the outdoors as much as possible. My personal journey of growth has served as inspiration, motivating me to assist others in finding balance and grounding in their lives. I am fascinated by understanding human connections and unraveling the intricacies of what makes us tick. Recognising that emotional well-being has an impact on relationships, professional endeavors, and hobbies, I am dedicated to promoting the benefits of emotional health.</p>
      </section>
      <img src={selfPicture} alt="A picture of Fiona standing in front of some leaves" />
    </div>
  )
}

export default About