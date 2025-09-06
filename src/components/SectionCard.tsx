import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';
import { colors } from './theme/colors.ts';

import type { SxProps, Theme } from '@mui/material';

type Props = {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;


    paperSx?: SxProps<Theme>;
    headerSx?: SxProps<Theme>;
    contentSx?: SxProps<Theme>;
    disableDivider?: boolean;
};

export const SectionCard: React.FC<Props> = ({ title, subtitle, right, children, paperSx, headerSx, contentSx, disableDivider }) => {
    const hasHeader = !!(title || subtitle || right);

    return (
        <Paper
            elevation={0}
            sx={[
                {
                    borderRadius: 2,
                    border: `1px solid ${colors.lightBorder}`,
                    boxShadow: colors.cardShadow,
                    bgcolor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                },
                paperSx,
            ]}
        >
            {hasHeader && (
                <Box
                    sx={[
                        {
                            px: 2.5,
                            pt: 2.5,
                            pb: children ? 1.5 : 2.5,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        },
                        headerSx,
                    ]}
                >
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        {typeof title === 'string' ? (
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                {title}
                            </Typography>
                        ) : (
                            title
                        )}
                        {subtitle && (
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                    {right}
                </Box>
            )}


            {hasHeader && children && !disableDivider && <Divider />}


            {children && (
                <Box sx={[{ p: hasHeader ? 2.5 : 3 }, contentSx]}>
                    {children}
                </Box>
            )}
        </Paper>
    );
};