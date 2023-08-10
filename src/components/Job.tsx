export default function Job() {
    return (
        <div className="flex flex-col">
            <p className="heading">Job Experience</p>
            <div className="flex flex-col spacy-y-16">
                <div className="job">
                    <div className="flex flex-row justify-between">
                        <p className="self-center text-xl">ObjectStyle, LLC.</p>
                        <p className="self-center text-xs">10.2022 - present</p>
                    </div>
                    <p className="text-xs">Java Software Engineer</p>
                    <p className="text-xs text-justify">
                        As a java software engineer, I've developed inner company projects,
                        including open-source Apache Cayenne, Bootique, and Agrest.
                        I have implemented new functionality, created test cases,
                        and made several Proofs of Concepts(POC).
                    </p>
                </div>
                <div className="job">
                    <div className="flex flex-row justify-between">
                        <p className="self-center text-xl">EIS, LTD.</p>
                        <p className="self-center text-xs">08.2021 - 06.2022</p>
                    </div>
                    <p className="text-xs">Junior Java Developer</p>
                    <p className="text-xs text-justify">
                        As a junior java developer, I've participated in the whole development cycle:
                        from discussing and defining the scope of the tasks to implementing and integrating them
                        into the existing products. I was a part of the R&D team and was involved in developing
                        high-loaded event-driven microservice SaaS and PaaS insurance products.
                    </p>
                </div>
            </div>
        </div>
    );
}