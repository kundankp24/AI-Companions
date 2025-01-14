import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "./sidebar";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4"><Menu/></SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
        <SheetHeader>
          <Sidebar/>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}