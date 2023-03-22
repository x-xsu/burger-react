import { Header } from "./components/Header/Header.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};
