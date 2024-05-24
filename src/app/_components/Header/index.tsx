import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Head() {
    return (
        <div
            className="h-28 w-screen bg-red-500
            "
        >
            <div
                className="h-5/6 w-[100%] bg-blue-200 flex 
                items-end justify-between
            "
            >
                {/* Logo Container */}
                <div
                    className="h-5/6 w-[130px]
                    bg-black flex
                    justify-center items-center
            "
                >
                    <p className="text-white text-xl">Logo</p>
                </div>

                {/* Input Container */}
                <div
                    className="h-5/6 bg-pink-300 
                flex items-center justify-center"
                    style={{
                        width: 'calc(60% - 130px)',
                    }}
                >
                    <div
                        className="h-4/6 w-[95%] bg-white
                        rounded-full flex pr-[2px]
                        items-center overflow-hidden
                        border-gray-400 border-[1px]

                        "
                    >
                        <input
                            type="text"
                            placeholder="Search"
                            className="
                            outline-none h-full pl-4
                            text-sm text-black
                            "
                            style={{
                                width: 'calc(100% - 43px)',
                            }}
                        />

                        <div
                            className="h-[43px] bg-green-400 
                            w-[43px] flex justify-center items-center
                            rounded-full
                            cursor-pointer

                            "
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="
                                text-white text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="h-5/6 bg-cyan-700
                    flex justify-center items-center
                    flex-col 
                "
                    style={{
                        width: '30%',
                    }}
                >
                    <div
                        className="h-2/6 w-5/6 bg-yellow-400 mb-[7px]
            rounded-sm flex justify-center items-center
            cursor-pointer
          "
                    >
                        <p className="text-black text-xs">
                            Become a member
                        </p>
                    </div>
                    <div
                        className="h-2/6 w-5/6 bg-yellow-400
            rounded-sm flex justify-center items-center
            cursor-pointer

          "
                    >
                        <p className="text-black text-xs">
                            Workbook Store
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
