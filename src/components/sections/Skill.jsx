import SkillsModal from "../elements/SkillsModal"

const Skill = () => {
  return (
    <article className=" h-5/6 w-full max-sm:p-5">
      <h1 className="text-4xl font-bold tracking-widest">Skill<span className="text-lime-500">s</span></h1>
      <p className="mb-3">These are my skills I prepared in the past years:</p>
      <div className="h-5/6 w-full bg-white/10 flex flex-col gap-2 rounded p-2 overflow-y-auto overflow-hidden">
        <SkillsModal label='HTML' text="I can understand the basic syntax and structure for creating websites that are easy to read, maintain and scale. Implement semantic HTML, interact HTML forms."/>
        <SkillsModal label='CSS' text="I can use flexbox and grid in layouting the pages, Utilize pseudo-classes and pseudo elements, create a animations and etc. I can use frameworks Bootstrap and Tailwind."/>
        <SkillsModal label='JS' text="Basic knowledge in functions, arrow functions, IIFE. Arrays and array methods. Objects, object properties, object methods, object constructor. I have basic knowledge in DOM manipulation."/>
        <SkillsModal label='MongoDB' text="I can create database using MongoDB, I can manipulate the data, how to populate, how to create a relationship between database models. "/>
        <SkillsModal label='Express' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
        <SkillsModal label='NodeJS' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
        <SkillsModal label='ReactJS' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
        <SkillsModal label='Comm' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
        <SkillsModal label='Problem Solving' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
        <SkillsModal label='Learning' text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus ex, fugiat praesentium, sequi ab eum quisquam natus rem aliquam temporibus tempora mollitia placeat minima. Accusantium iusto error eaque ipsa!"/>
      </div>
    </article>
  )
}

export default Skill
