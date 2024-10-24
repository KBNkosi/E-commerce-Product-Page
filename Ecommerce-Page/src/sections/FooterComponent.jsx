import {Footer} from "flowbite-react";
import { instagramIcon, twitterIcon, youtubeIcon } from "../assets/icons";

const FooterComponent = () => {
  return (
    <>
      <Footer container className="bg-gray-900 text-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col className="text-white"> 
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-white" />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <a href="#">
                <img src={twitterIcon} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#">
                <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
              </a>
            
          </div>
        </div>
      </div>
    </Footer>
      
    </>
  )
}

export default FooterComponent