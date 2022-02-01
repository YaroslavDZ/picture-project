import modals from './modules/modals.js';
import sliders from './modules/sliders.js';
import forms from './modules/forms.js';
import mask from './modules/mask.js';
import checkTextInputs from './modules/checkTextInputs.js';
import showMoreStyles from './modules/showMoreStyles.js';
import calc from './modules/calc.js';
import filter from './modules/filter.js';
import pictureSize from './modules/pictureSize.js';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"');
    checkTextInputs('[name="message"');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
});