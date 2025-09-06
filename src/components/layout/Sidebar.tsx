import React from 'react';
import { LogoCrono } from '../icons/LogoCrono.tsx';
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ListAltOutlined from '@mui/icons-material/ListAltOutlined';
import ContentPasteOutlined from '@mui/icons-material/ContentPasteOutlined';
import TimelineOutlined from '@mui/icons-material/TimelineOutlined';
import ChecklistOutlined from '@mui/icons-material/ChecklistOutlined';
import MailOutlineOutlined from '@mui/icons-material/MailOutlineOutlined';
import HandshakeOutlined from '@mui/icons-material/HandshakeOutlined';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';

type SidebarItemConfig = {
    key: string;
    label: string;
    icon: React.ReactNode;
    badge?: number;
    active?: boolean;
    hasCaret?: boolean;
};

const items: SidebarItemConfig[] = [
    { key: 'dashboard', label: 'Dashboard', icon: <DashboardOutlined />, active: true },
    { key: 'find', label: 'Find New', icon: <SearchOutlined /> },
    { key: 'lists', label: 'Lists', icon: <ListAltOutlined /> },
    { key: 'templates', label: 'Templates', icon: <ContentPasteOutlined /> },
    { key: 'sequences', label: 'Sequences', icon: <TimelineOutlined /> },
    { key: 'tasks', label: 'Tasks', icon: <ChecklistOutlined /> },
    { key: 'inbox', label: 'Inbox', icon: <MailOutlineOutlined />, badge: 24 },
    { key: 'deals', label: 'Deals', icon: <HandshakeOutlined /> },
    { key: 'analytics', label: 'Analytics', icon: <BarChartOutlined />, hasCaret: true },
];

export const Sidebar: React.FC<{ inboxBadge?: number }> = ({ inboxBadge }) => {
    const finalItems = items.map((it) =>
        it.key === 'inbox' && typeof inboxBadge === 'number'
            ? { ...it, badge: inboxBadge }
            : it
    );

    return (
        <aside
            style={{
                width: 240,
                height: '100vh',
                background: '#FFFFFF',
                borderRight: '1px solid #E6E9F2',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >

            <div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '20px 16px',
                    }}
                >
                    <LogoCrono />
                    <button
                        aria-label="Collapse sidebar"
                        style={{
                            border: 'none',
                            background: '#F5F7F9',
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            color: '#98A2B3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                        }}
                    >
                        <ChevronLeftRounded fontSize="small" />
                    </button>
                </div>

                {/* Меню */}
                <nav style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {finalItems.map((item) => (
                        <div
                            key={item.key}
                            className={`menu-item${item.active ? ' active' : ''}`}
                            role="button"
                            tabIndex={0}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 12px',
                                borderRadius: 8,
                                color: item.active ? '#00C2A8' : '#7A8395',
                                fontWeight: item.active ? 600 : 500,
                                background: item.active ? '#F0FFFD' : 'transparent',
                                cursor: 'pointer',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <span style={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </div>
                            {typeof item.badge === 'number' && item.badge > 0 && (
                                <span
                                    style={{
                                        background: '#FFC844',
                                        color: '#1F2937',
                                        borderRadius: 999,
                                        padding: '2px 8px',
                                        fontSize: 12,
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.badge}
                                </span>
                            )}
                            {item.hasCaret && <ExpandMoreOutlined fontSize="small" style={{ color: '#98A2B3' }} />}
                        </div>
                    ))}
                </nav>

                {/* Trial */}
                <div
                    style={{
                        padding: '0 16px 16px 16px',
                    }}
                >
                    <div
                        style={{
                            background: '#FFF5D6',
                            border: '1px solid #FDE68A',
                            borderRadius: 12,
                            padding: 12,
                        }}
                    >
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#1F2937', marginBottom: 8 }}>
                            Trial ends in 2 days
                        </div>
                        <button
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                                background: '#FFC844',
                                color: '#1F2937',
                                border: 'none',
                                borderRadius: 8,
                                padding: '6px 10px',
                                fontSize: 13,
                                fontWeight: 700,
                                cursor: 'pointer',
                            }}
                        >
                            Upgrade plan 🔒
                        </button>
                    </div>
                </div>
            </div>

            {/* user */}
            <div style={{ padding: '12px 16px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        paddingTop: 12,
                        borderTop: '1px solid #E6E9F2',
                    }}
                >
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            background: '#EEF2F7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#98A2B3',
                            fontWeight: 700,
                        }}
                    >
                        W
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>
                            William Robertson
                        </span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: '#7A8395' }}>Sales</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
