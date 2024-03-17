import React from 'react'

function Event() {
  return (
    <div >
        <form className="p-6 flex flex-col justify-center">
            <div className='border-[1px] border-black rounded-lg px-5 py-3'>
                            <div className="flex flex-col">
                                <label for="name" className="hidden">
                                    Event Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="text" className="hidden">
                                    Image
                                </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Thumbnail File"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="text" className="hidden">
                                    Text
                                </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Enter Title"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label for="text" className="hidden">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Description"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Create Event
                            </button>
                            </div>
                        </form>
    </div>
  )
}

export default Event