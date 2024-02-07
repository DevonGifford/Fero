const Footer = () => {
    return (
      <div className="hidden xl:flex w-full flex-col items-center justify-between px-1 pb-4 pt-3 xl:flex-row">
        <p className="text-center text-sm font-medium text-gray-600 md:text-lg">
          <span className="text-center text-sm text-gray-600 md:text-base">
            ©{new Date().getFullYear()} FERO All Rights Reserved.
          </span>
        </p>
        <div>
          <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
            <li>
              <a
                target="blank"
                href="mailto:devongifford@outlook.com"
                className="text-base font-medium text-gray-600 hover:text-gray-600"
              >
                Support
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://fero.com/"
                className="text-base font-medium text-gray-600 hover:text-gray-600"
              >
                License
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://fero.com/"
                className="text-base font-medium text-gray-600 hover:text-gray-600"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                target="blank"
                href="https://fero.com/"
                className="text-base font-medium text-gray-600 hover:text-gray-600"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Footer;