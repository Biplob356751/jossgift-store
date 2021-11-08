import React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Checkout.css'

const useStyles = styled((theme) => ({
    root: {
        width: '90%',
        margin: "auto",
        marginTop: "100px",
        border: "1px solid #ddd",
        padding: "10px"
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Billing Address', 'Shipping Address', 'Payment Method'];
}

function getStepContent(stepIndex) {
    document.title = "JossGift CheckOut"
    switch (stepIndex) {
        case 0:
            return (
                <div className="user_content_info">
                    <input type="text" placeholder="Enter Your Name:" />
                    <input type="text" placeholder="Your Company Name:" />
                    <input type="text" placeholder="Address:" />
                    <input type="city" placeholder="City:" />
                    <input type="post" placeholder="Post Code:" />
                    <input type="email" placeholder="Enter your Email Address:" />
                    <input type="phone" placeholder="Phone Number:" />
                </div>
            );
        case 1:
            return (
                <div className="user_content_info">
                    <input type="text" placeholder="Enter Your Name:" />
                    <input type="text" placeholder="Your Company Name:" />
                    <input type="text" placeholder="Address:" />
                    <input type="city" placeholder="City:" />
                    <input type="post" placeholder="Post Code:" />
                    <input type="email" placeholder="Enter your Email Address:" />
                    <input type="phone" placeholder="Phone Number:" />
                </div>
            );
        case 2:
            return (
                <div className="user_payment_methood">
                    <a href="#"><img src="https://cdn.acumatica.com/content/plugins/ac-marketplace/uploads/KNPAYPALINVOICING/ISV-Solutions-1735-9Manage-ISV-Solution1007-9395-3955460_-paypal-chad-hurley-paypal-logo.png" alt="image" /></a>
                    <a href="#"><img src="https://i0.wp.com/cnbdaily.com/wp-content/uploads/2019/10/bkash-train-ticket-796x445.jpg?resize=796%2C445" alt="image" /></a>
                    <a href="#"><img src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2019/10/07/nagad.jpg?itok=jvREqJtG" alt="image" /></a>
                    <a href="#"><img src="https://www.pngitem.com/pimgs/m/1-15888_transparent-visa-master-png-logo-visa-png-2019.png" alt="image" /></a>

                </div>
            );
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="container_fluid">
            <div className="checkout_page">
                <div className={classes.root}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className={classes.instructions}><img src="https://png.pngtree.com/png-vector/20191022/ourlarge/pngtree-delivery-service-man-in-superhero-uniform-with-box-in-hand-vector-png-image_1841350.jpg" alt="" /><h4>Your Order has been successfully completed.Thanks For your order.</h4></Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
