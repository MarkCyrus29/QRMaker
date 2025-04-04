import Container from "./container";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <div className="w-full h-dvh flex justify-center">
        <div className="w-5/6 h-full">
          <Navbar />
          <Container />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
