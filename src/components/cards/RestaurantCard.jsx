import { BsStar, BsStarFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import formatToRupiah from "../../utils/format";

const RestaurantCard = ({ data }) => {
    return (
        <div className="w-full min-w-[max-content]">
            <div style={{ backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${data.pictureId})` }} className="w-full h-[200px] bg-center bg-cover" />
            <p className="leading-7 mt-2 text-lg font-medium">
                {data.name}
            </p>
            <div className="w-[100px] h-[20px] rounded-lg my-2 flex">
                {
                    Array.from({ length: parseInt('5' || '0') }, (_, index) => {
                        if (parseInt(data.rating) < index + 1)
                            return <BsStar className="mx-1" key={index} />
                        return <BsStarFill className="mx-1" key={index} />
                    })
                }
            </div>
            <div className="flex justify-between items-end">
                <p className="text-gray-600 flex flex-col">
                    {data.city}
                    <span className="flex items-center ml-1">
                    {formatToRupiah(data.price)}
                    </span>
                </p>
                <p className="text-gray-600 flex items-center"></p>
                <div className="flex items-center gap-1">
                    <GoDotFill color={data.open ? "lime" : "red"}/>
                    <p className="text-gray-600">
                        {data.open ? "OPEN NOW" : "CLOSED"}
                    </p>
                </div>
            </div>
            <Link to={`/restaurant/${data.id}`}>
                <button className="w-full p-2 mt-3 rounded-none uppercase text-sm flex justify-center bg-blue-950 border border-blue-950 text-white hover:bg-white hover:text-blue-950 transition-all ">
                    learn more
                </button>
            </Link>
        </div>
    );
}

export default RestaurantCard;