const years: number = new Date().getFullYear() - new Date(2002, 2, 25).getFullYear();

export default function Header() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-8">
                <img className="avatar" src="/avatar.png" alt="avatar image"/>
                <div className="flex flex-col space-y-1 lg:space-y-7 self-center">
                    <p className="text-2xl lg:text-5xl leading-tight font-medium">Aliaksei Peraverzeu</p>
                    <p className="text-xs lg:text-xl">Java Software Engineer. {years} years👋🏻</p>
                    <div className="text-justify hidden lg:block text-2xl">
                        <p>
                            I am BSc in Computer Science and specialize on development complex information systems.
                        </p>
                        <br/>
                        <p>
                            I have experience in different aspects of software engineering from microservice
                            architecture and cloud-based development approach to plain old Java language and Spring
                            framework.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-justify lg:hidden">
                <p>
                    I am BSc in Computer Science and specialize on development complex information systems.
                </p>
                <br/>
                <p>
                    I have experience in different aspects of software engineering from microservice
                    architecture and cloud-based development approach to plain old Java language and Spring
                    framework.
                </p>
            </div>
        </div>
    );
}