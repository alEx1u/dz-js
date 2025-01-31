import { AbstractView } from "../../common/view.js";
import onChange from "on-change";
import { Header } from "../../components/header/header.js";
import { Search } from "../../components/search/search.js";
import { CardList } from "../../components/card-list/card-list.js";
import { Pagination } from "../../components/pagination/pagination.js";

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
    page: 1,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle("Поиск книг");
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === "favorites") {
      this.render();
    }
  }

  async loadList(q, offset) {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
    );
    return res.json();
  }

  async stateHook(path) {
    if (path === "searchQuery") {
      this.state.loading = true;
      const data = await this.loadList(
        this.state.searchQuery,
        this.state.offset
      );      
      this.state.loading = false;
      this.state.numFound = data.numFound;
      this.state.list = data.docs;
      this.state.page = 1;
    }

    if (path === "loading" || path === "list") {
      this.render();
    }
    if (path === "page") {
      this.render();
    }
  }

  render() {
    const main = document.createElement("div");
    main.append(new Search(this.state).render());
    const h1 = document.createElement("h1");
    h1.innerHTML = `
    Найдено книг - ${this.state.numFound}
    `;
    main.append(h1);
    main.append(new CardList(this.appState, this.state).render());
    this.app.innerHTML = "";
    this.app.append(main);
    this.renderHeader();
    main.append(new Pagination(this.state).render());
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
