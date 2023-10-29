/* eslint-disable react/no-unescaped-entities */
import { Header } from "../utils"
import poc from "../assets/proofofconcept.png"

export default function ProofOfConcept() {
  return (
    <section className="bg-whitebgii lg:p-20 md:p-10 p-7 lg:space-y-14 space-y-10">
      <div className="space-y-6">
        <Header text1={`Proof of Concept`} text2={`Implementation`} />
        <p className="text-greyi max-w-[631px]">Labwox provides cutting-edge solutions to support research and learning in the chemical sciences</p>
      </div>

      <div className="flex lg:flex-row md:flex-col-reverse flex-col items-center gap-x-[70px] gap-y-10 transition-all duration-500">
        <ul className="text-blackii/70 font-normal space-y-10">
          <li className="spacey-6">
            <p className="md:text-2xl text-xl text-blackii font-bold">Module Selection</p>
            <p className="md:text-base text-sm">Labwox will select a few high-demand modules, such as "Pesticides Analysis in Foods" and "Heavy Metals Analysis in Environmental Media," to offer as pilot training programs.</p>
          </li>
          <li className="spacey-6">
            <p className="md:text-2xl text-xl text-blackii hover:font-bold">Instructor Recruitment</p>
            <p className="md:text-base text-sm">We will identify and recruit experienced instructors with expertise in the selected modules.</p>
          </li>
          <li className="spacey-6">
            <p className="md:text-2xl text-xl text-blackii hover:font-bold">Participant Recruitment</p>
            <p className="md:text-base text-sm">Labwox will invite academics from higher education institutions to participate in the pilot training programs. We will target individuals or departments specializing in analytical chemistry.</p>
          </li>
          <li className="spacey-6">
            <p className="md:text-2xl text-xl text-blackii hover:font-bold">Training Sessions</p>
            <p className="md:text-base text-sm">The training sessions will be conducted in a dedicated, well-equipped training facility at Labwox. Each session will include a mix of theory and hands-on practice.</p>
          </li>
          <li className="spacey-6">
            <p className="md:text-2xl text-xl text-blackii hover:font-bold">Feedback and Evaluation</p>
            <p className="md:text-base text-sm">We will collect feedback from participants at the end of each module to assess the effectiveness of the training. This feedback will be used to refine and improve the program.</p>
          </li>
        </ul>

        <div className="px-8 py-14 bg-whitebgiii max-w-[526px] max-h-[623px] w-full h-full">
          <img src={poc} alt="Proof of Concept Image" className="w-full h-full object-cover"/>
        </div>
      </div>
    </section>
  )
}
