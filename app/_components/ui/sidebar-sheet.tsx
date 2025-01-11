"use client"

import Image from "next/image";
import { Button } from "./button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "./sheet";
import { quickSearchOption } from "@/app/_constants/search";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";

const SidebarSheet = () => {

  const{data} = useSession();
  const handleLoginWithGoogleClick = () => signIn("google")
  const handleLoginWithFacebookClick = () => signIn("facebook")
  const handleSignOut = () => signOut()

    return (  

         <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            
            <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
              {data?.user ? (
                <div className="flex items-center gap-2">
                  <Avatar>
                  <AvatarImage src={data?.user?.image ?? ""} />
                  </Avatar>
                  <div>
                    <p className="font-bold">{data.user.name}</p>
                    <p className="text-xs">{data.user.email}</p>
                  </div>
                  </div>
                  ) : (
                    <>
                    <h2 className="font-bold">Olá, faça seu login!</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="icon">
                    <LogInIcon className="text-purple-700"/> 
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                <DialogHeader>
          <DialogTitle>Faça login na plataforma</DialogTitle>
          <DialogDescription>
            Conecte-se usando sua conta Goolge
          </DialogDescription>
          </DialogHeader>
          <Button onClick={handleLoginWithGoogleClick} variant="outline" className="gap-1 font-bold">
              <Image alt="Fazer login com o Google" src="/google.svg" width={18} height={18} />
              Google
            </Button>
            <Button onClick={handleLoginWithFacebookClick} variant="outline" className="gap-1 font-bold">
              <Image alt="Fazer login com o Facebook" src="/facebook-app.png" width={18} height={18} />
              Facebook
            </Button>
                </DialogContent>
              </Dialog></>
            )}
              
            </div>
            <div className="flex flex-col gap-1 py-5 boder-b border-solid">
                <SheetClose asChild>
              <Button className="justify-start gap-2" variant="ghost" asChild>
                <Link href="/">
                <HomeIcon size={18} />
                Início 
                </Link>
              </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} /> 
                Agendamento</Button>
            </div>

            <div className="flex flex-col gap-1 py-5 boder-b border-solid">
                {quickSearchOption.map((option) => (
                <Button key={option.title} className="justify-start gap-2"
                variant="ghost">
                    <Image alt={option.title} src={option.imageUrl} height={18} width={18} />
                    {option.title}
                </Button>
                ))}
            </div>


            <div className="flex flex-col gap-2 py-5">
                <Button onClick={handleSignOut} variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18}/>Sair da conta</Button>
            </div>
          </SheetContent>
        </Sheet>
    );
}
export default SidebarSheet;