/**
 * Created by manuel on 21-07-15.
 */
/**
 * Created by tom on 17/07/15.
 */
import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-mvc/core/View.js';
import _                    from 'lodash';
import {Button}               from '../components/Button.js'

export class PlayView extends View {
    constructor(options = {}){
        super();

        /* Create the renderable components we want to show in this view. */
        this.renderables.background = new Surface({
            properties: {
                'background-color': '#00e4d6'
            }
        });

        this.renderables.button = new Button('First View');

        /* Tell famous-flex how to render our components in Famous. */
        this.layouts.push((context) => {

            context.set('background', {
                size: [context.size[0], context.size[1]],
                translate: [0, 0, -2]
            });

            context.set('button', {
                size: [156, 44],
                origin: [0.5,0.5],
                align: [0.5, 0.5],
                translate: [0, 0, 2]
            })
        });

        /* Hook up our renderables and layout function to famous-flex */
        this.build();
    }
}