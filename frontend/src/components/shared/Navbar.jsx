import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex item-center gap-12">
          <ul className="flex font-medium gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browser">Browser</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup </Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:scale-105 transition-transform">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-70 p-4 rounded-xl shadow-lg bg-white border">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold"> Hey Amank Arya</h4>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum, consectetur.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col mt-2 space-y-1">
                  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                    <User2 className="w-5 h-5 text-gray-600" />
                    View Profile
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg transition">
                    <LogOut className="w-5 h-5 text-red-600" />
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
