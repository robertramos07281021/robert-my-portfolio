import CertCards from "../elements/CertCard"

const Certificate = () => {
  return (
    <article className="h-5/6 w-full max-sm:p-5">
      <h1 className="text-4xl font-bold tracking-widest">Certificate<span className="text-lime-500">s</span></h1>
      <div className=" h-5/6 w-full bg-white/10 flex max-sm:justify-center flex-wrap gap-5 rounded p-2 overflow-y-auto overflow-hidden mt-9">
      <CertCards title="KodeGo Cert" desc="Full Stack Web Dev" year="2023" src='./src/assets/KodeGo-CERT.PNG' href='http://localhost:5173/src/assets/KodeGo-CERT.PNG'/>
      </div>
    </article>
  )
}

export default Certificate
