import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, ListItemText, Typography } from "@mui/material";
import agent from "../../app/api/agent";
import { useState } from "react";

export default function AboutPage() {
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    function getValidtaionError() {
        agent.TestErrors.getValidationError()
            .then(() => console.log('should not see this'))
            .catch(error => setValidationErrors(error));
    }
    return (
        <Container>
            <Typography gutterBottom variant='h2'>Errors for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant='contained' 
                    onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>
                        Test 400Error
                </Button>
                <Button variant='contained' 
                    onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>
                        Test get401Error
                </Button>
                <Button variant='contained' 
                    onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>
                        Test get404Error
                </Button>
                <Button variant='contained' 
                    onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>
                        Test get500Error
                </Button>
                <Button variant='contained' 
                    onClick={getValidtaionError}>
                        Test getValidationError
                </Button>
            </ButtonGroup>
            {validationErrors.length > 0 && 
                <Alert severity='error'>
                    <AlertTitle>Validation Errors</AlertTitle>
                    <List>
                        {validationErrors.map(error => (
                            <ListItem key={error}>
                                <ListItemText>{error}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Alert>
            }
        </Container>
    )
}