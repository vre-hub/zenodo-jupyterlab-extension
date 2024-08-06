---
title: "Frontend Documentation"
parent: "Full Documentation"
nav_order: 1
---

# Frontend Documentation

## General Framework
The building of the of the frontend JupyterLab extension is handled entirely within `pyproject.toml` in the root directory. The details of that file are discussed [NEED A PLACE TO LINK HERE WHEN I MAKE IT]. All of the frontend components were originally generated with `copier` template of a JupyterLab extension: [template](https://github.com/jupyterlab/extension-template). This extension is built with NodeJS >= 20 with node dependencies contained within `yarn.lock`.

## Files in `src/`

## `index.tsx` {#index}
This file creates the entire frontend extension as a widget and adds it to the running Jupyter Lab session.

### `class ZenodoWidget extends @lumino/widgets/Widget`
This houses the entire extension. Given the nature of `@lumino/widgets/Widget`, this component is defined without `React`, though the `SideBarPanel` which is a sub-component that contains the all of the content of the widget is developed with `React` as are all futher sub-components.

#### `constructor(app: @jupyterlab/application/JupyterFrontEnd)`
Extends the super type's constructor, as well as defines the app associated with the widget as the passed app (notably, the one that is active). Three properties are also defined and initialized that dei