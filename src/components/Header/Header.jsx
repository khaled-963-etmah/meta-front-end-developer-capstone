import React, { useEffect, useState } from "react";
import "./Header.css";
function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 1000);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <nav>
        <div className="nav-link">
          <a href="#home" className="smooth-scroll">Home</a>
          <a href="#projects" className="smooth-scroll">Projects</a>
          <a href="#contact" className="smooth-scroll">Contact</a>
        </div>

        <div className="nav-link">
          <a
            href="https://www.facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook">
              {" "}
              <img
                style={{ background: "white", borderRadius: "50%" }}
                width={25}
                height={25}
                alt="i"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
              />
            </i>
          </a>
          <a href="mailto:youremail@example.com">
            <i className="far fa-envelope">
              <img
                style={{ background: "white", borderRadius: "50%" }}
                width={25}
                height={25}
                alt="i"
                src="https://cdn-icons-png.flaticon.com/512/7718/7718904.png"
              />
            </i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github">
              <img
                style={{ background: "white", borderRadius: "50%" }}
                width={25}
                height={25}
                alt="i"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </i>
          </a>
          <a
            href="https://stackoverflow.com/users/your-stackoverflow-id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-stack-overflow">
              {" "}
              <img
                style={{ background: "white", borderRadius: "50%" }}
                width={25}
                height={25}
                alt="i"
                src="https://cdn-icons-png.flaticon.com/512/2626/2626299.png"
              />
            </i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
