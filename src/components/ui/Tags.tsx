import React from 'react';
import { Box } from '@mui/material';
import { colors } from '../theme/colors.ts';

export const PillCount: React.FC<{ count: number }> = ({ count }) => (
    <Box
        sx={{
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            px: 1,
            py: '2px',
            background: 'rgba(255,194,76,0.18)',
            border: `1px solid ${colors.warning}`,
            color: '#6B5E00',
            fontSize: 12,
            fontWeight: 700,
            minWidth: 28,
            justifyContent: 'center',
        }}
    >
        {count}
    </Box>
);

export const SmallTag: React.FC<{ label: string; variant?: 'lilac'|'mint'|'pink'|'blue'|'default' }> = ({ label, variant = 'default' }) => {
    const map: Record<string, { bg: string; color: string; border?: string }> = {
        lilac: { bg: 'rgba(178,119,255,0.12)', color: colors.lilac },
        mint:  { bg: 'rgba(35,194,174,0.12)', color: colors.teal },
        pink:  { bg: 'rgba(255,122,182,0.12)', color: colors.pink },
        blue:  { bg: 'rgba(59,130,246,0.10)', color: colors.infoBlue },
        default: { bg: 'rgba(0,0,0,0.06)', color: '#475467' },
    };
    const s = map[variant];
    return (
        <Box
            sx={{
                fontSize: 12,
                fontWeight: 700,
                px: 1,
                py: '2px',
                borderRadius: 999,
                bgcolor: s.bg,
                color: s.color,
                border: s.border,
                lineHeight: 1.4,
            }}
        >
            {label}
        </Box>
    );
};