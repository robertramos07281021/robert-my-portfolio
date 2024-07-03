

const Education = () => {
  return (
    <article className="h-5/6 w-full max-sm:p-5">
      <h1 className="text-4xl font-bold tracking-widest">Educatio<span className="text-lime-500">n</span></h1>
      <div className=" h-5/6 w-full bg-white/10 flex flex-col gap-5 rounded p-2 overflow-y-auto overflow-hidden mt-9">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">Access Computer Colleges - <span> <span className="text-lime-300">BS</span> in <span className="text-lime-300">I</span>nformation <span className="text-lime-300">T</span>echnology</span></h1>
          <p className="font-semibold">2010 - 2014</p>
     
        </div>
        <hr className="border-2 border-lime-300" />
        <div>
          <h1 className="text-2xl font-bold tracking-wider">KodeGo Bootcamp - <span><span className="text-lime-300">F</span>ull <span className="text-lime-300">S</span>tack <span className="text-lime-300">W</span>eb <span className="text-lime-300">D</span>eveloper</span></h1>
          <p className="font-semibold">2023</p>
        </div>
      </div>  
    </article>
  )
}

export default Education
