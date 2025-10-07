import React, { useEffect, useState } from 'react';

const WishList = () => {

    const [wishlist,setWishlist]=useState([])
  
    useEffect(()=>{
     const existingData=JSON.parse(localStorage.getItem("wishlist"))
     setWishlist(existingData)
    },[])

    const removeWishlist=(id)=>{
 const remaininData =wishlist.filter(e=>e.id !==id);

 const existingData = JSON.parse(localStorage.getItem("wishlist"));
 const filLocalData=existingData.filter(e=>e.id !==id)
 localStorage.setItem("wishlist", JSON.stringify(filLocalData));
 setWishlist(remaininData);
 

    }
    return (
      <div>
        <div className="flex justify-between items-center">
          <h1>WishList {wishlist.length}</h1>

          <button>sort</button>
        </div>

        {/*  <div className="">
          {wishlist.map((e) => (
            <div className="flex">
              <img className="w-[20%]" src={e.image} />
              <h3>{e.name}</h3>
            </div>
          ))}
        </div> */}
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
                    <button onClick={()=>removeWishlist(e.id)} className="btn btn-error btn-xs">Remove</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default WishList;