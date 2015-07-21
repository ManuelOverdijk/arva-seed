/**
 * Created by tom on 17/07/15.
 */
import {Controller}                 from 'arva-mvc/core/Controller.js';
import {PlayView}                   from '../views/PlayView.js';

export class PlayController extends Controller {

    Index(){
        if(!this.playView) {
            this.playView = new PlayView('Play');
        }

        this.playView.renderables.button.on('click', this.onClick);

        return this.playView;
    }

    onClick(){
        this.router.go('Home', 'Index');
    }
}