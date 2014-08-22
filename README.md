# ReSRC Modify Attributes Plugin

[resrc.plugin-modifyAttributes.js](http://www.resrc.it/docs/javascript/plugin) is a ReSRC.it plugin ([v 0.9+](http://www.resrc.it/docs/javascript/0.8))
to allow automatic resrc-ing of URLs stored in HTML element attributes.

Use this plugin to pre-prepare URLs that might not necessarily be used to show an image immediately

## Documentation

Please see `@TODO Write some docs`

## Usage

1. Include [resrc.js](http://use.resrc.it/0.8):

  ```html
  <script src="//use.resrc.it/0.8"></script>
  ```

2. Include the plugin:

  ```html
  <script src="/dist/resrc.plugin-modifyAttributes.min.js"></script>
  ```

3. Call the plugin:

  ```javascript
  resrc.ready(function () {
    resrc
      .modifyAttributes([
        'data-my-attribute',
        'data-another-attribute'
      ]);
  });
  ```

## Building a minified release

The repository does not contain a minified resrc.plugin-modifyAttributes.min.js file - this is only generated
for [RELEASES](https://github.com/alanpich/resrc.plugin-modifyAttributes.js/releases). To build your own minified copy
for use in development simply run ```npm install``` if you haven't already, followed by ```grunt build```.
This will generate a resrc.plugin-modifyAttributes.min.js file in the `dist` subdirectory.

## History

For a full list of releases and changes please see the [CHANGELOG](https://github.com/alanpich/resrc.plugin-modifyAttributes.js/blob/master/CHANGELOG.md).

## Contributing

Please see the [CONTRIBUTING](https://github.com/alanpich/resrc.plugin-modifyAttributes.js/blob/master/CONTRIBUTING.md) file for guidelines.

## Contact

Please get in touch via: [EMAIL](mailto:alan.pich@gmail.com).

## License

Copyright (C) 2014 by [Alan Pich](https://github.com/alanpich) - The MIT License (MIT)  
Please see [LICENSE](https://github.com/alanpich/resrc.plugin-modifyAttributes.js/blob/master/LICENSE).
