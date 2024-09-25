import Nav from "../src/components/Nav"
import {Store, Latest, Help, ASDifference, Accessories, LoudAndClear, AppleExperience, SpecialStore, Footer} from "../src/sections/index"

export default function App() {
  return (
    <main className="relative bg-gray-100"> 
      <Nav />
      <section className="max-xl:pl-8  max-xl:pr-8 xl:padding-x padding-y">
        <Store />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <Latest />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <Help />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <ASDifference />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <Accessories />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <LoudAndClear />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <AppleExperience />
      </section>
      <section className="max-xl:pl-8 padding-l padding-b">
        <SpecialStore />
      </section>
      <section className="max-xl:px-8 padding-x">
        <Footer />
      </section>
    </main>
  )
}