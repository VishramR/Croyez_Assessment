import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  return (
    <nav aria-label="Main navigation">
      <div className="container flex items-center sm:justify-start  lg:justify-center py-3">
        <NavLinks />
      </div>
    </nav>
  );
};