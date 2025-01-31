import { DivComponent } from "../../common/div-component";
import "./pagination.css"


export class Pagination extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    render() {
        this.el.classList.add('pagination__wrapper')
        if (this.state.page > 1) {
            const leftPagination = document.createElement('a');
            leftPagination.classList.add('pagination');
            leftPagination.innerHTML = `
                <img class="arrow__left" src="/static/arrow.svg" alt="arrow"></img>
                <p class="pagination__text">Предыдущая страница</p>
            `;
            this.el.append(leftPagination);
            leftPagination.addEventListener('click', () => {
                this.state.offset -= 6;
                this.state.page -= 1;
            })
        }
        if ((this.state.list.length - this.state.offset > 0) && !(this.state.list.length - this.state.offset < 6)) {
            const rightPagination = document.createElement('a');
            rightPagination.classList.add('pagination');
            rightPagination.innerHTML = `
                <p class="pagination__text">Следующая страница</p>
                <img class="arrow__right" src="/static/arrow.svg" alt="arrow"></img>
            `;
            this.el.append(rightPagination);
            rightPagination.addEventListener('click', () => {
            this.state.offset += 6;
            this.state.page += 1;
            })
        }
        if (((this.state.list.length - this.state.offset > 0) && !(this.state.list.length - this.state.offset < 6)) || (this.state.page > 1)) {
            const totalPages = Math.ceil(this.state.list.length / 6);
            if (!(totalPages > 1 || this.state.page > 1)) {
                return;
            }
            const pageCounter = document.createElement('div');
            pageCounter.classList.add('page__counter')
            pageCounter.innerHTML = `
                <p>Страница : ${this.state.page}/${totalPages}</p>
            `;
            this.el.append(pageCounter);
        }
        return this.el;        
    }
}