/**
 * Created by tom on 17/07/15.
 */
import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-mvc/core/View.js';
import _                    from 'lodash';

export class HomeView extends View {
    constructor(options = {}){
        super();

        /* Create the renderable components we want to show in this view. */
        this.renderables.background = new Surface({
            properties: {
                'background-color': '#3399cc'
            }
        });

        this.renderables.button = new Surface({
            content: 'Second View',
            properties: {
                'background-color':"#e6e6e6",
                'border-radius':'5px',
                'text-align':'center',
                'padding-top':'9px',
                'cursor':'pointer'
            }
        });

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