import React, { useEffect, useState } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/layouts/AppLayout';
import AppBar from '../components/appbar';
import Food from '../components/cards/Food';
import Comments from '../components/comments/Comments';

const appbar = <AppBar title="Restaurant Detail" description=""/>

export default function RestoDetail() {
    const [restoDetail, setRestoDetail] = useState([])
    const { id } = useParams();

    useEffect(()=>{
        const fetchRestaurantDetail = async ()=>{
            const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
            const result = await response.json()
            if(!result.error){
                setRestoDetail(result.restaurant)
            }
          }
      
        fetchRestaurantDetail()
    },[])
  return (
    <AppLayout appbar={appbar}>
        <div className="flex items-stretch justify-between mx-auto w-full md:flex-row flex-col">
            <div style={{ backgroundImage: `url(https://restaurant-api.dicoding.dev/images/medium/${restoDetail?.pictureId})` }} className=" min-h-[200px] md:w-[45%] w-full bg-cover bg-center" />
                <div className="md:w-6/12 md:mt-0 mt-10">
                    <h1 className="mb-3 text-4xl lg:text-5xl font-semibold">{restoDetail.name}</h1>
                    <p  className="my-2 border-b pb-5">{restoDetail.description}</p>
                    <div className="my-2 pb-5 border-b my-4 flex gap-4">
                        {
                            restoDetail.categories?.map((category, index) => {
                                return (
                                    <div key={index} className="w-max border border-blue-950 text-blue-950 py-1 px-5">{category.name}</div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center">
                        {
                            Array.from({ length: parseInt('5' || '0') }, (_, index) => {
                                if (parseInt(restoDetail?.rating) < index + 1)
                                    return <BsStar className="mx-1" key={index} />
                                return <BsStarFill className="mx-1" key={index} />
                            })
                        }
                        <span className="ml-3 text-sm">
                            ({restoDetail.rating})
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="font-semibold mt-10 border-b pb-9 text-2xl font-semibold">Address</h2>
                <p>{restoDetail.address}, {restoDetail.city}</p>
                <h2 className="font-semibold mt-10 border-b pb-9 text-2xl font-semibold">Menus</h2>
                {restoDetail.menus && <Food menus={restoDetail.menus} />}
                <h2 className="font-semibold mt-10 border-b pb-9 text-2xl font-semibold">Comments</h2>
                {
                    restoDetail.customerReviews?.map((comments, index) => {
                        return (
                            <Comments comments={comments} key={index} />
                        )
                    })
                }
        </div>
    </AppLayout>
  )
}
