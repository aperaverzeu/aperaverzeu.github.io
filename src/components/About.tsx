export default function About() {
    return (
        <div className="flex flex-col lg:w-[62.5rem]">
            <p className="heading">About</p>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-20 text-justify">
                <div className="flex flex-col space-y-3 lg:space-y-10 lg:w-[28rem]">
                    <p>
                        I like cycling, enjoy creating music and writing science articles.
                    </p>
                    <p>
                        I am a big fan of linguistic and already know a couple of languages such as English,
                        Polish, Czech and I wanna learn Chinese, and German.
                    </p>
                </div>
                <div className="flex flex-col space-y-3 lg:w-[28rem]">
                    <p>
                        I have been participating in university volunteering movement, where
                        I was a teacher of CS and Java for freshmen.
                    </p>
                    <p>
                        Also I was a member of different scientific and economic conferences.
                        I dream about management career in the future.
                    </p>
                </div>
            </div>
        </div>
    );
}