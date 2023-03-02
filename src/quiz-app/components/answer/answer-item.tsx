import { Box, Button, Grid, ListItemText, Paper, Typography } from "@mui/material";
import React from "react";

interface AnswerItemProps {
    answer: string;
    selectAnswer: (text: string) => void;
}

const AnswerItem: React.FC<AnswerItemProps> = React.memo(({ answer, selectAnswer }) => {
  return (
    <Paper sx={{margin: 2}}>
      <Button onClick={() => selectAnswer(answer)} fullWidth>
        <Typography>{answer}</Typography>
      </Button>
    </Paper>
  );
});
  
  export default AnswerItem