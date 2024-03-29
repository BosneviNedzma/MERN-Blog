import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 sm:mt-10 mb-4 sm:mb-20">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm  sm:text-xl font-semibold 
       dark:text-white "
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
        to-pink-500 rounded-lg text-white"
              >
                BosneviNedžma
              </span>
              Blog
            </Link>
          </div>
          <div
            className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3
                sm:gap-6"
          >
            <div className="">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/BosneviNedzma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Who am I?
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Follow me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/BosneviNedzma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/nedzma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="BosneviNedžmaBlog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/nedzma.brkic.1/"
              icon={BsFacebook}
              target="_blank"
            />
            <Footer.Icon
              href="https://twitter.com/brkic_nedz52943"
              icon={BsTwitter}
              target="_blank"
            />
            <Footer.Icon
              href="https://github.com/BosneviNedzma"
              icon={BsGithub}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
