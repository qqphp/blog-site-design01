import { useState } from 'react';
import { navigation } from '../data/navigation';

export function Logo() { return <a href="?" className="logo" aria-label="开发阿雷首页"><span>开</span><b>发阿雷</b><small>DEV ALEI</small></a> }

export function SiteHeader({ page, onExternalClick }) {
  const [open, setOpen] = useState(false);
  return <header className="header"><Logo/><nav className={open ? 'open' : ''} aria-label="主导航">{navigation.map(([label, key]) => <a key={key} className={page === key ? 'active' : ''} href={key === 'home' ? '?' : `?page=${key}`} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="social"><button onClick={onExternalClick} aria-label="GitHub">GH</button><button onClick={onExternalClick} aria-label="哔哩哔哩">B</button><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="打开菜单">☰</button></div></header>
}

export function SiteFooter({ onExternalClick }) { return <footer><Logo/><p>把复杂的事，说得有意思一点。</p><div><button onClick={onExternalClick}>GitHub</button><button onClick={onExternalClick}>Bilibili</button><button onClick={onExternalClick}>RSS</button></div><small>© 2026 开发阿雷 · 已运行 365 天</small></footer> }
