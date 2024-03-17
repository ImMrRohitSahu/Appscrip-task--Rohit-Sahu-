
// eslint-disable-next-line react/prop-types
const MenuSection = ({ menuRef }) => {
 
  return (
    
      <nav className="sm-menu" ref={menuRef}>
        <ul className="navbar-ul-sm">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
  );
};

export default MenuSection;
