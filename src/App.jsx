import "./App.module.css";
import DashboardPreview from "./components/DashboardPreview/DashboardPreview";
import Feature from "./components/Feature/Feature";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <DashboardPreview />
      <Feature />
    </>
  );
}

export default App;
