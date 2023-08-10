export default function Header() {
    return (
        <div className="flex flex-row space-x-8 w-[20.625rem]">
            <img className="w-[100px] h-[220px] rounded-[30px] object-cover"
                 src="/src/assets/avatar.png" alt="avatar image"/>
            <div className="flex flex-col space-y-3">
                <p className="text-[1.5rem]">Aliaksei (Leszek) Peraverzeu</p>
                <p className="text-[0.75rem] font-medium">Java Software Engineer. 21 years👋🏻</p>
                <p className="text-[0.625rem] font-normal text-justify">
                    I am BSc in Computer Science and specialize on development complex information systems.
                    I have experience in different aspects of software engineering from microservice
                    architecture and cloud-based development approach to plain old Java language and Spring framework.
                </p>
            </div>
        </div>
    );
}