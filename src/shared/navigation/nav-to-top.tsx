import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import React from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

interface NavToTopProps {
    
}

const NavToTop: React.FC<NavToTopProps> = ({}) => {
    
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const scrollToTop = React.useCallback(() => {
        window.scroll({ top: 0, behavior: "smooth" });
    }, []);
  
    return (
        <Fade in={trigger}>
            <Box
                onClick={scrollToTop}
                role="presentation"
                sx={{ position: 'fixed', bottom: 32, right: 32 }}
            >
                <Fab size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUp fontSize="large" sx={{color: '#27323d'}}/>
                </Fab>
            </Box>
        </Fade>
    )
}

export default NavToTop;
