

const Experience = () => {
  return (
    <article className="h-5/6 w-full max-sm:p-5">
      <h1 className="text-4xl font-bold tracking-widest">Experienc<span className="text-lime-500">e</span></h1>
      <div className=" h-5/6 w-full bg-white/10 flex flex-col gap-5 rounded p-2 overflow-y-auto overflow-hidden mt-9">
        <div>
          <h1 className="text-2xl font-bold tracking-wider">ICS - <span> <span className="text-lime-300">Q</span>uality<span className="text-lime-300">C</span>ontrol </span></h1>
          <p className="font-semibold">MAY 2015 - DEC 2015</p>
          <li className="indent-10">  Insuring that the items meets the client needs, installation and checking of the other peripherals such as installing antivirus, checking of keyboard and mouse functionality, and monitor display.</li>
        </div>
        <hr className="border-2 border-lime-300" />
        <div>
          <h1 className="text-2xl font-bold tracking-wider">SSCC - <span><span className="text-lime-300">V</span>erifier / <span className="text-lime-300">QA</span></span></h1>
          <p>SEPT 2018 - MARCH 2024</p>
          <li className="indent-10">  We manage the quality of typing skills of encoders to secure the information of applicant in application form. Handle confidential documents and maintained their proper organization, and we developed a good organization as a team to provide a lot of production every sing day.</li>
        </div>
        <hr className="border-2 border-lime-300" />
      </div>  
    </article>
  )
}

export default Experience
