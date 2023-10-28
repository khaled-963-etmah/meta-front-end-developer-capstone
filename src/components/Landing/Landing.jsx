import React from "react";
import "./Landing.css";
function Landing() {
  return (
    <section className="landing" id="home">
      <div className="avatar">
        <img
          alt="avatar"
          src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
        />
      </div>
      <h1>Hello, I'm MHD Khaled Etmeh</h1>
      <div className="bio">
        <p>
          a passionate Front-End React Developer with a relentless drive to
          create engaging, user-friendly web experiences. Let me take you on a
          journey through my skills, experiences, and aspirations in the world
          of web development.
        </p>
        <h3>My Journey in Web Development</h3>
        <p>
          My journey in web development started with a fascination for the way
          websites could bridge the gap between technology and creativity. I
          embarked on this journey with a commitment to deliver high-quality,
          responsive web applications. My experience spans several years, during
          which I've had the privilege of working on a variety of projects, each
          presenting its unique set of challenges.
        </p>

        <h3>Mastering React</h3>
        <p>
          One of my primary tools of the trade is React. I've honed my skills in
          this powerful JavaScript library, and it has become second nature to
          me. I love creating dynamic and interactive user interfaces, turning
          ideas into reality through React's component-driven architecture.
        </p>

        <h3>Front-End Wizardry</h3>
        <p>
          From crafting pixel-perfect designs to ensuring seamless user
          experiences, I take pride in my attention to detail. My proficiency in
          HTML, CSS, and JavaScript allows me to breathe life into designs,
          making them not just visually appealing but also highly functional.
        </p>

        <h3>Team Player</h3>
        <p>
          I firmly believe in the power of collaboration. Throughout my career,
          I've had the privilege of working with diverse teams, from designers
          to back-end developers. I'm a firm believer that great products are
          the result of great teamwork, and I always strive to foster a spirit
          of cooperation and shared goals.
        </p>

        <h3>Continuous Learning</h3>
        <p>
          The world of web development is ever-evolving, and I'm committed to
          staying at the cutting edge of industry trends. I'm an avid learner,
          always seeking opportunities to expand my skill set and embrace new
          technologies.
        </p>

        <h3>My Aspirations</h3>
        <p>
          In the ever-changing landscape of web development, my aspirations are
          simple: to keep pushing the boundaries of what's possible. I want to
          continue creating web applications that not only meet but exceed user
          expectations. I'm passionate about contributing to projects that make
          a positive impact on people's lives, whether it's through improving
          usability, enhancing accessibility, or solving real-world problems.
        </p>

        <h3>Get in Touch</h3>
        <p>
          I'm always excited to connect with fellow developers, designers, and
          anyone who shares a love for technology and innovation. If you have a
          project in mind, want to discuss the latest trends in web development,
          or simply want to say hello, feel free to reach out. Let's build
          something incredible together!
        </p>
      </div>

      <a href="#contact" className="btn">
        Contact Me
      </a>
    </section>
  );
}

export default Landing;
