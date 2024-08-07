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
Extends the super type's constructor, as well as defines the app associated with the widget as the passed app (notably, the one that is active). Three properties are also defined and initialized that describe which section (Login, Search, or Upload) are showing when the extension is initially loaded. Basic widget styling is added as well from the `/style/base.css` file, and an icon is added to the sidebar, imported as an svg string and interpreted as a `@jupyterlab/ui-components/LabIcon` object.

#### Properties
* `private root: react-dom/client/Root`
* `private app: JupyterFrontEnd`
* booleans mentioned in constructor

#### `onAfterAttach`
Creates the `root` component from the inherited `Widget.node` object. Also calls the `render` function defined below.

#### `onBeforeDetach`
Unmounts the `root` component.

#### Toggle functions
`toggleLogin`, `toggleUpload`, and `toggleSearch` control the state of the booleans mentioned in the constructor that define which component is visible within the `SideBarPanel` component. Once these have been toggled, the whole component is re-rendered.

#### `render`
Simply runs the root objects `.render` function, passing the imported `SideBarPanel` component with the `app` and booleans passed to that component. This serves to render the whole widget on command to reflect changes. Note: This is necessary because the `ZenodoWidget` class is an extension of the `Widget` class and is by definition not a `React` component, thus `useEffect()` cannot be used.

### `activate(app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer | null)`
Function that defines how the widget is initialized and defines the app commands relating to the widget.

Commands added to the hosted Jupyter instance:
* "zenodo-jupyterlab: search": Toggles the search field
* "zenodo-jupyterlab: login": Toggles the login field
* "zenodo-jupyterlab: upload": Toggles the upload field
* "zenodo: open":
> * Creates new widget if widget is disposed
> * Defines widget tracker via `@jupyterlab/apputils/WidgetTracker`
> * Attaches widget to the Jupyter Lab Shell on the sidebar

Finally, the function executes the "zenodo:open" command.

### `plugin: JupyterFrontEndPlugin`
Defines the plugin in which the widget is housed and attaches the `activate` function defined above.