export default function Header() {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-8 ">
                <img className="w-24 h-24 rounded-3xl object-cover"
                     src="/avatar.png" alt="avatar image"/>
                <div className="flex flex-col space-y-1 self-center">
                    <p className="text-2xl leading-tight font-medium">Aliaksei (Leszek) Peraverzeu</p>
                    <p className="text-xs">Java Software Engineer. 21 years👋🏻</p>
                </div>
            </div>
            <div className="text-justify">
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