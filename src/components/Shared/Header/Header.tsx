import Container from "@/components/Container/Container";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthStateForDesktop from "./AuthStateForDesktop";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="">
            <div>
              <Link href={`/`}>
                <Image
                  src={`/logo/logo.png`}
                  alt="Logo"
                  width={175}
                  height={35}
                  className="w-[87.5px] h-[17.5px] lg:w-[175px] lg:h-[35px]"
                  priority
                />
              </Link>
            </div>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="hover:bg-secondary w-10 h-10 flex justify-center items-center transition-all rounded-lg border-0 shadow-none"
                >
                  <AlignJustify className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="p-0 pt-10">
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
                <div>
                  <NavLinks />
                </div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:flex gap-4">
            <NavLinks className="flex-row" />
          </div>
          <div className="hidden lg:flex gap-4">
            <AuthStateForDesktop />
          </div>
        </div>
        <hr />
      </Container>
    </header>
  );
};

export default Header;
