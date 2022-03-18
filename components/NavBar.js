import Link from "next/link"
import Image from "next/image"
import logo from "../assets/images/kastory-logo-04-bg-04.png"
export const NavBar =({children,props})=>{
    return (
        <>
            <div className="navBar">
            <div className="navLogo">
            <Link href={'/'} passHref>

                <Image src={logo} alt="kastory Logo"/>
            </Link>
            </div>
            <div className="fill"></div>
            <ul>
                <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                </li>
                <li>
                        <Link href="#">
                            <a>Insparation</a>
                        </Link>
                </li>
                <li>
                        <Link href="#">
                            <a>Dashboard</a>
                        </Link>
                </li>
                <li>
                {children}

                </li>
            </ul>
            </div>

            <style jsx>
                {`
                .navBar {
                    position: relative;
                    font-family: var(--int);
                    font-size: var(--fontSize);
                    /* border: 2px solid red; */
                    display: flex;
                    justify-content: space-between;
                    padding: 0px 2rem;
                    height: 4rem;
                    }

                    .navBar .navLogo {
                    position: absolute;
                    width: 15rem;
                    height: auto;
                    top: -2rem;
                    /* border: 1px solid black; */
                    cursor: pointer;
                    }

                    .navBar .fill {
                    flex: auto;
                    }

                    .navBar ul {
                    list-style: none;
                    /* border: 2px solid black; */
                    }

                    .navBar ul li {
                    display: inline-block;
                    margin: 0px 5px;
                    /* border: 2px solid green; */
                    }

                    .navBar ul li:hover {
                    border-bottom: 2px solid var(--color1);
                    }
                
                `}
            </style>
        </>
    )
}