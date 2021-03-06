# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@2.0.0...@crave/farmblocks-hoc-input@2.0.1) (2018-03-23)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="2.0.0"></a>
# [2.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.7...@crave/farmblocks-hoc-input@2.0.0) (2018-03-15)


### Features

* **hoc-input:** remove validationMessages from formInput hoc ([ec36a21](https://github.com/CraveFood/farmblocks/commit/ec36a21))


### BREAKING CHANGES

* **hoc-input:** Packages that use this hoc now must also be composed with the withMessages hoc from
hoc-validation-messages in order to render the error messages.

ISSUES CLOSED: #261




<a name="1.2.7"></a>
## [1.2.7](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.6...@crave/farmblocks-hoc-input@1.2.7) (2018-03-15)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.6"></a>
## [1.2.6](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.5...@crave/farmblocks-hoc-input@1.2.6) (2018-03-14)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.5"></a>
## [1.2.5](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.4...@crave/farmblocks-hoc-input@1.2.5) (2018-03-13)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.4"></a>
## [1.2.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.3...@crave/farmblocks-hoc-input@1.2.4) (2018-02-15)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.3"></a>
## [1.2.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.2...@crave/farmblocks-hoc-input@1.2.3) (2018-02-14)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.2"></a>
## [1.2.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.1...@crave/farmblocks-hoc-input@1.2.2) (2018-02-09)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.1"></a>
## [1.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.2.0...@crave/farmblocks-hoc-input@1.2.1) (2018-02-08)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.2.0"></a>
# [1.2.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.1.1...@crave/farmblocks-hoc-input@1.2.0) (2018-02-07)


### Bug Fixes

* **style:** fix disabled text color on hoc input ([25fee9d](https://github.com/CraveFood/farmblocks/commit/25fee9d))


### Features

* **formInput:** add innerRef prop on the formInput hoc ([293f964](https://github.com/CraveFood/farmblocks/commit/293f964))
* **hoc-input:** add styles to input with combobox role ([69782af](https://github.com/CraveFood/farmblocks/commit/69782af))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.1.0...@crave/farmblocks-hoc-input@1.1.1) (2018-01-29)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="1.1.0"></a>
# [1.1.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.0.1...@crave/farmblocks-hoc-input@1.1.0) (2018-01-23)


### Features

* **filter-input:** add icon and clear button for search input type ([30ac9ba](https://github.com/CraveFood/farmblocks/commit/30ac9ba))




<a name="1.0.1"></a>
## [1.0.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@1.0.0...@crave/farmblocks-hoc-input@1.0.1) (2018-01-18)


### Bug Fixes

* **dependencies:** update the 4 packages that depends on link or text ([278f456](https://github.com/CraveFood/farmblocks/commit/278f456))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@0.2.4...@crave/farmblocks-hoc-input@1.0.0) (2018-01-18)


### Bug Fixes

* **margin:** remove margin bottom from the hoc input ([cb60c10](https://github.com/CraveFood/farmblocks/commit/cb60c10))


### Code Refactoring

* **exports:** use better proptypes export names instead of just "newProps" ([031b732](https://github.com/CraveFood/farmblocks/commit/031b732))


### Features

* **display name:** wrapp the base component name on the display name ([0651408](https://github.com/CraveFood/farmblocks/commit/0651408))
* **exports:** include the added proptypes in the exports ([fbb86c3](https://github.com/CraveFood/farmblocks/commit/fbb86c3))


### BREAKING CHANGES

* **exports:** this package no longer exports a "newProps" propTypes dictionary, check the source for the new
export name
* **margin:** previous behaviour was that the form input hoc included a margin bottom, now the margin is
responsability of the user




<a name="0.2.4"></a>
## [0.2.4](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@0.2.3...@crave/farmblocks-hoc-input@0.2.4) (2018-01-04)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="0.2.3"></a>
## [0.2.3](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@0.2.2...@crave/farmblocks-hoc-input@0.2.3) (2018-01-03)




**Note:** Version bump only for package @crave/farmblocks-hoc-input

<a name="0.2.2"></a>
## [0.2.2](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@0.2.1...@crave/farmblocks-hoc-input@0.2.2) (2018-01-02)


### Bug Fixes

* **property:** dont change value state when the changed property is not value ([c88389a](https://github.com/CraveFood/farmblocks/commit/c88389a))




<a name="0.2.1"></a>
## [0.2.1](https://github.com/CraveFood/farmblocks/compare/@crave/farmblocks-hoc-input@0.2.0...@crave/farmblocks-hoc-input@0.2.1) (2017-12-26)


### Bug Fixes

* **hoc-input:** do not update the state value if it does not come from properties ([d436acf](https://github.com/CraveFood/farmblocks/commit/d436acf))




<a name="0.2.0"></a>
# 0.2.0 (2017-12-26)


### Features

* **input hoc:** initial implementation and styles ([7180957](https://github.com/CraveFood/farmblocks/commit/7180957))
* **new hoc:** initial files ([1162af5](https://github.com/CraveFood/farmblocks/commit/1162af5))
