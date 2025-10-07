import React, { useEffect, useState } from 'react';
import Rechart from '../components/Rechart';

const WishList = () => {

    const [wishlist,setWishlist]=useState([])
    const [sort,setSort]=useState("")

    useEffect(()=>{
     const existingData=JSON.parse(localStorage.getItem("wishlist"))
     setWishlist(existingData)
    },[])

    const removeWishlist=(id)=>{
 const remaininData =wishlist.filter(e=>e.id !==id);

 setWishlist(remaininData);
 const existingData = JSON.parse(localStorage.getItem("wishlist"));
 const filLocalData=existingData.filter(e=>e.id !==id)
 localStorage.setItem("wishlist", JSON.stringify(filLocalData));

    }

    const handleSort=(data)=>{
        setSort(data)
if (data === "lowtohigh") {
    const lh = [...wishlist].sort((a,b)=>a.price - b.price)
setWishlist(lh)
}


if (data === "hightolow") {
  const hl = [...wishlist].sort((a, b) => b.price - a.price);
  setWishlist(hl);
}

    }
    return (
      <div>
        <div className="flex justify-between items-center">
          <h1>WishList {wishlist.length}</h1>

          <div className="dropdown my-5">
            <div tabIndex={0} role="button" className="btn m-1">
              sort by : {sort && sort}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("lowtohigh")}>Low to High</a>
              </li>
              <li>
                <a onClick={() => handleSort("hightolow")}>High to Low</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((e) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={e.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{e.name}</div>
                        <div className="text-sm opacity-50">{e.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>{e.description}</td>
                  <td>${e.price}</td>
                  <th>
                    <button
                      onClick={() => removeWishlist(e.id)}
                      className="btn btn-error btn-xs"
                    >
                      Remove
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=" md:w-[70%] w-full mx-auto ">
          <Rechart data={wishlist} />
        </div>
      </div>
    );
};

export default WishList;