import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { SectionCard } from '../SectionCard.tsx';

const items = [
    {
        icon: <Box component="img" src="/IntegrationsSetup.png" sx={{ width: 32, height: 32 }} />,
        label: 'Integrations Setup',
        duration: '5 min',
    },
    {
        icon: <Box component="img" src="/AddnewContact.png" sx={{ width: 32, height: 32 }} />,
        label: 'Add new Contact',
        duration: '5 min',
    },
    {
        icon: <Box component="img" src="/Createyourfirstsequence.png" sx={{ width: 32, height: 32 }} />,
        label: 'Create your first sequence',
        duration: '10 min',
    },
    {
        icon: <Box component="img" src="/Addcontactstosequence.png" sx={{ width: 32, height: 32 }} />,
        label: 'Add contacts to sequence',
        duration: '5 min',
    },
    {
        icon: <Box component="img" src="/Runyourfirsttask.png" sx={{ width: 32, height: 32 }} />,
        label: 'Run your first task',
        duration: '10 min',
    },
];

export const OnboardingPanel: React.FC = () => {
    return (
        <SectionCard
            title={
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: 16,
                        lineHeight: '24px',
                        color: '#010E27',
                    }}
                >
                    Onboarding
                </Typography>
            }
            paperSx={{
                borderRadius: '16px',
                border: '1px solid #E6E9F2',
                width: "100%",
                height: "100%",
                display: 'flex',
                flexDirection: 'column',
            }}
            headerSx={{
                px: '20px',
                pt: '16px',
                pb: '12px',
            }}
            contentSx={{
                px: '20px',
                py: '12px',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    flexGrow: 1,
                }}
            >
                {items.map((it, idx) => (
                    <React.Fragment key={it.label}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                px: '8px',
                                py: '12px',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: '8px',
                                        background: '#FFFFFF',
                                        display: 'grid',
                                        placeItems: 'center',
                                    }}
                                >
                                    {it.icon}
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif',
                                        fontWeight: 600,
                                        fontSize: 16,
                                        lineHeight: '24px',
                                        color: '#010E27',
                                    }}
                                >
                                    {it.label}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 500,
                                    fontSize: 16,
                                    lineHeight: '24px',
                                    color: '#7A8395',
                                }}
                            >
                                {it.duration}
                            </Typography>
                        </Box>
                        {idx < items.length - 1 && (
                            <Divider sx={{ borderColor: '#E6E9F2' }} />
                        )}
                    </React.Fragment>
                ))}
            </Box>
        </SectionCard>
    );
};
