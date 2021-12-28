import Button from "../Button";

function Header() {
  return (
    <div>
      <span>Aaron Brooks</span>
      <Button className="resume">
        Resume
      </Button>
      <Button>
        Demos
      </Button>
      <Button>
        Contact Me
      </Button>
    </div>
  );
}

export default Header;
