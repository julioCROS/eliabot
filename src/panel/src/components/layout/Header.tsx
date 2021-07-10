import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark style={{ backgroundColor: '#333' }}>
        <NavbarBrand href="/" className="ml-1 mr-auto">
          <Container style={{ display: 'flex', alignItems: 'center' }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 155 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 81.4314C120 95.8062 118.319 112.293 109.872 121.706C101.443 131.098 95.3772 137 82.5256 137C68.9491 137 59.6437 128.479 51.1282 118.137C43.5049 108.879 41 96.5264 41 82.9608C41 54.242 56.7948 33 82.5256 33C108.256 33 120 52.7126 120 81.4314Z"
                fill="#CE734C"
              />
              <path
                d="M70 75.5L64.5 74L54 72.5V71H57L65 71.5L68.5 72.5L70 75.5Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M104.5 46L88.5 43.5V51.5V59.5L92 57.5L101 56.5L112.5 58.5L104.5 46Z"
                fill="#C4C4C4"
                stroke="black"
              />
              <path
                d="M35.1667 82.5573C40.0001 83.5573 49.7668 86.5573 38.1668 96.5573C45.6668 94.5573 37.6667 98.0573 48.6667 101.557C59.6667 105.057 48.6668 105.057 55.6668 107.057C62.6668 109.057 56.6668 119.057 58.6668 122.057C60.6668 125.057 51.1667 123.057 45.1667 125.557C39.1667 128.057 46.1667 128.557 39.1667 135.057C32.1667 141.557 33.9567 128.505 27.2989 123.057C21.7989 118.557 22.7989 129.163 16.2989 129.557L14.0489 127.163L13.2989 124.163L14.0489 112.557C0.298889 103.663 16.2989 105.663 7.79888 91.1629C-0.701113 76.6629 26.7989 77.1629 7.79888 72.6629C-11.2011 68.1629 16.6667 57.5573 7.16674 47.5573C-2.33326 37.5574 28.564 36.6629 14.564 30.6629C0.563948 24.6629 32.1667 23.1629 25.2989 15.6629C20.4642 10.3832 39.1667 13.7685 41.7989 7.26848C45.0764 -0.825226 63.1667 12.6629 65.6667 4.6629C67.1068 0.0547297 76.6667 -1.3371 84.7989 7.26849C91.718 8.00835 94.867 4.64682 100.167 3.1629C107.172 1.20131 111.508 6.53799 116.167 10.1629C118.299 17.6629 123.672 14.1629 129.167 14.1629C141.667 14.1629 129.667 23.1629 136.667 30.6629C143.667 38.1629 151.299 38.1629 146.299 55.1629C141.299 72.1629 148.167 65.1629 152.667 74.5573C157.404 84.4471 141.667 93.0573 144.667 101.557C147.067 108.357 141.333 111.391 138.167 112.057C139 113.057 140.167 116.457 138.167 122.057C136.167 127.657 130.667 125.057 128.167 123.057C128.833 123.724 129.967 125.957 129.167 129.557C128.167 134.057 120.667 129.557 122.167 132.057C123.367 134.057 118.667 133.891 116.167 133.557C114.833 132.891 111.967 131.157 111.167 129.557C110.367 127.957 111.5 123.891 112.167 122.057C114.333 120.557 118.167 117.457 116.167 117.057C114.167 116.657 115.333 112.557 116.167 110.557C118.333 106.891 122.267 99.9573 120.667 101.557C118.667 103.557 111.167 97.0573 111.167 96.0573C111.167 95.2573 111.833 91.724 112.167 90.0573C111.667 89.0573 110.167 86.5573 108.167 84.5573C106.167 82.5573 110 78.3907 112.167 76.5573H104.667C101.467 76.5573 101.333 71.224 101.667 68.5573L104.667 60.0573C104.167 59.5573 102.567 58.2573 100.167 57.0573C97.7667 55.8573 101.167 50.224 103.167 47.5573C102.167 48.5573 100.167 49.0573 98.1667 49.0573C94.1667 49.0573 91.8334 44.224 89.6667 42.5573C89.1667 44.0573 87.7667 47.4573 86.1667 49.0573C84.5855 50.6386 80.2696 46.49 78.2381 44.1402C78.6988 44.755 78.9509 46.7503 76.6667 50.5573C74.2667 54.5573 69.6667 52.224 67.6667 50.5573C67.3334 52.724 66.4667 57.6573 65.6667 60.0573C64.8667 62.4573 60.6668 62.0573 58.6668 61.5573C60.1668 62.3907 62.4668 65.4573 59.6668 71.0573C56.9911 76.4086 50.2247 72.9938 46.9622 71.0883C47.8251 71.9619 48.6667 73.5758 48.6667 76.5573C48.6667 81.7573 39.6667 82.724 35.1667 82.5573Z"
                fill="black"
              />
              <path
                d="M38.1668 96.5573C49.7668 86.5573 40.0001 83.5573 35.1667 82.5573C39.6667 82.724 48.6667 81.7573 48.6667 76.5573C48.6667 70.0573 44.6667 70.0573 45.1667 70.0573C45.6667 70.0573 56.1668 78.0573 59.6668 71.0573C62.4668 65.4573 60.1668 62.3907 58.6668 61.5573C60.6668 62.0573 64.8667 62.4573 65.6667 60.0573C66.4667 57.6573 67.3334 52.724 67.6667 50.5573C69.6667 52.224 74.2667 54.5573 76.6667 50.5573C79.0667 46.5573 78.6667 44.5573 78.1667 44.0573C80.1667 46.3907 84.5667 50.6573 86.1667 49.0573C87.7667 47.4573 89.1667 44.0573 89.6667 42.5573C91.8334 44.224 94.1667 49.0573 98.1667 49.0573C100.167 49.0573 102.167 48.5573 103.167 47.5573C101.167 50.224 97.7667 55.8573 100.167 57.0573C102.567 58.2573 104.167 59.5573 104.667 60.0573L101.667 68.5573C101.333 71.224 101.467 76.5573 104.667 76.5573C107.867 76.5573 111 76.5573 112.167 76.5573C110 78.3907 106.167 82.5573 108.167 84.5573C110.167 86.5573 111.667 89.0573 112.167 90.0573C111.833 91.724 111.167 95.2573 111.167 96.0573C111.167 97.0573 118.667 103.557 120.667 101.557C122.267 99.9573 118.333 106.891 116.167 110.557C115.333 112.557 114.167 116.657 116.167 117.057C118.167 117.457 114.333 120.557 112.167 122.057C111.5 123.891 110.367 127.957 111.167 129.557C111.967 131.157 114.833 132.891 116.167 133.557C118.667 133.891 123.367 134.057 122.167 132.057C120.667 129.557 128.167 134.057 129.167 129.557C129.967 125.957 128.833 123.724 128.167 123.057C130.667 125.057 136.167 127.657 138.167 122.057C140.167 116.457 139 113.057 138.167 112.057C141.333 111.391 147.067 108.357 144.667 101.557C141.667 93.0573 157.404 84.4471 152.667 74.5573C148.167 65.1629 141.299 72.1629 146.299 55.1629C151.299 38.1629 143.667 38.1629 136.667 30.6629C129.667 23.1629 141.667 14.1629 129.167 14.1629C123.672 14.1629 118.299 17.6629 116.167 10.1629C111.508 6.53799 107.172 1.20131 100.167 3.1629C94.867 4.64682 91.718 8.00835 84.7989 7.26849C76.6667 -1.3371 67.1068 0.0547297 65.6667 4.6629C63.1667 12.6629 45.0764 -0.825226 41.7989 7.26848C39.1667 13.7685 20.4642 10.3832 25.2989 15.6629C32.1667 23.1629 0.563948 24.6629 14.564 30.6629C28.564 36.6629 -2.33326 37.5574 7.16674 47.5573C16.6667 57.5573 -11.2011 68.1629 7.79888 72.6629C26.7989 77.1629 -0.701113 76.6629 7.79888 91.1629C16.2989 105.663 0.298889 103.663 14.0489 112.557L13.2989 124.163L14.0489 127.163L16.2989 129.557C22.7989 129.163 21.7989 118.557 27.2989 123.057C33.9567 128.505 32.1667 141.557 39.1667 135.057C46.1667 128.557 39.1667 128.057 45.1667 125.557C51.1667 123.057 60.6668 125.057 58.6668 122.057C56.6668 119.057 62.6668 109.057 55.6668 107.057C48.6668 105.057 59.6667 105.057 48.6667 101.557C37.6667 98.0573 45.6668 94.5573 38.1668 96.5573Z"
                stroke="black"
              />
              <path
                d="M125.5 80C125.5 92.9597 114.55 103.5 101 103.5C87.4496 103.5 76.5 92.9597 76.5 80C76.5 67.0403 87.4496 56.5 101 56.5C114.55 56.5 125.5 67.0403 125.5 80Z"
                fill="#C4C4C4"
                stroke="black"
              />
              <path
                d="M115.5 80C115.5 88.0242 109.216 94.5 101.5 94.5C93.7839 94.5 87.5 88.0242 87.5 80C87.5 71.9758 93.7839 65.5 101.5 65.5C109.216 65.5 115.5 71.9758 115.5 80Z"
                fill="#FF0707"
                stroke="black"
              />
              <path
                d="M110 101L107 94L110 92.5L112.5 90L119 95L117 97L115 98.5L112.5 100L110 101Z"
                fill="#A7A7A7"
              />
              <path
                d="M92 59L95 66L92 67.5L89.5 70L83 65L85 63L87 61.5L89.5 60L92 59Z"
                fill="#A7A7A7"
              />
              <path
                d="M122 91L114.5 87L112.5 90L119 95L120 94L120.5 93L122 91Z"
                fill="#DFDFDF"
              />
              <path
                d="M80 69L87.5 73L89.5 70L83 65L82 66L81.5 67L80 69Z"
                fill="#DFDFDF"
              />
              <path
                d="M113.5 79.5L111 74.5L110.5 79L109 83L107 87.5L104.5 92L111 88L113.5 79.5Z"
                fill="#FF4646"
              />
              <path
                d="M87.2209 122C87.0542 114.833 86.8209 100.3 87.2209 99.5L93.7209 102.5L101.221 104L110.221 102L118.721 97V97.5V100L118.221 104L115.721 111L114.221 114L112.721 116.5L111.221 119L108.721 122L106.721 124.5L102.721 128.5L99.2209 131L94.7209 133.5L87.2209 135.5V134.5V122Z"
                fill="#C4C4C4"
                stroke="black"
              />
              <path
                d="M98 107.444C96.8333 107.278 93.3 106.5 90.5 104.5L88 101L94 104L101.5 105.5L110.5 103.5L118.5 99L118 103L116 104.5L113 106.5L109.5 108L104.5 108.5L101 108L98 107.444Z"
                fill="#ACACAC"
              />
              <path
                d="M98.5 109.944C97.3333 109.778 96.3 109.5 93.5 107.5L91 105.5L93 106.5L95.5 107.5L97 108L101 108.5L105 109L109 108.5L112 107.5L117 104V105L116.5 107L113.5 109L110 110.5L105 111L101.5 110.5L98.5 109.944Z"
                fill="#DBD5D5"
              />
              <path d="M98 103.5V122V131" stroke="black" />
              <path d="M110 102V120.5" stroke="black" />
              <path
                d="M67 119.5C67.3333 118.167 69.8 114.8 77 112H86.5V122.5H81.5H77L67 119.5Z"
                fill="#A83F28"
              />
              <path
                d="M64.5 84L67 82L64.5 80.5L61.5 80L58 80.5L56 82L58 84L61.5 84.5L64.5 84Z"
                fill="white"
                stroke="white"
              />
              <path d="M89 60V43.5" stroke="black" />
            </svg>
            <span className="ml-2 mr-2">Eliabot's Panel</span>
          </Container>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/users">
                Usuários
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/history">
                Histórico
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
