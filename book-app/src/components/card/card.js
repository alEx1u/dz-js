import { DivComponent } from '../../common/div-component';
import './card.css';

export class Card extends DivComponent {
        constructor(appState, cardState) {
            super();
            this.appState = appState;
            this.cardState = cardState;
        }   

        
        toggleFavorites(appState, card) {
            const list = appState.favorites;
            if(list.includes(card)) {
                list.splice(list.indexOf(card), list.indexOf(card) + 1);
                return;
            }
            list.push(card);
        }

        render() {
            this.el.classList.add('card');
            const existInFavorites = this.appState.favorites.find(
                b => b.key == this.cardState.key
            );
            this.el.innerHTML = `
                <div class="card__image">
                    <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка книги"></img>
                </div>
                <div class="card__info">
                    <div class="card__tag">
                        ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
                    </div>
                    <div class="card__name">
                    ${this.cardState.title}
                    </div>
                    <div class="card__author">
                        ${this.cardState.author_name ? this.cardState.author_name.join(', ') : 'Не задано'}
                    </div>
                    <div class="card__footer">
                        <button class="button__add${existInFavorites ? " button__active": ''}">
                            ${existInFavorites
                                ? '<img src="/static/favorites.svg"></img>'
                                : '<img src="/static/favorites-white.svg"></img>'
                            }
                        </button>
                    </div>
                </div>
            `;
            const button = this.el.querySelector('.button__add');
            button.addEventListener('click', () => {
                this.toggleFavorites(this.appState, this.cardState);
            })
            return this.el;
        }
}