"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePopStore } from "stores/popStore";

export default function Topbar() {
  const session = useSession();

  const isOpen = usePopStore((state) => state.isOpen);
  const openPop = usePopStore((state) => state.openPop);
  const closePop = usePopStore((state) => state.closePop);
  const handlePopup = () => {
    if (isOpen) {
        console.log("Closing popup");
      closePop();
    } else {
        console.log("Opening popup");
      openPop();
      console.log(isOpen);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center backdrop-blur-sm bg-white/20 border-b border-white/10 shadow-md shadow-black/5">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        {/* Logo Icon */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
          <span className="text-white font-bold text-lg drop-shadow-sm">N</span>
        </div>

        {/* Logo Text */}
        <span className="text-blue-600 font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent drop-shadow-sm">
          NotForms
        </span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Create Form Button */}
        {/* <button className="hidden sm:block text-blue-600 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-blue-50/40 hover:backdrop-blur-sm hover:scale-105 hover:shadow-md hover:shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-300/50 border border-blue-200/30 bg-white/30">
                    Create Form
                </button> */}

        {/* Mobile Create Form Button */}
        <Button
          onClick={handlePopup}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:ring-offset-2 focus:ring-offset-white/10 backdrop-blur-sm border border-white/10"
        >
          Create Form
        </Button>

        {/* Auth Button */}
        {/* <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-300/50 focus:ring-offset-2 focus:ring-offset-white/10 backdrop-blur-sm border border-white/10">
                    
                </button> */}
        <Button>
          {session.data?.user ? (
            <span
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-sm sm:text-base"
            >
              Log Out
            </span>
          ) : (
            <span onClick={() => signIn()} className="text-sm sm:text-base">
              Sign In
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
