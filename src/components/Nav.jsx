/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  position: sticky;
  background-color: white;
  top: 0;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  z-index: 1000;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;
const StyledListItem = styled.li`
  &:hover {
    border-bottom: 2px black solid;
    
  }
`;

export const Nav = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.6 }
      );

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => observer.disconnect();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);
  return (
    <StyledNav>
      <Logo />
      <StyledList>
        {sections.map((section) => {
          return (
            <StyledListItem key={section.id}>
              <a
                className={activeSection === section.id ? "active" : ""}
                href={`#${section.id}`}
              >
                {section.name}
              </a>
            </StyledListItem>
          );
        })}
      </StyledList>
    </StyledNav>
  );
};

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: bold;
  text-transform: uppercase;
`;

const Logo = () => {
  return <StyledLogo>Prodigy</StyledLogo>;
};
