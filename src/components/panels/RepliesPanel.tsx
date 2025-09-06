import React from 'react';
import { Box, Avatar, AvatarGroup } from '@mui/material';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { colors } from '../theme/colors.ts';

type RepliesPanelProps = {
    count: number;
    avatars?: string[];
    onOpenInbox?: () => void;
};

export const RepliesPanel: React.FC<RepliesPanelProps> = ({
                                                              count,
                                                              avatars = [],
                                                              onOpenInbox,
                                                          }) => {
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 2, // 16px
                gap: 1, // 8px
                width: '100%',
                height: '100%',
                background: '#FFFFFF',
                border: '1px solid #E6E9F2',
                borderRadius: '16px',
                overflow: 'hidden',
            }}
        >
            {/* Header row */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: 22,
                }}
            >
                <Box
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                        fontSize: 14,
                        lineHeight: '22px',
                        color: '#010E27',
                    }}
                >
                    Replies
                </Box>

                <Box
                    role="button"
                    onClick={onOpenInbox}
                    sx={{ display: 'inline-flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
                >
                    <Box
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: '18px',
                            color: '#0A9B94',
                        }}
                    >
                        Open inbox
                    </Box>
                    <ArrowForwardIosRoundedIcon sx={{ fontSize: 14, color: '#0A9B94' }} />
                </Box>
            </Box>

            {/* Body row */}
            <Box
                sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: 'calc(100% - 22px - 8px)',
                    background: '#E9F8F8',
                    borderRadius: '12px',
                    pl: 2,   // 16px
                    pr: 3,   // 24px
                    py: '16px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: 0 }}>
                    <Box
                        sx={{
                            width: 48,
                            height: 48,
                            borderRadius: '24px',
                            background: '#CEEDED',
                            display: 'grid',
                            placeItems: 'center',
                            color: colors?.teal ?? '#0A9B94',
                            flex: '0 0 auto',
                        }}
                    >
                        <MarkunreadMailboxOutlinedIcon sx={{ fontSize: 24 }} />
                    </Box>

                    <Box
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 500,
                            fontSize: 36,
                            lineHeight: '44px',
                            color: '#3E485B',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {count}
                    </Box>
                </Box>

                <AvatarGroup
                    max={4}
                    sx={{
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            fontSize: 14,
                            borderColor: '#D5E0F0',
                            backgroundColor: '#FFFFFF',
                        },
                        '& .MuiAvatar-root:not(:first-of-type)': {
                            ml: '-8px',
                        },
                    }}
                >
                    {avatars.length > 0 ? (
                        avatars.map((src, i) => <Avatar key={i} src={src} alt={`a${i}`} />)
                    ) : (
                        <>
                            <Avatar sx={{ bgcolor: '#FF4500' }}>R</Avatar>
                            <Avatar sx={{ bgcolor: '#232F3F', color: '#fff' }}>C</Avatar>
                            <Avatar sx={{ bgcolor: '#FFFFFF', color: '#111827' }}>M</Avatar>
                            <Avatar sx={{ bgcolor: '#111827', color: '#fff' }}>M</Avatar>
                        </>
                    )}
                </AvatarGroup>
            </Box>
        </Box>
    );
};

export default RepliesPanel;