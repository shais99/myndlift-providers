import "./style/global.scss";
import data from "./data/dataToFilter.json";
import { useState, createContext } from "react";
import { getProviders } from "./services/providerService";
import { Header } from "./cmps/Header";
import { Search } from "./cmps/Search";
import { ProvidersNotFound } from "./cmps/ProvidersNotFound";
import { ProvidersList } from "./cmps/ProvidersList";
import { ProviderContact } from "./cmps/provider/ProviderContact";

export const ProviderContext = createContext();

export const App = () => {
  const [search, setSearch] = useState({
    term: "",
    submittedTerm: "",
  });
  const [providers, setProviders] = useState([]);
  const [currProvider, setCurrProvider] = useState(null);

  function handleSearch({ target }) {
    setSearch((prevSearch) => ({
      ...prevSearch,
      [target.name]: target.value,
    }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setSearch((prevSearch) => ({ ...prevSearch, submittedTerm: search.term }));
    const loadedProviders = getProviders(data, search.term);
    setProviders(loadedProviders);
  }

  return (
    <>
      {currProvider && (
        <ProviderContact
          provider={currProvider}
          onCloseContact={() => setCurrProvider(null)}
        />
      )}
      <main className="app-container">
        <Header />
        <Search
          searchTerm={search.term}
          handleChange={handleSearch}
          submittedSearchTerm={search.submittedTerm}
          handleSubmit={handleSubmit}
          resultsCount={providers.length}
        />
        <ProviderContext.Provider value={{ setCurrProvider }}>
          {providers.length ? (
            <ProvidersList data={providers} />
          ) : (
            <ProvidersNotFound />
          )}
        </ProviderContext.Provider>
      </main>
    </>
  );
};
