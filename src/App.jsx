import './App.css';

function HeaderContainer() {
  return <div className="header-container"></div>;
}

function HeaderContainer2Content({ name }) {
  return <div className="header-container2-content">{name}</div>;
}

function HeaderContainer2() {
  return (
    <div className="header-container2">
      <HeaderContainer2Content name="Carl Anton" />
      <HeaderContainer2Content name="David" />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <HeaderContainer />
      <HeaderContainer2 />
      <HeaderContainer />
    </div>
  );
}

function BodyContainer() {
  return <div className="body-container"></div>;
}

function BodyContainer2Content() {
  return <div className="body-container2-content"></div>;
}

function BodyContainer2() {
  return (
    <div className="body-container2">
      <BodyContainer2Content />
      <BodyContainer2Content />
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <BodyContainer />
      <BodyContainer2 />
    </div>
  );
}

function FooterContainer1() {
  return <div className="footer-container1"></div>;
}

function FooterContainer2({ text }) {
  return <div className="footer-container2">{text}</div>;
}

function Footer() {
  return (
    <div className="footer">
      <FooterContainer1 />
      <FooterContainer2 text="C-PCIT9" />
      <FooterContainer2 text="IT3A" />
      <FooterContainer1 />
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
