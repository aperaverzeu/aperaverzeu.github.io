export default function About() {
    return (
        <div className="flex flex-col">
            <p className="heading">About</p>
            <div className="flex flex-col space-y-6 text-justify">
                <div className="flex flex-col space-y-3">
                    <p>
                        I like cycling, enjoy creating music and writing science-like article.
                    </p>
                    <p>
                        I am a big fan of linguistic and already know a couple of languages such as English,
                        Polish, Czech, Ukrainian and I wanna learn Chinese, and German.
                    </p>
                </div>
                <div className="flex flex-col space-y-3">
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