import plugin from 'tailwindcss/plugin';

import { ARIA_ATTRIBUTES, ENUMERABLES } from './constants';

export default plugin(({ addVariant, e }) => {
  ARIA_ATTRIBUTES.forEach((boolean) => {
    const selector = `aria-${boolean}`;
    addVariant(selector, ({ modifySelectors, separator }) =>
      modifySelectors(
        ({ className }) =>
          `[${selector}="true"].${e(`${selector}${separator}${className}`)}`
      )
    );

    const groupSelector = `group-aria-${boolean}`;
    addVariant(groupSelector, ({ modifySelectors, separator }) =>
      modifySelectors(
        ({ className }) =>
          `.group[aria-${boolean}="true"] .${e(
            `${groupSelector}${separator}${className}`
          )}`
      )
    );

    const peerSelector = `peer-aria-${boolean}`;
    addVariant(peerSelector, ({ modifySelectors, separator }) =>
      modifySelectors(
        ({ className }) =>
          `.peer[aria-${boolean}="true"] ~ .${e(
            `${peerSelector}${separator}${className}`
          )}`
      )
    );
  });

  for (const [attribute, values] of Object.entries(ENUMERABLES)) {
    for (const value of values) {
      const selector = `aria-${attribute}-${value}`;
      addVariant(selector, ({ modifySelectors, separator }) =>
        modifySelectors(
          ({ className }) =>
            `[aria-${attribute}="${value}"].${e(
              `${selector}${separator}${className}`
            )}`
        )
      );

      const groupSelector = `group-aria-${attribute}-${value}`;
      addVariant(groupSelector, ({ modifySelectors, separator }) =>
        modifySelectors(
          ({ className }) =>
            `.group[aria-${attribute}="${value}"] .${e(
              `${groupSelector}${separator}${className}`
            )}`
        )
      );

      const peerSelector = `peer-aria-${attribute}-${value}`;
      addVariant(peerSelector, ({ modifySelectors, separator }) =>
        modifySelectors(
          ({ className }) =>
            `.peer[aria-${attribute}="${value}"] ~ .${e(
              `${peerSelector}${separator}${className}`
            )}`
        )
      );
    }
  }
});
