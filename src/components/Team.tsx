import team from "../assets/team.png";
import x2 from "../assets/x2.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20 mt-28">
      <div className="">
        <h1 className="text-center text-4xl">MEET OUR TEAM</h1>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-10 w-full mx-10 items-center justify-center">
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl mt-2">Shwatas Dhake</h1>
          <p className="mt-1">Backend Developer</p>
          <div className="flex gap-6 mt-2">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl">Anuj Bhuyar</h1>
          <p>Frontend Developer</p>
          <div className="flex gap-6">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl">Prasad Lokhande</h1>
          <p>pp</p>
          <div className="flex gap-6">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl">Om Pawar</h1>
          <p>pp</p>
          <div className="flex gap-6">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl">Tanuja Wani</h1>
          <p>pp</p>
          <div className="flex gap-6">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
        <div className=" p-4 flex flex-col items-center justify-center bg-[#F8F9FA] hover:bg-[#ffffff] hover:shadow-xl  border shadow-sm rounded-2xl">
          <img
            className="rounded-full"
            src={team}
            width={125}
            height={25}
            alt={`${team} icon`}
          />
          <h1 className="text-2xl">OM Deore</h1>
          <p>pp</p>
          <div className="flex gap-6">
            <Link to="github.com">
              <img
                className="rounded-full"
                src={x2}
                width={25}
                height={25}
                alt="x"
              />
            </Link>
            <Link to="github.com">
              <img
                className="rounded-full"
                src={github}
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
