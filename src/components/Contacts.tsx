export default function Contacts() {
    return (
        <div className="flex flex-col">
            <p className="heading-contacts">Contacts</p>
            <p className="mb-4 lg:mb-8">Feel free to contact with me ✍🏻</p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-20">
                <div className="flex flex-row justify-center items-center rounded-2xl w-full border border-stone-50 p-2">
                    <i className="bi bi-linkedin text-3xl text-center w-1/5"/>
                    <p className="text-xl text-center w-4/5">LinkedIn</p>
                </div>
                <div className="flex flex-row items-center rounded-2xl w-full border border-stone-50 p-2">
                    <i className="bi bi-github text-3xl text-center w-1/5"/>
                    <p className="text-xl text-center w-4/5">Github</p>
                </div>
                <div className="flex flex-row items-center rounded-2xl w-full border border-stone-50 p-2">
                    <i className="bi bi-mailbox text-3xl text-center w-1/5"/>
                    <p className="text-xl text-center w-4/5">Email</p>
                </div>
            </div>
        </div>
    );
}