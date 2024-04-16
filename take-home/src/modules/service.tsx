import { GetCardResponse,  SearchCriteria, SearchType } from "./model";
export class Service {
  async getPokemonByCriteria(
    criteria: SearchCriteria
  ): Promise<GetCardResponse> {
    const page = `page=${criteria.pageNumber}&pageSize=${criteria.pageSize}`;
    var query =
      criteria.name || criteria.set || criteria.rarity || criteria.type
        ? "&q="
        : "";
    query = criteria.name ? `${query} name:"${criteria.name}"` : query;
    query = criteria.set ? `${query} set.name:"${criteria.set}"` : query;
    query = criteria.rarity ? `${query} rarity:"${criteria.rarity}"` : query;
    query = criteria.type ? `${query} types:"${criteria.type}"` : query;
    return await fetch(`https://api.pokemontcg.io/v2/cards?${page}${query}`, {
      method: "GET",
    })
      .then((res) => (res.ok ? res.json() : ({} as GetCardResponse)))
      .catch((e) => {
        console.log("Error : ", e);
        return {} as GetCardResponse;
      });
  }
  async getAllBy(name: SearchType): Promise<any> {
    return await fetch(`https://api.pokemontcg.io/v2/${SearchType[name]}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else return {};
      })
      .catch((e) => {
        console.log("Error : ", e);
        return {};
      });
  }
}
