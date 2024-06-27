import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={80} height={80}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/Jelly">Shinobi Listing</Link>
        </nav>
    );
}
 
export default Navbar;