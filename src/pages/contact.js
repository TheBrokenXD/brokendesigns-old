import * as React from 'react';
//styles
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';

function contact() {
    return (
        <div className="contact-container">

            <h1>contact</h1>

            <form>
                <div className="contact-field">
                    <label>What’s your name?</label>
                    <input type="text"/>
                </div>

                <div className="contact-field">
                    <label>What’s your email?</label>
                    <input type="text"/>
                </div>

                <div className="contact-field-sub">
                    <label>Subject:</label>
                    <input type="text" className="subject"/>
                </div>
                
                <div className="contact-field">
                    <textarea placeholder="[Your message to me..]"></textarea>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" startIcon={<CreateIcon />} className="submit-btn">
                            Send Now
                        </Button>
                    </Stack>
                </div>
            </form>

            <div className="contact-footer">

                <div className="contact-mail">
                    <p>General Inquiries</p>
                    <a href="">hello@brokendesigns.studio</a>
                </div>

                <div className="contact-social">
                    <p>Social</p>
                    <div className="contact-links">
                        <a href="https://www.instagram.com/thebroken_xd">Instagram,</a>
                        <a href="https://twitter.com/TheBroken_XD">Twitter,</a>
                        <a href="">Discord</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default contact;
