import antfu from '@antfu/eslint-config';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default antfu(
  {
    react: true,
    typescript: true,
    /**
     * antfu 規則會檢查 js/jsx/ts/tsx 這些檔案，並按照 stylistic 的格式來 lint
     */
    stylistic: {
      indent: 2,
      quotes: 'single',
      braceStyle: '1tbs',
      semi: true,
    },
    /**
     * 啟用 Prettier 來格式化 ESLint 還無法處理的檔案 (css, markdown, etc)
     */
    formatters: true,
  },
  /**
   * 啟用 rules 來排序 classname 和 custom-classname
   */
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
