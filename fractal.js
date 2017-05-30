'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

const nunjucks = require('@frctl/nunjucks')();


/*
 * Give your project a title.
 */
fractal.set('project.title', 'Form Design Patterns');

fractal.components.engine(nunjucks);

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', 'components/');

fractal.components.set('default.collated', false);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.components.set('ext', '.html');
