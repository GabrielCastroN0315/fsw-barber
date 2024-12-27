import Image from "next/image";
import { Card, CardContent } from "./card";

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
