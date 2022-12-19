import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Follow your dreams</span>
        <span className="headerTitleLg"><span style={{color:"red"}}>B</span><span style={{color:"yellow"}}>L</span><span style={{color:"green"}}>O</span><span style={{color:"blue"}}>G</span></span>
      </div>
       <img
        className="headerImg"
        src="https://images.pexels.com/photos/1076885/pexels-photo-1076885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}