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
    <header className="py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-0 md:gap-2">
            <div>
              <Link href={`/`}>
                <Image
                  src={`/logo/logo.png`}
                  alt="Logo"
                  width={300}
                  height={100}
                  className="rounded-md w-8 md:w-10"
                />
              </Link>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="hover:bg-secondary w-10 h-10 flex justify-center items-center transition-all rounded-md border-0 shadow-none"
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
          <div>
            <AuthStateForDesktop />
          </div>
        </div>
        <hr className="mt-4" />
      </Container>
    </header>
  );
};

export default Header;
