import ProjectModal from "../components/elements/ProjectModal"
import { getImageUrl } from "../utils"

const Project = () => {
  return (
    <section className="2xl:w-full h-screen flex items-center max-sm:flex-col pt-20 text-white justify-center 2xl:px-36 md:px-5 md:gap-5" id="projects">
      <div className="2xl:w-10/12 2xl:h-4/6 max-sm:h-[640px] max-sm:w-full px-5 flex flex-col max-sm:pt-10 ">
        <h1 className="text-4xl font-bold text-white 2xl:pb-5 md:pb-5 tracking-widest">Project<span className="text-lime-300">s</span></h1>  
        <div className=" 2xl:w-full 2xl:h-full xl:w-full xl:h-full max-sm:h-full flex justify-center items-center gap-32 max-sm:gap-4 2xl:mb-5 overflow-y-auto overflow-hidden 2xl:py-2 flex-wrap">
          <ProjectModal title='Project Listing' description='This is a simple CRUD site projects on KodeGo' image={getImageUrl('projectListing.PNG')} link='https://listingproject.onrender.com/listings' danger={false}/>
          <ProjectModal title='GSOInventorySys' description='This is our capstone project in KodeGo' image={getImageUrl('gsoInventorySys.PNG')} link='https://gsoinvsystemnodejs.onrender.com' danger={true}/>
          <ProjectModal title='Post_site' description='For study on how to make MERN stack and deploy.' image={getImageUrl('post_site.PNG')} link='https://mern-2024-d7w4.onrender.com' danger={false}/>
          <ProjectModal title='Food Nouveau' description='This is our MP2 on KodeGo using MEVN stack' image={getImageUrl('food_nouveau.PNG')} link='https://food-nouveau-mevn.onrender.com/' danger={false}/>
          <ProjectModal title='MEVN_Todo' description='For study on how to make MEVN stack and deploy.' image={getImageUrl('MEVN_Stack.PNG')} link='https://todolist-mevn.onrender.com/' danger={false}/>
        </div>
      </div>
    </section>
  )
}

export default Project
