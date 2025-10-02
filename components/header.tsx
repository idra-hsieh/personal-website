import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-foreground">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl font-semibold px-8 lg:px-0">
                        Idra <span className="text-accent">.</span>
                    </h1>
                </Link>


                {/* desktop nav & hire me button */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="lg:hidden px-8 lg:px-0">
                    <MobileNav />
                </div>

            </div>
        </header>
    )
};

export default Header;