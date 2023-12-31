import Header from "./components/Header.tsx";
import Skills from "./components/Skills.tsx";
import Job from "./components/Job.tsx";
import About from "./components/About.tsx";
import Contacts from "./components/Contacts.tsx";

export default function App() {
    return (
        <div className="app">
            <Header/>
            <Skills/>
            <Job/>
            <About/>
            <Contacts/>
        </div>
    )
}
