import React, { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import { Sidebar } from './components/layout/Sidebar.tsx';
import { SectionCard } from './components/SectionCard.tsx';
import { TasksRow } from './components/panels/TaskRow.tsx';
import { KPIsPanel } from './components/panels/KpisPanel.tsx';
import { SignalsList } from './components/panels/SignalsList.tsx';
import { OnboardingPanel } from './components/panels/OnboardingPanel.tsx';
import type { Signal } from './SignalInterface.ts';
import signalsData from './NotificationLogData.json';
import { RepliesPanel } from './components/panels/RepliesPanel.tsx';

const App: React.FC = () => {
    const [signals, setSignals] = useState<Signal[]>(
        () => (signalsData as unknown as Signal[]).map(s => ({ ...s }))
    );

    const unreadCount = useMemo(() => signals.filter(s => !s.read).length, [signals]);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                bgcolor: '#F5F7FB',
                overflow: 'hidden',
            }}
        >
            <Sidebar inboxBadge={unreadCount} />


            <Box
                sx={{

                    '--gap': '24px',
                    '--hTop': 'clamp(130px, 16vh, 160px)',
                    '--hTasks': 'clamp(120px, 18vh, 160px)',
                    flex: 1,
                    height: '100%',
                    display: 'grid',

                    gridTemplateColumns: 'minmax(360px, 1.05fr) minmax(360px, 1.05fr) minmax(340px, 0.9fr)',
                    gridTemplateRows: 'auto 1fr',
                    gap: 'var(--gap)',
                    p: 'var(--gap)',
                    boxSizing: 'border-box',
                    minWidth: 0,
                    alignItems: 'start',
                    alignContent: 'start',

                    overflow: 'hidden',
                } as any}
            >

                <Box
                    sx={{
                        gridColumn: '1 / 3',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: 'var(--hTop) var(--hTasks)',
                        columnGap: 'var(--gap)',
                        rowGap: 'var(--gap)',
                        height: 'calc(var(--hTop) + var(--gap) + var(--hTasks))',
                        minWidth: 0,
                    }}
                >
                    {/* Welcome */}
                    <SectionCard
                        title={
                            <Box
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 700,
                                    fontSize: 24,
                                    lineHeight: '30px',
                                    color: '#010E27',
                                }}
                            >
                                Welcome Alex,
                            </Box>
                        }
                        subtitle={
                            <Box
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 400,
                                    fontSize: 14,
                                    lineHeight: '20px',
                                    color: '#7A8395',
                                }}
                            >
                                Here’s your performance overview where you can track your daily and monthly KPIs
                            </Box>
                        }
                        paperSx={{
                            borderRadius: '16px',
                            border: '1px solid #E6E9F2',
                            width: '100%',
                            height: '100%',
                        }}
                        headerSx={{
                            px: '24px',
                            pt: '24px',
                            pb: '24px',
                            alignItems: 'flex-start',
                            gap: '8px',
                        }}
                        disableDivider
                    />

                    {/* Replies */}
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <RepliesPanel count={24} />
                    </Box>

                    {/* Today’s tasks*/}
                    <Box sx={{ gridColumn: '1 / 3', width: '100%', height: '100%' }}>
                        <TasksRow variant="fluid" />
                    </Box>
                </Box>

                {/* KPI */}
                <Box
                    sx={{
                        gridColumn: '3 / 4',
                        width: '100%',
                        height: 'calc(var(--hTop) + var(--gap) + var(--hTasks))',
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        overflow: 'hidden',
                    }}
                >
                    <Box sx={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
                        <KPIsPanel />
                    </Box>
                </Box>


                <Box
                    sx={{
                        gridColumn: '1 / 3',
                        height: '100%',
                        minHeight: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--gap)',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            minHeight: 0,
                            overflow: 'auto',
                        }}
                    >
                        <SignalsList signals={signals} onChange={setSignals} />
                    </Box>
                </Box>

                <Box
                    sx={{
                        gridColumn: '3 / 4',
                        height: '100%',
                        minHeight: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto',
                    }}
                >
                    <OnboardingPanel />
                </Box>
            </Box>
        </Box>
    );
};

export default App;
