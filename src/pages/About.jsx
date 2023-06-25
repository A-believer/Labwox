import { CTA, CoreValues, Hero_About, OurGoal, OurStory } from "../components"


const About = () => {
  return (
    <main className="bg-whitebgii">
      <Hero_About />
      <OurStory />
      <OurGoal/>
      <CoreValues />
      <CTA/>
    </main>
  )
}

export default About