/**
 * 梯子推荐网 (tizituijian.vip) - 极简轻量交互脚本
 * 纯原生 JavaScript，零外部依赖，毫秒级执行
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. 移动端菜单折叠切换
  const navToggle = document.querySelector('.nav-toggle-btn');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('open');
    });
  }

  // 2. 客户端筛选/横向对比交互 (仅在 compare 页面启用)
  const compareCheckboxes = document.querySelectorAll('.compare-check-input');
  if (compareCheckboxes.length > 0) {
    const updateCompareColumns = () => {
      const selected = Array.from(compareCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      document.querySelectorAll('.compare-col').forEach(col => {
        const airportId = col.getAttribute('data-airport');
        if (selected.includes(airportId)) {
          col.style.display = '';
        } else {
          col.style.display = 'none';
        }
      });

      const countDisplay = document.getElementById('selected-count');
      if (countDisplay) {
        countDisplay.textContent = selected.length;
      }
    };

    // 同步胶囊视觉选中态
    const syncCheckboxVisual = (cb) => {
      const label = cb.closest('.compare-check-label');
      if (label) {
        label.classList.toggle('is-checked', cb.checked);
      }
    };

    // 初始化胶囊态
    compareCheckboxes.forEach(cb => {
      syncCheckboxVisual(cb);
      cb.addEventListener('change', () => {
        const checkedCount = Array.from(compareCheckboxes).filter(c => c.checked).length;
        if (checkedCount < 1) {
          cb.checked = true;
          alert('请至少保留一家机场进行对比');
          return;
        }
        syncCheckboxVisual(cb);
        updateCompareColumns();
      });
    });

    // 快捷预设按钮响应
    const presetMap = {
      top5: ['breezenet', 'muguang', 'feimaoyun', 'wuyou', 'lingmao'],
      budget: ['feiv', 'breezenet', 'feimaoyun', 'firefly'],
      premium: ['yinxingren', 'flashleap', 'wuyou', 'muguang', 'lingmao'],
      all: Array.from(compareCheckboxes).map(cb => cb.value),
      reset: ['breezenet', 'muguang', 'feimaoyun', 'wuyou', 'lingmao']
    };

    document.querySelectorAll('.compare-action-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        const targets = presetMap[preset] || presetMap.reset;
        compareCheckboxes.forEach(cb => {
          cb.checked = targets.includes(cb.value);
          syncCheckboxVisual(cb);
        });
        updateCompareColumns();
      });
    });
  }
});
