/**
 * Created by mysim1 on 14/05/15.
 */

import Easing               from 'famous/transitions/Easing';
import AnimationController  from 'famous-flex/src/AnimationController';

export const ControllerSpecification = {
    HomeController: {
        controllers: [
            {
                transition: {duration: 300, curve: Easing.outQuad},
                animation: AnimationController.Animation.Slide.Left,
                activeFrom: ['PlayController']
            }
        ],
        methods: {
            next: {
                transition: {duration: 300, curve: Easing.outQuad},
                animation: AnimationController.Animation.Slide.Right
            },
            previous: {
                transition: {duration: 300, curve: Easing.outQuad},
                animation: AnimationController.Animation.Slide.Left
            }
        }
    },
    PlayController: {
        controllers: [
            {
                transition: {duration: 300, curve: Easing.outQuad},
                animation: AnimationController.Animation.Slide.Right,
                activeFrom: ['HomeController']
            }
        ]
    }
};
