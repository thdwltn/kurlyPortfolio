import Nav from "./Nav";
import Footer from "./Footer";
import Side  from "./Side";

function App({children}) {
  return (
    <>
      <Nav/>
      <div>{children}</div>
      <Side/>
      <Footer/>
    </>
  );
}

export default App;
