/**
 * Created by manuel on 21-07-15.
 */

import _                        from 'lodash';
import {View}                   from 'arva-mvc/core/View';
import Surface                  from 'famous/core/Surface';

const DEFAULT_OPTIONS = {
    properties: {
        'background-color': "#e6e6e6",
        'border-radius': '5px',
        'text-align': 'center',
        'padding-top': '9px',
        'cursor': 'pointer'
    }
};

export class Button extends View {

    constructor(text, options = {}) {
        let _options = _.extend(DEFAULT_OPTIONS, options);
        super(_options);
        this.options = _options;

        this.renderables.button = new Surface({content: text, properties: this.options.properties});
        this.layouts.push(function (context) {
            context.set('button', {
                size: [context.size[0], context.size[1]],
                translate: [0, 0, 10]
            });
        }.bind(this));

        this.build();
    }

}