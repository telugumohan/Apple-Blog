import { useState, useEffect } from 'react';
import { chevronRight, arrowDown, arrowUp } from '../assets/icons'; // Assuming chevronUp and chevronDown are available

const FooterLinksComponent = ({ footerLinks }) => {
  const [activeLinks, setActiveLinks] = useState({});
  const [isLg, setIsLg] = useState(false);

  // Function to toggle a specific link
  const toggleLink = (title) => {
    setActiveLinks((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  // Check if screen width is max-lg
  useEffect(() => {
    const handleResize = () => {
      setIsLg(window.innerWidth <= 1024); // lg breakpoint is 1024px
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex lg:flex-wrap items-start gap-4 flex-col lg:h-[360px] mt-2">
      {footerLinks.map((footerLink) => (
        <div key={footerLink.title} className="max-lg:w-full max-lg:border-b border-slate-gray max-lg:py-1 border-collapse">
          <div className="flex flex-col gap-3 items-start">
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => isLg && toggleLink(footerLink.title)}
            >
              <h6 className="text-[12px] leading-4 font-palanquin text-black font-medium">
                {footerLink.title}
              </h6>
              {isLg && (
                <img
                  src={activeLinks[footerLink.title] ? arrowUp : arrowDown}
                  alt={activeLinks[footerLink.title] ? 'chevron up' : 'chevron down'}
                  height={20}
                  width={20}
                />
              )}
            </div>
            <ul
              className={`flex flex-col items-start gap-3 ${
                activeLinks[footerLink.title] && isLg ? '' : 'hidden'
              }`}
            >
              {footerLink.items.map((item) => (
                <li
                  key={item.href}
                  className="text-[12px] leading-4 font-montserrat text-slate-gray cursor-pointer hover:underline hover:text-black"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterLinksComponent;
