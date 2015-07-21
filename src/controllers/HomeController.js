import {Controller}                 from 'arva-mvc/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';

export class HomeController extends Controller {

    Index(){
        if(!this.homeView) {
            this.homeView = new HomeView('world');

        }

        this.homeView.renderables.button.on('click', this.onClick);



        return this.homeView;
    }

    onClick(){
        this.router.go('Play', 'Index');
    }
}