import { useState, useRef, useEffect } from 'react';

function useDropdownMenu() {
  const [isDropdownOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return {
    isDropdownOpen,
    toggleDropdown,
    menuRef,
    buttonRef,
  };
}

export default useDropdownMenu;
