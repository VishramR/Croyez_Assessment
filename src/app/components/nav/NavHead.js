import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";

export const NavHead = () => {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <NavBar />
      </header>
    </>
  );
};