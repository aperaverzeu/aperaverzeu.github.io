export default function Skills() {
    return (
        <div className="flex flex-col">
            <p className="heading">Skills</p>
            <div className="grid grid-cols-8 gap-4 lg:grid-cols-10 lg:gap-5">
                <p className="skill col-span-3 lg:col-span-3">Java</p>
                <p className="skill col-span-5 lg:col-span-2">Spring</p>
                <p className="skill col-span-5 lg:col-span-2">Docker</p>
                <p className="skill col-span-3 lg:col-span-1">AWS</p>
                <p className="skill col-span-4 lg:col-span-2">Apache Kafka</p>
                <p className="skill col-span-4 lg:col-span-2">Agile / Scrum</p>
                <p className="skill col-span-4 lg:col-span-2">SQL & NoSQL</p>
                <p className="skill col-span-4 lg:col-span-2">ELK stack</p>
                <p className="skill col-span-3 lg:col-span-3">K8s</p>
                <p className="skill col-span-5 lg:col-span-1">etc.</p>
                <p className="skill-link col-span-6 lg:col-span-3 flex flex-row justify-center items-center">
                    <i className="bi bi-linkedin text-3xl text-center w-1/2"/>
                    <p className="text-start w-full lg:mr-6">more on LinkedIn</p>
                </p>
            </div>
        </div>
    );
}