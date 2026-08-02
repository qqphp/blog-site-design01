import { useEffect } from 'react';

const labels = { A: '编辑部双栏', B: '独立杂志长卷', C: '公告板网格' };

export function VariantSwitcher({ variant, onChange }) {
  const keys = ['A', 'B', 'C'];
  const cycle = delta => onChange(keys[(keys.indexOf(variant) + delta + keys.length) % keys.length]);
  useEffect(() => { const onKeyDown = event => { const element = document.activeElement; if (['INPUT', 'TEXTAREA'].includes(element?.tagName) || element?.isContentEditable) return; if (event.key === 'ArrowLeft') cycle(-1); if (event.key === 'ArrowRight') cycle(1); }; addEventListener('keydown', onKeyDown); return () => removeEventListener('keydown', onKeyDown); }, [variant]);
  if (import.meta.env.PROD) return null;
  return <aside className="switcher"><button onClick={() => cycle(-1)} aria-label="上一种首页布局">←</button><span><b>{variant}</b> — {labels[variant]}</span><button onClick={() => cycle(1)} aria-label="下一种首页布局">→</button></aside>;
}
