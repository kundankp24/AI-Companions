"use client";

import {Menu, Sparkles} from "lucide-react"
import Link from "next/link";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {MobileSidebar} from "./mobile-Sidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font= Poppins({
    weight: "600",
    subsets: ["latin"]
})
interface NavbarProps{
  isPro: boolean
};

export const Navbar = ({isPro}: NavbarProps) => {

  const proModel= useProModal();
  return (
    <div className="fixed w-full z-50 flex justify-between items-center 
        py-2 px-4 border-b border-primary/10 bg-secondary h-16"
    >
      <div className="flex items-center">
        <MobileSidebar/>
        <Link href="/"> 
            <h1 className={cn(
                "hidden md:block text-xl md:text-3xl font-bold text-primary",
                font.className
                )}>
                Companion.ai
            </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        {!isPro && (
          <Button variant="premium" size="sm" onClick={proModel.onOpen}>
            Upgrade
            <Sparkles className="h-4 w-4 fill-white text-white ml-2"/>
          </Button>
        )}
        <ModeToggle/>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};
