import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { setAuth } from "@/redux/features/auth/authSlice";
import { setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TApiErrorResponse } from "@/types";
import { CircleUserRound, Gauge, LogOutIcon, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfileSettings = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ user }) => user);
  const [logout] = useLogOutMutation();

  const handleLogout = async () => {
    try {
      await logout({}).unwrap();
      dispatch(setAuth({ user: null, token: null, isLoading: false }));
      dispatch(setUser(null));
      router.push("/");
    } catch (err) {
      const error = err as TApiErrorResponse;
      toast.error(error?.data?.errorMessages![0]?.message);
    }
  };
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={user?.profile?.picture}
              alt="User profile picture"
              className="cursor-pointer select-none"
            />
            <AvatarFallback className="select-none cursor-pointer">
              {user?.fullName
                ?.split(" ")
                .slice(0, 2)
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-center">
            {user?.fullName}
          </DropdownMenuLabel>
          <p className="text-xs text-center">{user?.email}</p>
          <DropdownMenuSeparator />
          {/*  */}
          <DropdownMenuGroup>
            <Link href={`/user`}>
              <DropdownMenuItem className="cursor-pointer">
                Profile
                <DropdownMenuShortcut>
                  <CircleUserRound className="w-5 h-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <Link href={`/`}>
              <DropdownMenuItem className="cursor-pointer">
                Settings
                <DropdownMenuShortcut>
                  <Settings className="w-5 h-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/*  */}
          <DropdownMenuGroup>
            <Link href={`/dashboard`}>
              <DropdownMenuItem className="cursor-pointer">
                Dashboard
                <DropdownMenuShortcut>
                  <Gauge className="w-5 h-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/*  */}
          <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
            Log out
            <DropdownMenuShortcut>
              <LogOutIcon className="w-5 h-5" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileSettings;
