import React from 'react';
import { Box, Typography, IconButton, Paper, Tooltip, tooltipClasses } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { SectionCard } from '../SectionCard.tsx';

type KpiCfg = {
    key: string;
    label: string;
    value: number;
    max: number;
    color: string;
    light: string;
    Icon: React.ElementType;
    tooltip?: string;
};

const KPIS: KpiCfg[] = [
    {
        key: 'contacts',
        label: 'Contacts engaged',
        value: 0,
        max: 500,
        color: '#3B85E8',
        light: '#EAF3FB',
        Icon: PersonOutlineOutlinedIcon,
        tooltip: 'Contacts who have at least one logged activity within the current month',
    },
    { key: 'companies', label: 'Companies engaged', value: 0, max: 500, color: '#3B58DB', light: '#EAF3FB', Icon: BusinessCenterOutlinedIcon },
    { key: 'activities', label: 'Activities', value: 1000, max: 2000, color: '#8846DC', light: '#F2EAFF', Icon: ListAltOutlinedIcon },
    { key: 'meetings', label: 'Meetings', value: 20, max: 30, color: '#E2AD13', light: '#FEF3D2', Icon: DuoOutlinedIcon },
    { key: 'deals', label: 'Deals', value: 100, max: 200, color: '#E769CB', light: '#FDE5F8', Icon: SellOutlinedIcon },
    { key: 'pipeline', label: 'Pipeline', value: 50000, max: 100000, color: '#1A9D6E', light: '#E9F8F8', Icon: PaidOutlinedIcon },
];

const DarkTooltip: React.FC<React.PropsWithChildren<{ title: React.ReactNode }>> = ({ title, children }) => (
    <Tooltip
        title={title}
        arrow
        placement="top"
        componentsProps={{
            tooltip: {
                sx: {
                    [`&.${tooltipClasses.tooltip}`]: {
                        background: '#151618',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        maxWidth: 280,
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: 12,
                        lineHeight: '16px',
                        textAlign: 'center',
                    },
                },
            },
            arrow: {
                sx: {
                    [`&.${tooltipClasses.arrow}`]: {
                        color: '#151618',
                        '&:before': {
                            width: '7px',
                            height: '4px',
                        },
                    },
                },
            },
        }}
    >
        {children as any}
    </Tooltip>
);

const KpiCard: React.FC<{ cfg: KpiCfg }> = ({ cfg }) => {
    const pct = Math.max(0, Math.min(100, (cfg.value / cfg.max) * 100));
    const valueText =
        cfg.key === 'pipeline'
            ? `€${(cfg.value / 1000).toFixed(0)}K`
            : `${cfg.value}`;
    const maxText =
        cfg.key === 'pipeline'
            ? `${(cfg.max / 1000).toFixed(0)}K`
            : `${cfg.max}`;

    const Header = (
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px', height: 16 }}>
            <Typography
                component="span"
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: '#3E485B',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    pr: cfg.tooltip ? '20px' : 0,
                }}
            >
                {cfg.label}
            </Typography>


            {cfg.tooltip && (
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: 16,
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0,
                        transition: 'opacity 0.15s ease',
                        pointerEvents: 'none',
                        '.kpi-card:hover &': { opacity: 1, pointerEvents: 'auto' },
                    }}
                >
                    <DarkTooltip title={cfg.tooltip}>
                        <IconButton size="small" sx={{ p: 0, color: '#7A8395' }}>
                            <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </DarkTooltip>
                </Box>
            )}
        </Box>
    );

    return (
        <Paper
            elevation={0}
            className="kpi-card"
            sx={{
                boxSizing: 'border-box',
                width: '184px',
                height: '72px',
                borderRadius: '8px',
                border: '1px solid #E6E9F2',
                p: '12px',
                display: 'grid',
                gridTemplateRows: '16px 1fr',
                gap: '8px',
            }}
        >
            {Header}


            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '6px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <cfg.Icon sx={{ fontSize: 16, color: cfg.color }} />
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: '24px',
                                color: cfg.color,
                            }}
                        >
                            {valueText}
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 500,
                                fontSize: 16,
                                lineHeight: '24px',
                                color: '#AFB5BF',
                            }}
                        >
                            /{maxText}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: '166px',
                        height: '3px',
                        borderRadius: '3px',
                        background: cfg.light,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '3px',
                            width: `${pct}%`,
                            background: cfg.color,
                            borderRadius: '3px',
                        }}
                    />
                </Box>
            </Box>
        </Paper>
    );
};

export const KPIsPanel: React.FC = () => {
    return (
        <SectionCard
            title={
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: '22px',
                        color: '#010E27',
                    }}
                >
                    May’s performance
                </Typography>
            }
            right={
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#0A9B94', cursor: 'pointer' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: '18px',
                            color: '#0A9B94',
                        }}
                    >
                        Edit KPIs
                    </Typography>
                    <IconButton size="small" sx={{ color: '#0A9B94', p: 0.25 }}>
                        <EditOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Box>
            }
            paperSx={{
                borderRadius: '16px',
                border: '1px solid #E6E9F2',
                width: '100%',
                height: '100%',
            }}
            headerSx={{
                px: '16px',
                pt: '12px',
                pb: '12px',
            }}
            contentSx={{
                px: '8px',
                py: '8px',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 184px)',
                    gridTemplateRows: 'repeat(3, 72px)',
                    gap: '16px 16px',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                {KPIS.map(k => (
                    <KpiCard key={k.key} cfg={k} />
                ))}
            </Box>
        </SectionCard>
    );
};