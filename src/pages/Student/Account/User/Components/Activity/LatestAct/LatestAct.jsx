import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './LatestAct.scss';

const LatestAct = () => {

    const steps = [
        {
            label: 'Karen Hope moved task “User Research“ from On Progress to Done',
            description: `2 March 2021, 13:45 PM`,
        },
        {
            label: 'Samantha William add new 4 attached files on task “Photo’s Assets“',
            description:'2 March 2021, 13:45 PM',
        },
        {
            label: 'Tony Soap invite you in task “Wireframing“ and “Hi-fidelity“',
            description: `2 March 2021, 13:45 PM`,
        },
        {
            label: 'Samantha William created new Task“',
            description: `2 March 2021, 13:45 PM`,
        },
    ];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box className='latest-activity-details'>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} >
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography sx={{fontSize : 12, color : '#A098AE'}}>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 ,fontSize : 10 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1,fontSize : 10 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

export default LatestAct