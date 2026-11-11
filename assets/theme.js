(() => {
  const root = document.documentElement;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';
  function apply(theme, persist = false) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    button.textContent = dark ? '☀ Светлая' : '☾ Тёмная';
    button.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
    button.setAttribute('aria-pressed', String(dark));
    if (persist) { try { localStorage.setItem('grove-report-theme', theme); } catch {} }
  }
  button.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  document.body.append(button);
  apply(root.dataset.theme || 'dark');
  addEventListener('storage', event => { if (event.key === 'grove-report-theme') apply(event.newValue === 'light' ? 'light' : 'dark'); });
})();
