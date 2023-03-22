import { Container } from "./components/Container/Container.jsx";
import { Header } from "./components/Header/Header.jsx";

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <nav>
          <Container className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
