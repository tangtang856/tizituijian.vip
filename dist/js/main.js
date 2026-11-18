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

  // 2. 简易客户端筛选/横向对比交互 (仅在 compare 页面启用)
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

    compareCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const checkedCount = Array.from(compareCheckboxes).filter(c => c.checked).length;
        if (checkedCount < 1) {
          cb.checked = true;
          alert('请至少保留一家机场进行对比');
          return;
        }
        updateCompareColumns();
      });
    });
  }
});
