'use strict'
const path = require('path')

/* Fractal theme
----------------------------------------------------------------------------- */

// Require the mandelbrot theme module
const mandelbrot = require('@frctl/mandelbrot')

// Configure a custom theme
const customTheme = mandelbrot({
  // Mandelbrot offers a pre-defined set of colour ‘skins’ that you can apply to the UI for quick and easy customisation
  'skin': 'green',
  // The nav sections that should show up in the sidebar (and in which order)
  'nav': [
    'docs',
    'components'
  ],
  // The component info panels that should be displayed in the component browser (and in which order the tabs should be displayed)
  'panels': [
    'info',
    'notes',
    'html',
    'view',
    'context'
  ],
  // The URL of a stylesheet to apply the to the UI
  styles: [
    'default', // link to the default mandelbrot stylesheet
  ],
})

// Specify a template directory to override any view templates
customTheme.addLoadPath(path.join(__dirname, 'views'))

module.exports = customTheme;