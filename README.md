# Design-System

Drinking from UI base layer designed here.

[Figma Design System](https://www.figma.com/file/adnmwbF6FlEyQPBfChxlSd/D_D-WEBSITE-(v1-%26-v2)?type=design&node-id=240%3A15773&mode=design&t=hlA98RZLkoQI1UtJ-1)

### TDSX package manager 

...

### Storybook component manager

...


### Adding the design system

Install the library

```
yarn add @gordo-d/d-d-ui-components
```

At the root file of your project add

```
import "@gordo-d/d-d-ui-components/styles.css";
```

The design system is built upon Tailwind library so remember to install it acordingly

At tailwind.config.ts

```
import { theme } from '@gordo-d/d-d-ui-components';
import type { Config } from 'tailwindcss';

const config: Config = {

   // other config ...

  theme: {
    extend: {
      ...theme // <-- import the custom design system theme
    },
  },

  // other config ...

}

export default config
```