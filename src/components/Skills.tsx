export default function Skills() {
    return (
        <div className="flex flex-col">
            <p className="heading">Skills</p>
            <div className="grid grid-cols-8 gap-4">
                <p className="skill col-span-3">Java</p>
                <p className="skill col-span-5">Spring</p>
                <p className="skill col-span-5">Docker</p>
                <p className="skill col-span-3">AWS</p>
                <p className="skill col-span-4">Apache Kafka</p>
                <p className="skill col-span-4">Agile / Scrum</p>
                <p className="skill col-span-4">SQL & NoSQL</p>
                <p className="skill col-span-4">ELK stack</p>
                <p className="skill col-span-3">K8s</p>
                <p className="skill col-span-5">etc.</p>
                <p className="skill-link col-span-5 flex flex-row justify-center items-center space-x-6">
                    <i className="bi bi-linkedin text-3xl"/>
                    <p className="align-middle">more on LinkedIn</p>
                </p>
            </div>
        </div>
    );
}