function resetSelect(...items) {
    items.forEach((item) => {
        $(item).formSelect();
    })
}
//1f6fcd1b4b784db6b976ae5dc1ee777d
//`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`
class EndPoint {
    constructor(service, path) {
        this.service = service;
        this.path = path;
    }
    sendRequest(queryParams) {
        return fetch( this.service.url + this.path + this.buildQueryString(queryParams))
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) })
    }
    buildQueryString(params) {
        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');
        return '?' + query + '&apiKey=' + this.service.apiKey;
    }
}

class Service {
    constructor () {
        this.key = '1f6fcd1b4b784db6b976ae5dc1ee777d';
        this.apiUrl = 'https://newsapi.org/v2/';
        this.endPoints = ['top-headlines', 'everything'];
    }
    get apiKey() {
        return this.key;
    }
    get url() {
        return this.apiUrl;
    }
    getEndPoint(endPoint) {
        if (this.endPoints.includes(endPoint)) {
            return new EndPoint(this, endPoint);
        }
        throw new Error("Wrong endpoint");
    }
    sendRequest(endPoint, params) {
        return this.getEndPoint(endPoint).sendRequest(params);
    }
}

class UI {
    constructor () {
        this.service = new Service();
        this.layout = new LayoutNews();
    }
    init() {
        this.country = document.querySelector('#country');
        this.category = document.querySelector('#category');
        this.query = document.querySelector('#q');
        this.from = document.querySelector('#from');
        this.to = document.querySelector('#to');
        this.sortBy = document.querySelector('#sortBy');

        this.country.addEventListener('change', this.handleSelect.bind(this))
        this.category.addEventListener('change', this.handleSelect.bind(this))
        this.query.addEventListener('keyup', this.search.bind(this));
        this.from.addEventListener('change', this.search.bind(this));
        this.to.addEventListener('change', this.search.bind(this));
        this.sortBy.addEventListener('change', this.search.bind(this));
    }
    handleSelect(event) {
        this.clearSearchBlock();
        const params = {country: this.country.value, category: this.category.value};
        try {
            this.service.sendRequest('top-headlines', params)
                .then((response) => {
                    this.layout.renderAll(response.articles)
                })
        } catch (e) {
            alert(e.message);
        }
        
    }
    search(event) {
        this.clearTopHeadlinesInputs();
        if (this.validateDate()) {
            const params = {q: this.query.value, from: this.from.value, to: this.to.value, sortBy: this.sortBy.value};
            try {
                this.service.sendRequest('everything', params)
                    .then((response) => {
                        this.layout.renderAll(response.articles)
                    })
            } catch (e) {
                alert(e.message);
            }

        } else {
            alert('wrong period');
        }
    }
    clearTopHeadlinesInputs() {
        this.category.value = '';
        this.country.value = '';
        resetSelect(this.country, this.category);
    }
    clearSearchBlock() {
        this.query.value = '';
        this.sortBy.value = '';
        this.to.value = '';
        this.from.value = '';
        resetSelect(this.sortBy);
    }
    validateDate() {
        if (this.from.value !== '' && this.to.value !== '') {
            const dateFrom = new Date(this.from.value);
            const dateTo = new Date(this.to.value);
            if (dateFrom.getTime() > dateTo.getTime()) {
                return false;
            }
        }
        return true;
    }
}

class LayoutNews {
    constructor() {
        this.divRow = document.querySelector('#row');
    }
    renderAll(newsList) {
        this.clear();

        newsList.forEach((news) => {
            const html = this.render(news);
            this.divRow.insertAdjacentHTML('beforeend', html);
        })
    }
    clear() {
        this.divRow.innerHTML = '';
    }
    render (news) {
        return `<div class="col s12 m6">
                <div class="card"> 
                  <div class="card-image">
                     <img src="${news.urlToImage}"> 
                  </div>
                  <div class="card-content">
                     <span class="card-title">${news.title || ''}</span>
                     <p>${news.description || ''}</p> 
                  </div>
                  <div class="card-action">
                     <a href="${news.url}" target="_blank">Read more</a> 
                  </div> 
                </div>
            </div>`;
    }
}

const myUI = new UI();
myUI.init();
