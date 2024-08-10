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
        <SkillsModal label='Express' text="I can create middlewares, error handlers routing and http methods, i can easyly connect my app to databases, how to have a good RESTFULL API."/>
        <SkillsModal label='NodeJS' text="I can efficiently handles thousands of current connection to avoids the complexities of managing thread concurrency that can bring a bug, I can have a full stack website on this server, just add express and mongodb techstack."/>
        <SkillsModal label='ReactJS' text="I can prepare a good file arrangement, I can use hooks, create a components, I can use props, proptypes, default props value."/>
        <SkillsModal label='VueJS' text="In this field, using Composition API setup I can give you a good approach on props, directives, routing etc. "/>
        <SkillsModal label='Comm' text="I can communicate to other software engineers, and team to other, can borrow any kind of suggestions."/>
        <SkillsModal label='Problem Solving' text="I cannot assure if I can solve the problem but I can assure i will find the answer on that problem, I can work in critical situations, I work in agile environment."/>
        <SkillsModal label='Learning' text="I am not a fast learner but I am willing to learn from others whether it is jr, middle, or senior software engineers, and I am willing to adopt other tech stacks, and I always want to stay a student."/>
      </div>
    </article>
  )
}

export default Skill
