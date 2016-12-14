/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
 */

/* eslint no-path-concat: 0 */

'use strict';

var Component = require('spa-component');


/**
 * Base modal window implementation.
 *
 * @constructor
 * @extends Component
 *
 * @param {Object} [config={}] init parameters (all inherited from the parent)
 */
function Modal ( config ) {
    // sanitize
    config = config || {};

    if ( DEVELOP ) {
        if ( typeof config !== 'object' ) {
            throw new Error(__filename + ': wrong config type');
        }
        // init parameters checks
        if ( 'className' in config && (!config.className || typeof config.className !== 'string') ) {
            throw new Error(__filename + ': wrong or empty config.className');
        }
        if ( config.$body ) {
            throw new Error(__filename + ': config.$body should not be provided in ModalBox manually');
        }
    }

    // create centered div
    config.$body = document.createElement('div');
    config.$body.className = 'body';

    // parent constructor call
    Component.call(this, config);

    // add table-cell wrapper
    this.$node.appendChild(document.createElement('div').appendChild(this.$body).parentNode);
}


// inheritance
Modal.prototype = Object.create(Component.prototype);
Modal.prototype.constructor = Modal;

// set component name
Modal.prototype.name = 'spa-component-modal';


// public
module.exports = Modal;
