import Link from 'next/link';

function Navbar({ bg = true }: { bg?: boolean }) {
  return (
    <div className="static">
      <div
        className={`bg-[#222222] ${
          !bg ? 'bg-opacity-0' : undefined
        } sticky top-0 hidden md:block`}
      >
        <div className="container mx-auto flex justify-between py-5">
          <div className="">
            <Link href="/">Home</Link>
          </div>
          <div>
            <ul className="flex gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/project">Project</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 bg-[#222222] h-10 w-full z-50 rounded-t-lg bg-opacity-60">
        <div className="h-full">
          <ul className="grid grid-cols-3 text-center text-lg font-semibold tracking-wider h-full">
            <li className="col-span-1 self-center">
              <Link href="/">Home</Link>
            </li>
            <li className="col-span-1 self-center">
              <Link href="/project">Project</Link>
            </li>
            <li className="col-span-1 self-center">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
