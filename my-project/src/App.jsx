


import authService from "./appwrite/auth";
import {Header,Footer} from "./components/index"
import { useEffect, useState } from "react";
 import {login,logout}from "./store/authSlice"

import { useDispatch } from "react-redux";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  });

  return  !loading ?(
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      
      <div className="w-full block">
        <Header/>
        <main>

        </main>

        <Footer/>
      </div>

    </div>
  ):null
}
