import { Box, AppBar, Toolbar, Typography, } from '@mui/material';
export const Navigation = () => {
    return (        
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0}>
                <Toolbar>              
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Images from NASA
                </Typography>              
                </Toolbar>
            </AppBar>
            </Box>
    )
}