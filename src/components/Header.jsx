import headerImage from "../assets/import.png";

export default function Header() {
  return (
    <header className="header">
      <img src={headerImage} alt="Import logo" />
      <h1>Employee Project Collaboration Analyzer</h1>
    </header>
  );
}
