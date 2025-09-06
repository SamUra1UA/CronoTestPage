import React from 'react';
import { Button } from '@mui/material';
import { colors } from '../theme/colors.ts';

export const ActionButton: React.FC<React.PropsWithChildren<{ onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }>> =
    ({ onClick, children }) => (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                textTransform: 'none',
                borderRadius: 999,
                px: 2,
                py: 0.5,
                background: colors.teal,
                boxShadow: 'none',
                fontWeight: 700,
                '&:hover': { background: colors.tealPressed, boxShadow: 'none' },
            }}
        >
            {children}
        </Button>
    );