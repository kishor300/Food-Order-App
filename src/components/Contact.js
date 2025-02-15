const Contact = () => {
    return (
        <>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form action="">
                <input
                    type="text"
                    className="border-b-[1px] p-2 m-2 outline-none"
                    placeholder="Name"
                />
                <input
                    type="text"
                    className="border-b-[1px] p-2 m-2 outline-none"
                    placeholder="Message"
                />
                <button
                    className="p-2 m-2 bg-orange-400 rounded-md"
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Contact;