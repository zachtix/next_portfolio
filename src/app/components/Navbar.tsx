import Link from 'next/link';

function Navbar() {
  return (
    <>
      <div className="bg-[#222222] sticky top-0">
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
    </>
  );
}

export default Navbar;
