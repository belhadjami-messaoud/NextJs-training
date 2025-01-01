import Link from "next/link";

const Adminlayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="bg-green-500 w-[40%] h-[550px]">
          <div className=" pt-[10px]  rounded-lg text-center flex flex-col gap-8 justify-center">
            <div>
              <Link href={"/admin"}>Home</Link>
            </div>
            <div>
              <Link href={"/admin/posts"}>posts</Link>
            </div>
            <div>
              <Link href={"/admin/users"}>Users</Link>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[550px]">{children}</div>
      </div>
    </>
  );
};

export default Adminlayout;
