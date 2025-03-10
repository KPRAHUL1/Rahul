import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row items-center justify-center ">
      <nav className="fixed bottom-10 bg-white/30 backdrop-blur-md z-40 shadow-md px-3 py-2 rounded-full flex flex-row md:gap-5 items-center">
        <div onClick={()=>navigate("/")}><Avatar classes={"cursor-pointer"} sx={{ width: 40, height: 40 }} className="cursor-pointer"/></div>

        <ul className="flex flex-row md:gap-7">
          {["About", "Projects", "Blog", "Contact"].map((item, index) => (
            <li
              key={index}
              className="rounded-full md:text-[15px] text-xs hover:bg-gray-200 px-3 py-2 font-medium transition cursor-pointer"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
