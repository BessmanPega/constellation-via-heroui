# Constellation via HeroUI

This app shows you how to use [Pega's React SDK](https://docs.pega.com/bundle/constellation-sdk/page/constellation-sdks/sdks/constellation-sdks.html) to render a [case](https://docs.pega.com/bundle/platform/page/platform/case-management/case-management-overview.html) in a [React](https://react.dev/) application via [HeroUI](https://heroui.com). It is an example of [Pega's Center-out architecture](https://docs.pega.com/bundle/platform/page/platform/user-experience/why-constellation.html) in action: while the workflow is *defined* with a [Constellation UI](https://docs.pega.com/bundle/platform/page/platform/user-experience/constellation-architecture.html) in the [Pega Platform](https://docs.pega.com/bundle/platform/page/platform/hub/pega-platform-overview.html), it is *rendered* within this application using HeroUI.

## How to run this app

### Pre-requisites
* Pega Infinity 24.2 or greater
* nodejs
* npm

### tl;dr—
1. `git clone https://github.com/BessmanPega/constellation-via-heroui.git`
2. `npm install`
3. `npm run build`
4. Create in Pega Infinity an [OAuth 2.0 Client Registration](https://docs.pega.com/bundle/platform/page/platform/security/configure-oauth-2-client-registration.html) that is configured to use password credentials
5. Move `example-sdk-config.json` to `public/sdk-config.json` and fill out every field labeled `<MANDATORY>`
6. `npm run dev`

## Purpose
This app is meant to be studied as a reference, not deployed to production. After playing around with it to get the idea, the next step would be to use the Constellation React SDK to render a Pega case in your own React application using your own UI library.

## Details
[Vite](https://vite.dev) provides the dev server, but the important code lives in `src/dx2hero` and is not specific to Vite. That folder contains the "translation layer" which maps Constellation components to HeroUI with the help of the [PCore and PConnect public API's](https://docs.pega.com/bundle/pcore-pconnect/page/pcore-pconnect-public-apis/api/using-pcore-pconnect-public-apis.html). There is also some light use of [Tailwind CSS](https://tailwindcss.com/) since that is the CSS framework employed by HeroUI.


## How to create this from scratch

Every application and framework is different. It is worth consulting Pega's documentation on [Integrating SDKs with common frameworks](https://docs.pega.com/bundle/constellation-sdk/page/constellation-sdks/sdks/integrating-sdks-common-frameworks.html) to help guide your own use of the Constellation SDK's. What follows is an explanation of how *this* app is created, which may be a useful adjunct.

### Setup HeroUI

https://www.heroui.com/docs/guide/installation

npm install -g heroui-cli

heroui init constellation-via-heroui

(use vite, react, typescript)

cd constellation-via-heroui

npm install

heroui add --all

### Install Pega dependencies

Started working through: https://docs.pega.com/bundle/constellation-sdk/page/constellation-sdks/sdks/updating-next-js-application-integration-react-sdk.html

Core dependencies:
```
@pega/auth
@pega/react-sdk-components
@pega/configs
@pega/constellationjs
@pega/pcore-pconnect-typedefs
@pega/prettier-config
@pega/react-sdk-overrides
@pega/tsconfig
```

npm i -D vite-plugin-static-copy # Using this instead of webpack

Setup vite.config.ts to copy specific Pega node files to `public`. Going beyond the docs, account for `'./node_modules/@pega/constellationjs/dist/js/*'`.

npm run build

edited tsconfig.json to add Pega types.

setup `public/sdk-config.json`. Make sure `sdkContentServerUrl` is setup correctly, including getting HTTP vs HTTPS correct. Set `mashupGrantType` to `passwordCreds` in `sdk-config.json` (I can't get the default `authCode` to work, but I think that flow is less desirable anyway), created a matching oauth2 client reg rec in Pega.

setup initial `sdk-local-component-map.ts` — note `.ts` as opposed to `.js` to appease eslint.

built `src/pages/pega.tsx` as "hello, world' for the embedded scenario. Wired it in by modifying `src/config/site.ts` and `src/App.tsx`. Got these errors on `npm run dev`:

```
Error: Build failed with 257 errors:
node_modules/@pega/react-sdk-components/lib/bridge/react_pconnect.js:6:38: ERROR: Could not resolve "react-redux"
node_modules/@pega/react-sdk-components/lib/components/designSystemExtension/AlertBanner/AlertBanner.js:2:22: ERROR: Could not resolve "@mui/material"

[...etc...]
```

Installed additional dependencies:
```
@mui/icons-material
@mui/lab
@mui/material
@mui/styles
@mui/x-date-pickers
@tinymce/tinymce-react
dayjs
downloadjs
lodash.difference
mui-tel-input
react-datepicker
react-number-format
react-redux
throttle-debounce
uuid
```
I installed `mui-tel-input` with the `--legacy-peer-deps` flag because it has a peer dependency on `@mui/material@"^6.0.0"`, and this conflicts with `@mui/material@7.0.0` which I wound up with because I installed it without a version specifier. I don't think this will be a problem because I'm not going to use the default Constellation SDK Phone component.

Then `npm run build` to account for all the newly added stuff. This failed with:

```
error during build:
node_modules/@mui/styled-engine/esm/StyledEngineProvider/StyledEngineProvider.js (4:9): "CacheProvider" is not exported by "__vite-optional-peer-dep:@emotion/react:@mui/styled-engine", imported by "node_modules/@mui/styled-engine/esm/StyledEngineProvider/StyledEngineProvider.js".
file: C:/Users/bessp/source/repos/constellation-via-heroui/node_modules/@mui/styled-engine/esm/StyledEngineProvider/StyledEngineProvider.js:4:9
```
So I pulled out all of the additional dependencies from `package.json` and then reinstalled them, first installing `@material/mui@^6.2.0`

`npm install @mui/material@6.2.0 @mui/icons-material@6.2.0 @mui/lab@6.0.0-beta.19  @mui/styles@6.2.0 @mui/x-date-pickers@7.23.1 @tinymce/tinymce-react dayjs downloadjs lodash.difference mui-tel-input react-datepicker react-number-format react-redux throttle-debounce uuid`

Then `npm run build` to account for all the newly added stuff.


Wrapped `main.tsx` in a material provider to get things running temporarily.

Worked on making `src/pages/pega.tsx` show a button that, when clicked, shows an embedded case creation view.

Generated a `TextInput.tsx` override in the standalone SDK, copied the .tsx file over to `src/dx2hero`. Modified `tailwind.config.js` to monitor the `src/dx2hero` folder. Modified `sdk-local-component-map.ts` to use `TextInput.tsx`. Then modified `TextInput.tsx` to use HeroUI instead of material.

Used DX API Explorer and browser network tracer and react debugger to find remaining components to override:

- Fields:
    - [x] AutoComplete
    - [x] Date
    - [x] Dropdown
    - [x] Email
    - [x] Phone
    - [x] RadioButtons
    - [x] TextInput
- Infra:
    - [x] FlowContainer (this one isn't in the builder, had to grab it [from source](https://github.com/pegasystems/react-sdk-components/blob/29499ce83d08a14768981fed8eefcc613d5e7dab/packages/react-sdk-components/src/components/infra/Containers/FlowContainer/FlowContainer.tsx))
    - [x] ActionButtons
    - [x] Assignment
    - [x] AssignmentCard
    - [x] MultiStep
    - [x] ToDo
- Templates:
    - [x] DefaultForm
    - [x] TwoColumn
- Misc:
    - [x] Wire up cancel button
    - [x] Handle click-away-and-back-again

Then I tried to pull out all the MUI stuff from `package.json`:

```
@mui/icons-material
@mui/lab
@mui/material
@mui/styles
@mui/x-date-pickers
mui-tel-input
```

I ran `npm prune` and then `npm run dev`, but Vite threw about a billion errors about missing MUI stuff, it was basically this:

```
X [ERROR] Could not resolve "@mui/material/Checkbox"

    node_modules/@pega/react-sdk-components/lib/components/template/ListView/ListView.js:37:21:
      37 │ import Checkbox from '@mui/material/Checkbox';
         ╵                      ~~~~~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mui/material/Checkbox" as external to exclude it from the bundle, which
  will remove this error and leave the unresolved path in the bundle.
```

Over and over again. Given that `@pega/react-sdk-components` is one of the core libraries, it doesn't look like it's possible to pull MUI out of the project dependencies at this point in time.

But I *was* able to pull out the `ThemeProvider` in `src/main.tsx`.

# Based on Vite & HeroUI Template

This is a template for creating applications using Vite and HeroUI (v2).

[Try it on CodeSandbox](https://githubbox.com/frontio-ai/vite-template)

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- 
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/frontio-ai/vite-template.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/frontio-ai/vite-template/blob/main/LICENSE).
