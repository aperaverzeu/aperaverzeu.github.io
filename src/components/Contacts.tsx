export default function Contacts() {
    return (
        <div className="flex flex-col">
            <p className="heading">Contacts</p>
            <div className="flex flex-col">
                <div className="flex flex-row items-center rounded-2xl w-full border border-stone-50 p-3">
                    <i className="bi bi-linkedin text-3xl w-1/5"/>
                    <p className="text-xl w-4/5 self-center">LinkedIn</p>
                </div>
            </div>
        </div>
    );
}