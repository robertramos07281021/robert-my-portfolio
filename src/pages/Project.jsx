import ProjectModal from "../components/elements/ProjectModal"
import { getImageUrl } from "../utils"

const Project = () => {
  return (
    <section className="w-full min-h-screen flex xs:flex-col xs:pt-20 lg:pt-28  2xl:px-36 md:px-5 md:gap-5" id="projects">
      <div className="2xl:w-full max-sm:w-full px-5 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white 2xl:pb-5 md:pb-5 tracking-wide ps-4">Project<span className="text-lime-300">s</span></h1>  
        <div className="flex gap-10 flex-wrap lg:p-10  justify-center">
          <ProjectModal title='GSOInventorySys' description='This is our capstone project in KodeGo. It can handle the flow of inventory in every department of a station.' image={getImageUrl('gsoInventorySys.PNG')} link='https://gsoinvsystemnodejs.onrender.com' danger={true} tech='NodeJS, Express, MongoDB - NoSQL'/>
          <ProjectModal title='Food Nouveau' description='This is our MP2 on KodeGo, It focus on API and you can add you own recipe.' image={getImageUrl('food_nouveau.PNG')} link='https://food-nouveau-mevn.onrender.com/' danger={false} tech='MEVN - NoSQL'/>   
          <ProjectModal title='Project Listing' description='This is a simple CRUD site projects on KodeGo that can add listing and it can adds some reviews on that listings.' image={getImageUrl('projectListing.PNG')} link='https://listingproject.onrender.com/listings' danger={false} tech='NodeJS,Express,MongoDB - NoSQL'/>
          <ProjectModal title='HanapBahay' description='A project that can add house, apartment, or room for rent that can help the landlord to stablished thier properties and it can help the peope who needs rent for thier families.' image={getImageUrl('Hanap_Bahay.PNG')} link='https://hanapbahay-project.onrender.com/' danger={false} tech="MERN - NoSQL"/>
          <ProjectModal title='Book Collections' description='You can post your books on this site. ' image={getImageUrl('Book_Collections.PNG')} link='https://book-project-mysqlern.onrender.com/' danger={false} tech="MERN - SQL" />
          <ProjectModal title='Post site' description='For study on how to make MERN stack and deploy.' image={getImageUrl('post_site.PNG')} link='https://mern-2024-d7w4.onrender.com' danger={false} tech="MERN - NoSQL"/>
          <ProjectModal title='MEVN Todo' description='For study on how to make MEVN stack and deploy.' image={getImageUrl('MEVN_Stack.PNG')} link='https://todolist-mevn.onrender.com/' danger={false} tech="MEVN - NoSQL"/>
        </div>
      </div>
    </section>
  )
}

export default Project
