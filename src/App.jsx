import './App.css';

function Headersmallbox({ text }) {
  return <div className="small-header-box">{text}</div>;
}
function Footersmallbox({ text }) {
  return <div className="small-footer-box">{text}</div>;
}

function App() {
  return (
    <div className="MainContainer">
      <div className="Section1">
        <div className="Box1"></div>
        <div className="Box2">
          <Headersmallbox text="FIRSTNAME" />
          <Headersmallbox text="LASTNAME" />
        </div>
        <div className="Box3"></div>
      </div>
      <div className="Section2">
        <div className="leftside"></div>
        <div className="rightside">
          <div className="Box5"></div>
          <div className="Box6"></div>
        </div>
      </div>
      <div className="Section3">
        <div className="Box7"></div>
        <Footersmallbox text="C-PCIT9" />
        <Footersmallbox text="IT3A" />
        <div className="Box10"></div>
      </div>
    </div>
  );
}

export default App;
