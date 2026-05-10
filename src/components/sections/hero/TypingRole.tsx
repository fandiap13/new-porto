import Typewriter from "typewriter-effect";

const TypingRoleComponent = () => {
  return (
    <div
      className="text-base md:text-xl lg:text-2xl font-semibold flex items-center
            bg-gradient-to-r from-default to-highlight bg-clip-text text-transparent text-shadow-def
            "
    >
      <span className="mr-1">{`I'm a`}</span>
      <div className="text-primary">
        <Typewriter
          options={{
            strings: [
              "Front End Web Developer",
              "React / Next.js Developer",
              "Full Stack Web Developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default TypingRoleComponent;
