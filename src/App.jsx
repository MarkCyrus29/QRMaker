import Container from "./container";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="w-full h-dvh flex justify-center">
        <div className="w-5/6 h-full">
          <Navbar />
          <Container />
        </div>
      </div>
      <footer className="h-[100px] w-full bg-[#090909]">Hello</footer>
    </>
  );
}

export default App;
