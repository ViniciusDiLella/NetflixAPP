import { AnimeProvider } from "./animes";
import { TokenProvider } from "./UserToken";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <AnimeProvider>{children}</AnimeProvider>
    </TokenProvider>
  );
};
export default Providers;
