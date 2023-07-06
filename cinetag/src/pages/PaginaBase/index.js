import Cabecalho from "components/Cabecalho/Index";
import Container from "components/Container";
import Rodape from "components/Rodape/Index";
import FavoritoProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <Container>
        <FavoritoProvider>
          <Outlet />
        </FavoritoProvider>
      </Container>
      <Rodape />
    </main>
  );
}

export default PaginaBase;
