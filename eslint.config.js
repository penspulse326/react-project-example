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
  ...tailwindcss.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: {},
      },
    },
    /**
     * 關閉 tailwindcss 的 no-custom-classname 規則，因為 shadcn/ui 有大量的自訂 className
     */
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
);
