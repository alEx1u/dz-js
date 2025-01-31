import { MainView } from "./views/main/main.js";
import { FavoritesView } from "./views/favorites/favorites.js";

class App {
  routes = [{ path: "", view: MainView }, { path: "#favorites", view: FavoritesView}];
  appState = {
    favorites: [],
  };
  constructor() {
    window.addEventListener("hashchange", this.route.bind(this));
    this.route();
    this.appState.favorites = this.loadFavorites();
  }

  loadFavorites() {
    const favoriteBooks = localStorage.getItem('favoriteBooks');
    let favBooks;

    if(favoriteBooks) {
      try {
        favBooks = JSON.parse(favoriteBooks);
      } catch (e) {
        console.error('Ошибка парсинга favoriteBooks', e);
        favBooks = [];
      }
    } else {
      favBooks = [];
    }
    return favBooks;
  }

  route() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routes.find((r) => r.path == location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
