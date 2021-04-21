import {SideNav, Button, SideNavItem, Icon, Navbar, NavItem } from 'react-materialize';
import './navbar.css';
function Sidebar() {
    return (
      <div>


<Navbar
  alignLinks="right"
  brand={<a className="brand-logo" href="#"><img src="/images/logo.png"></img></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
  <NavItem href="">
    Acceuil
  </NavItem>
  <NavItem href="">
    Portefolio
  </NavItem>
  <NavItem href="">
    Certification TI
  </NavItem>
  <NavItem href="">
    CV digital
  </NavItem>
  <NavItem>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button node="button">Profil du developpeur</Button>}
  >
    <SideNavItem
      user={{
        background: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
        email: 'perigon@hotmail.com',
        image: '/images/seb.jpg',
        name: 'Sebastien Pérot-Morin'
      }}
      userView
    />
    <SideNavItem
      href="https://www.linkedin.com/in/p%C3%A9rot-morin-s%C3%A9bastien-8777a4a4/"
      waves
      icon={<Icon>link</Icon>}
    >
      Linkedin
    </SideNavItem>
    <SideNavItem href="https://github.com/perigon99"
    wave
    icon={<Icon>link</Icon>}
    >
      Git
    </SideNavItem>
    
    <SideNavItem divider />
    <SideNavItem subheader>
      <strong>Lien vers les Projets</strong>
    </SideNavItem>
    <SideNavItem
      href="https://github.com/perigon99/LightHouse_Final"
      waves
    >
      Yalper
    </SideNavItem>
    <SideNavItem
      href="https://github.com/perigon99/mid-term"
      waves
    >
      Lux
    </SideNavItem>
    <SideNavItem
   
      waves
    >
      Shrecknet
    </SideNavItem>
    <SideNavItem
      href="https://github.com/perigon99/scheduler"
      waves
    >
      Scheduler
    </SideNavItem>
    <SideNavItem
  
      waves
    >
      GIC
    </SideNavItem>
   
  </SideNav>
  </NavItem>
</Navbar>
  
</div>
)
    }

    export default Sidebar;
