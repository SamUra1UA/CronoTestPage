import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { colors } from '../theme/colors.ts';
import { SmallTag } from '../ui/Tags.tsx';

type Props = {

    variant?: 'fluid' | 'fixed';
};

export const TasksRow: React.FC<Props> = ({ variant = 'fixed' }) => {
    const isFluid = variant === 'fluid';
    return (
        <Paper
            elevation={0}
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 2,     // 16px
                gap: 1,   // 8px
                width: isFluid ? '100%' : 800,
                height: isFluid ? '100%' : 148,
                background: '#FFFFFF',
                border: `1px solid #E6E9F2`,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: colors.cardShadow,
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: '24px',
                    color: '#0F172A',
                }}
            >
                Today’s tasks
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 1,
                    width: '100%',
                    minHeight: 0,
                    height: 'calc(100% - 24px - 8px)',
                }}
            >
                {/* Overdue */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '12px',
                        p: 2,
                        border: `1px solid ${colors.lightBorder}`,
                        bgcolor: '#FFE7E7',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: 0,
                    }}
                >
                    <Typography sx={{ fontWeight: 800, fontSize: 28, color: '#D92D20', lineHeight: '28px' }}>
                        3
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 700, color: '#7A1D1B' }}>Overdue</Typography>
                        <Box component="span" aria-hidden sx={{ color: '#A0A6B1', fontWeight: 700 }}>
                            ›
                        </Box>
                    </Box>
                </Paper>

                {/* Pending Manual */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '12px',
                        p: 2,
                        border: `1px solid ${colors.lightBorder}`,
                        bgcolor: '#FFF6DB',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: 0,
                    }}
                >
                    <Typography sx={{ fontWeight: 800, fontSize: 28, color: '#A16207', lineHeight: '28px' }}>
                        10
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 700, color: '#8A6110' }}>Pending Manual</Typography>
                        <Box component="span" aria-hidden sx={{ color: '#A0A6B1', fontWeight: 700 }}>
                            ›
                        </Box>
                    </Box>
                </Paper>

                {/* Pending Auto */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '12px',
                        p: 2,
                        border: `1px solid ${colors.lightBorder}`,
                        bgcolor: '#EDF3FF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: 0,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontWeight: 800, fontSize: 28, color: '#1E3A8A', lineHeight: '28px' }}>
                            20
                        </Typography>
                        <SmallTag variant="pink" label="1 error" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontWeight: 700, color: '#334155' }}>Pending Auto</Typography>
                        <Box component="span" aria-hidden sx={{ color: '#A0A6B1', fontWeight: 700 }}>
                            ›
                        </Box>
                    </Box>
                </Paper>

                {/* Completed */}
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: '12px',
                        p: 2,
                        border: `1px solid ${colors.lightBorder}`,
                        bgcolor: '#E8F6EE',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minWidth: 0,
                    }}
                >
                    <Typography sx={{ fontWeight: 800, fontSize: 28, color: '#0F766E', lineHeight: '28px' }}>
                        8
                    </Typography>
                    <Typography sx={{ fontWeight: 700, color: '#0B4F49' }}>Completed</Typography>
                </Paper>
            </Box>
        </Paper>
    );
};