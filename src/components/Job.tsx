export default function Job() {
    return (
        <div className="flex flex-col">
            <p className="heading">Job Experience</p>
            <div className="flex flex-col space-y-4 lg:space-y-12">
                <div className="job">
                    <div className="flex flex-row justify-between">
                        <p className="self-center text-xl lg:text-4xl font-medium">Gap Year</p>
                        <p className="self-center lg:text-2xl">11.2023 - 11.2024</p>
                    </div>
                    <p>Curious explorer</p>
                    <p className="text-justify">
                        I spent my gap year exploring new horizons and gaining valuable life experiences.
                        It was a time of personal growth, where I traveled around the world,
                        engaged in volunteering, and discovered more about my passions and future aspirations.
                    </p>
                </div>
                <div className="job">
                    <div className="flex flex-row justify-between">
                        <p className="self-center text-xl lg:text-4xl font-medium">ObjectStyle, LLC.</p>
                        <p className="self-center lg:text-2xl">10.2022 - 11.2023</p>
                    </div>
                    <p>Java Software Engineer</p>
                    <p className="text-justify">
                        As a java software engineer, I've developed inner company projects,
                        including open-source Apache Cayenne, Bootique, and Agrest.
                        I have implemented new functionality, created test cases,
                        and made several Proofs of Concepts(POC).
                    </p>
                </div>
                <div className="job">
                    <div className="flex flex-row justify-between">
                        <p className="self-center text-xl lg:text-4xl font-medium">EIS, LTD.</p>
                        <p className="self-center lg:text-2xl">08.2021 - 06.2022</p>
                    </div>
                    <p>Junior Java Developer</p>
                    <p className="text-justify">
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