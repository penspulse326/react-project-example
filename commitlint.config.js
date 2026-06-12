/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  /**
   * 約定式提交 (Conventional Commits) 規範說明：
   * 格式: <type>(<scope>): <subject>
   *
   * 常用 <type> 類型：
   * - feat: 新增功能 (feature)
   * - fix: 修復 Bug (bug fix)
   * - docs: 僅修改文件 (documentation)
   * - style: 格式/排版修改 (不影響程式碼運作，例如空格、分號等)
   * - refactor: 重構 (既非新增功能也非修復 Bug)
   * - perf: 改善效能
   * - test: 新增或修改測試案例
   * - build: 影響建置系統或外部依賴的修改 (如 npm, webpack 等)
   * - ci: 修改 CI 設定檔或腳本 (如 GitHub Actions 等)
   * - chore: 其他不影響原始碼與測試檔的日常瑣事
   * - revert: 還原先前的 commit
   *
   * 規則限制：
   * 1. type 與 scope 必須使用小寫 (lowercase)
   * 2. subject 不能為空，且結尾不能有句號 (.)
   * 3. 首行字數限制在 72 字元以內
   */
};
