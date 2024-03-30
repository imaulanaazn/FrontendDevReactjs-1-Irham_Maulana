import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import {BiShare} from "react-icons/bi";

export default function Comments({comments}) {
  return (
    <div className="flex items-center justify-between border-b pb-5">
        <div>
            <p className="font-semibold">{comments.name}</p>
            <p className="text-gray-500 mt-2">{comments.review}</p>
            <div className="flex space-x-2 mt-2">
                <button className="p-1 border-none focus:ring-0 text-gray-500 text-[14px] flex flex-col items-center"><AiOutlineHeart className="mr-2"/> Like</button>
                <button className="p-1 border-none focus:ring-0 text-gray-500 text-[14px] flex flex-col items-center"><BiShare className="mr-2"/> Share</button>
            </div>
        </div>
        <p className="mb-4" >{comments.date}</p>
    </div>
  )
}
