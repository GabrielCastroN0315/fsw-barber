import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./sheet";
import { quickSearchOption } from "@/app/_constants/search";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./avatar";
import Link from "next/link";
import SidebarButton from "./sidebar-button";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.png" height={18} width={120} />
        <SidebarButton />
      </CardContent>
    </Card>
  );
};

export default Header;
