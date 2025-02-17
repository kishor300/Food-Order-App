const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form
                action=""
                className="flex flex-col gap-3 items-center sm:flex-row">
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
                    className="p-2 m-2 bg-orange-500 text-white font-medium rounded-md w-28"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;