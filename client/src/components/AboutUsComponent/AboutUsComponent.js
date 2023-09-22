import React, { useState } from 'react';
import { Container, Typography,} from '@mui/material';
import { makeStyles } from '@mui/styles';
import img1 from '../../images/memoriesLogo.png';
const useStyles = makeStyles((theme) => ({
    about: {
      padding: '140px 0',
      position: 'relative',
      '&:before': {
        background: 'rgba(255, 255, 255, 0.75)',
        position: 'absolute',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        padding: '60px 0',
      },
    },
    content: {
      textAlign: 'center',
    },
    missionHeading: {
      fontWeight: 600,
      fontSize: '26px',
    },
    missionText: {
      marginBottom: '0',
    },
    feedbackTextarea: {
      width: '100%',
      padding: '8px',
      borderRadius: '5px',
      border: '2px solid #0880e8',
      '&:focus': {
        borderColor: '#2b99f8',
      },
    },
    learnMoreButton: {
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 600,
      fontSize: '14px',
      letterSpacing: '1px',
      display: 'inline-block',
      padding: '12px 32px',
      borderRadius: '5px',
      transition: '0.3s',
      lineHeight: '1',
      color: '#0880e8',
      animationDelay: '0.8s',
      marginTop: '6px',
      border: '2px solid #0880e8',
      '&:hover': {
        background: '#0880e8',
        color: '#fff',
        textDecoration: 'none',
      },
    },
  }));
  

  function AboutUsComponent() {
    const classes = useStyles();
    const [feedback, setFeedback] = useState('');
  
    const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
    };
  
    return (
      <div>
          <div className={classes.about}>
            <Container maxWidth="md" className={classes.content}>
              <Typography variant="h2">About Us</Typography>
              <Typography variant="body1">
                Welcome to Memory! We're excited to introduce you to our unique app designed to help you capture and cherish your most cherished memories, both the good and the not-so-good.
              </Typography>
              <br></br>
              <img
                src={img1}
                alt="Description of the image"
                className={classes.responsiveImage}
                style={{ width: '40%', height: '20%' }}
              />
              <Typography variant="h3">How to Use Memory</Typography>
              <br></br>
              <Typography variant="body1">
                Using Memory is easy and meaningful. Here's how you can get started:
              </Typography>
              <br></br>
              <ul>
                <li><strong>Log In:</strong> Visit our website and log in to your account. If you don't have an account yet, you can quickly create one.</li>
                <br></br>
                <li><strong>Create a Memory:</strong> Once logged in, you can create a new memory by giving it a title and a description. This is your canvas to express your thoughts, feelings, and memories.</li>
                <br></br>
                <li><strong>Add Photos:</strong> Enhance your memory by adding photos that capture the essence of the moment. You can upload images directly from your device.</li>
                <br></br>
                <li><strong>Save Your Memory:</strong> After adding your title, description, and photos, simply click "OK" to save your memory. It will be securely stored in your Memory account.</li>
                <br></br>
                <li><strong>Access Your Memories:</strong> Whenever you like, you can revisit and relive your memories by accessing them through your Memory account. See all the beautiful stories and images that you've shared.</li>
              </ul>
                 <br></br>
              <Typography variant="h3">Why Memory</Typography>
              <br></br>
              <br></br>

              <Typography variant="body1">
                <strong>Preserve Your Story:</strong> Life is a collection of stories, and Memory is your digital journal, preserving your personal narrative.<br />
                   <br></br>
                 <strong>Celebrate Together:</strong> Share your triumphs and hardships with a supportive community that understands and cares.<br />
                  <br></br>
                 <strong>Reflect and Grow:</strong> Looking back at your memories helps you learn, grow, and appreciate the journey.<br />
                  <br></br>
                 <strong>Privacy First:</strong> Your memories are precious, and your privacy is our priority. Memory is a secure space for your thoughts and emotions.
              </Typography>
            </Container>
          </div>
        </div>
      );
    }
      
export default AboutUsComponent;