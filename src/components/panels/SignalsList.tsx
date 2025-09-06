import React, { useState } from 'react';
import { Badge, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Menu, MenuItem, Typography, Avatar } from '@mui/material';
import { SectionCard } from '../SectionCard.tsx';
import { PillCount, SmallTag } from '../ui/Tags.tsx';
import { ActionButton } from '../ui/ActionButton.tsx';
import type { Signal } from '../../SignalInterface.tsx';
import { colors } from '../theme/colors.ts';

type Props = {
    signals: Signal[];
    onChange: (next: Signal[]) => void;
};

type MenuAnchor = { id: string | null; anchorEl: HTMLElement | null };

export const SignalsList: React.FC<Props> = ({ signals, onChange }) => {
    const [menu, setMenu] = useState<MenuAnchor>({ id: null, anchorEl: null });

    const handleOpenMenu = (id: string) => (e: React.MouseEvent<HTMLElement>) => {
        setMenu({ id, anchorEl: e.currentTarget });
    };
    const handleCloseMenu = () => setMenu({ id: null, anchorEl: null });

    const updateSignal = (id: string, patch: Partial<Signal>) =>
        onChange(signals.map(s => (s.id === id ? { ...s, ...patch } : s)));

    const markComplete = (id: string) => { updateSignal(id, { read: true, status: 'completed' }); handleCloseMenu(); };
    const deleteSignal = (id: string) => { onChange(signals.filter(s => s.id !== id)); handleCloseMenu(); };

    return (
        <SectionCard
            title={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>Signals</Typography>
                    <PillCount count={signals.length} />
                </Box>
            }
            subtitle="Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn connections."
        >
            <List disablePadding>
                {signals.map((signal, idx) => {
                    const isMenuOpen = menu.id === signal.id;
                    return (
                        <React.Fragment key={signal.id}>
                            <ListItem
                                disableGutters
                                sx={{ px: 0.5, py: 1.25 }}
                                secondaryAction={
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1.5, minWidth: 86, textAlign: 'right' }}>
                                            {signal.time}
                                        </Typography>

                                        <ActionButton onClick={handleOpenMenu(signal.id)}>Action</ActionButton>

                                        <Menu
                                            anchorEl={menu.anchorEl}
                                            open={isMenuOpen}
                                            onClose={handleCloseMenu}
                                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                            slotProps={{ paper: { sx: { borderRadius: 2 } } as any }}
                                        >
                                            <MenuItem onClick={() => markComplete(signal.id)} disabled={signal.read}>Complete</MenuItem>
                                            <MenuItem onClick={() => deleteSignal(signal.id)}>Delete</MenuItem>
                                        </Menu>
                                    </Box>
                                }
                            >
                                <ListItemAvatar sx={{ minWidth: 64 }}>
                                    <Badge
                                        color="warning"
                                        variant="dot"
                                        overlap="circular"
                                        invisible={signal.read}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        sx={{ '& .MuiBadge-badge': { background: colors.warning, boxShadow: '0 0 0 2px #fff' } }}
                                    >
                                        <Avatar
                                            sx={{ bgcolor: '#0B1220', color: 'white', width: 44, height: 44, fontWeight: 800 }}
                                            alt={signal.title}
                                            src={signal.avatarUrl || undefined}
                                        >
                                            {signal.title?.[0] ?? 'S'}
                                        </Avatar>
                                    </Badge>
                                </ListItemAvatar>

                                <ListItemText
                                    primaryTypographyProps={{ component: 'div' }}
                                    primary={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: signal.read ? 500 : 800, color: '#0F172A' }}>
                                                {signal.title}
                                            </Typography>
                                        </Box>
                                    }
                                    secondaryTypographyProps={{ component: 'div' }}
                                    secondary={
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexWrap: 'wrap' }}>
                                            {signal.subtitle && (
                                                <Typography variant="body2" color="text.secondary">{signal.subtitle}</Typography>
                                            )}
                                            <SmallTag variant="lilac" label="Role change" />
                                            <SmallTag variant="mint" label="In sequence" />
                                        </Box>
                                    }
                                />
                            </ListItem>

                            {idx < signals.length - 1 && <Divider sx={{ mx: 0.5 }} />}
                        </React.Fragment>
                    );
                })}

                {signals.length === 0 && (
                    <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
                        <Typography variant="body1">No signals</Typography>
                    </Box>
                )}
            </List>
        </SectionCard>
    );
};