import React from "react";
import { useState } from "react";
import { maleShopper } from "../assets/images";
import SubscriptionForm from "../components/SubscriptionForm";
import Button from "../components/Button";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Subscribe = () => {

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription=()=>{
    if(!isSubscribed){
    setIsSubscribed(true);
    toast.success("Thank you for subscribing");
  }
}

  
  

  
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center space-y-16 md:space-y-0 md:space-x-32
     max-w-full rounded-lg  mx-auto mt-16 p-8  "
      >
        <div className="w-full xs:w-[80%] h-auto md:w-1/2 xl:w-2/5">
          <img
            src={maleShopper}
            alt="a male shopping"
            className="object-cover w-full"
          />
        </div>
        <div>
          <div className=" w-full flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-base font-normal mb-4">10% discount</p>
            <h1 className="text-4xl font-bold mb-2">Subscribe and Get 10% off</h1>
            <p className="text-sm font-light mb-4">Looking for a discount code for your surprise?</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <SubscriptionForm className="w-full sm:w-3/4"/>
            <Button handleSubscription={handleSubscription} />
            <ToastContainer theme="dark"/>
          </div>
          <p className="mt-3 font-light">Subscribe to our newsletter and get your discount code</p>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
