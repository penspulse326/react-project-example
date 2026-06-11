import antfu from '@antfu/eslint-config';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,

    stylistic: {
      indent: 2,
      quotes: 'single',
      braceStyle: '1tbs',
      semi: true,
    },
    /**
     * format files that ESLint cannot handle yet
     */
    formatters: true,
  },
  ...tailwindcss.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: {},
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [],
        },
      ],
    },
  },
);
