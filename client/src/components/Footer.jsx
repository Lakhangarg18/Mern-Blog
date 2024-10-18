import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 align-middle justify-center">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-teal-300 via-white-500 rounded-lg text-white">
                Lakhan's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://leetcode.com/u/lakhangarg18/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leetcode Profile
                </Footer.Link>
                <Footer.Link href="/about" rel="noopener noreferrer">
                  Lakhan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/lakhangarg18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://discord.com/channels/1237472896453185556/1237472896453185558"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            href="#"
            by="Lakhan's blog"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
}
