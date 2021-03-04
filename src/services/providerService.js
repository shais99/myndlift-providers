// get an array of clean and filtered providers
export function getProviders(data, searchTerm) {
  // get the keys of the main data
  const dataKeys = Object.keys(data);

  // filter out object without listings
  const keysWithProviders = dataKeys.filter((key) => data[key].listings);

  // create an array with objects
  const dataWithProviders = keysWithProviders.map((key) => data[key]);

  // push all objects and nested objects to a new array
  let providers = [];
  dataWithProviders.forEach((d) => {
    for (let key in d.listings) {
      providers.push({ id: key, ...d.listings[key] });
    }
  });

  // filter listings by provided search term
  providers = providers.filter((l) => {
    const lowerSearch = searchTerm.toLowerCase();

    return (
      l.city?.toLowerCase() === lowerSearch ||
      l.state?.toLowerCase() === lowerSearch ||
      l.country?.toLowerCase() === lowerSearch
    );
  });

  return providers;
}
