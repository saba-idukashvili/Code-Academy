import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ActivityIcon,
  BookIcon,
  ClockIcon,
  CodeIcon,
  Menu,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Course from "./Course";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export function Dashboard() {
  return (
    <div className="flex h-auto py-4 w-full">
      <main className="flex-1 dark:bg-gray-950 p-3">
        <div className="md:hidden"></div>
        <div className="flex flex-col justify-between md:flex-row items-center mb-6">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">
            Coding Fundamentals
          </h1>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <SearchIcon className="w-5 h-5 mr-2" />
              Search
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="p-2 flex-col gap-4">
                  <Link className="flex items-center gap-2" href="#">
                    <CodeIcon className="w-6 h-6" />
                    <span className="text-lg my-4 font-semibold">Code Academy</span>
                  </Link>
                  <div className="flex flex-col gap-2">
                    <Link
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md"
                      href="#"
                    >
                      <BookIcon className="w-5 h-5" />
                      <span>Courses</span>
                    </Link>
                    <Link
                      className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-md"
                      href="#"
                    >
                      <ActivityIcon className="w-5 h-5" />
                      <span>Progress</span>
                    </Link>
                    <Link
                      className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 rounded-md"
                      href="#"
                    >
                      <UserIcon className="w-5 h-5" />
                      <span>Profile</span>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div>
          <Course />
        </div>
      </main>
    </div>
  );
}
