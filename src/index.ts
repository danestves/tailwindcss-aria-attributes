import plugin from 'tailwindcss/plugin';

const attributes = {
  boolean: [
    'atomic',
    'busy',
    'checked',
    'current',
    'disabled',
    'expanded',
    'grabbed',
    'haspopup',
    'hidden',
    'invalid',
    'live',
    'modal',
    'multiline',
    'multiselectable',
    'pressed',
    'readonly',
    'required',
    'selected',
  ],
  enum: {
    autocomplete: ['both', 'inline', 'list', 'none'],
    current: ['date', 'location', 'page', 'step', 'time'],
    dropeffect: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
    haspopup: ['dialog', 'grid', 'listbox', 'menu', 'tree'],
    orientation: ['horizontal', 'undefined', 'vertical'],
    relevant: ['additions', 'all', 'removals', 'text'],
    sort: ['ascending', 'descending', 'none', 'other'],
  },
};

export default plugin(({ addVariant, matchVariant }) => {
  const addAriaVariant = (name: string, value: string) => {
    addVariant(name, `[${name}="${value}"]&`);
    matchVariant(
      'group',
      (_, { modifier }) =>
        modifier
          ? `:merge(.group\\/${modifier})[${name}="${value}"] &`
          : `:merge(.group)[${name}="${value}"] &`,
      {
        values: { [name]: name },
      }
    );
    matchVariant(
      'peer',
      (_, { modifier }) =>
        modifier
          ? `:merge(.peer\\/${modifier})[${name}="${value}"] ~ &`
          : `:merge(.peer)[${name}="${value}"] ~ &`,
      {
        values: { [name]: name },
      }
    );
  };
  const addAriaEnumVariant = (name: string, value: string) => {
    const variantName = `${name}-${value}`;
    addVariant(variantName, `[${name}="${value}"]&`);
    matchVariant(
      'group',
      (_, { modifier }) =>
        modifier
          ? `:merge(.group\\/${modifier})[${name}="${value}"] &`
          : `:merge(.group)[${name}="${value}"] &`,
      {
        values: { [variantName]: variantName },
      }
    );
    matchVariant(
      'peer',
      (_, { modifier }) =>
        modifier
          ? `:merge(.peer\\/${modifier})[${name}="${value}"] ~ &`
          : `:merge(.peer)[${name}="${value}"] ~ &`,
      {
        values: { [variantName]: variantName },
      }
    );
  };

  // Enum attributes go first because currently they are all non-interactive states.
  for (const [attribute, values] of Object.entries(attributes.enum)) {
    for (const value of values) {
      addAriaEnumVariant(`aria-${attribute}`, value);
    }
  }

  for (const attribute of attributes.boolean) {
    addAriaVariant(`aria-${attribute}`, 'true');
  }
});
