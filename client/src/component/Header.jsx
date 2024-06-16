import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Header = () => {
   const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap dark:text-white text-sm sm:text-xl font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded text-white">
          Shivam
        </span>
        Blog
      </Link>
      <form>
        <div className="relative w-full hidden lg:flex">
          <TextInput
            placeholder="Search..."
            type="text"
            className="pr-10 " // Ensure padding-right to accommodate the icon
          />
          <AiOutlineSearch className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </form>
      <Button
        className="w-12 h-12 lg:hidden flex items-center justify-center rounded-full"
        color="gray"
      >
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 rounded-full hidden sm:inline"
          color="gray"
        >
          <FaMoon />
        </Button>
        <Link to="/signup">
          <Button className="px-3 bg-gradient-to-r from-purple-500 to-blue-500">
            Sign Up
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
