import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import './Contact.css';

const Contact = () => {
  // Button click handlers
  const handleCallNow = () => {
    console.log('Calling now...');
    alert('Initiating a call to +92 309 4483014');
  };

  const handleChatNow = () => {
    console.log('Starting chat...');
    alert('Opening chat with +92 309 4483014');
  };

  const handleVideoCallNow = () => {
    console.log('Starting video call...');
    alert('Launching video call with +92 309 4483014');
  };

  const handleMessageNow = () => {
    console.log('Sending message...');
    alert('Opening message interface for +92 309 4483014');
  };

  return (
    <section id='contact' className='c-wrapper'>
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contacts</span>
          <span className='primaryText'>Easy to Contact us</span>
          <span className='secondaryText'>We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.</span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>+92 309 4483014</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleCallNow}>Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>+92 309 4483014</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleChatNow}>Chat Now</div>
              </div>
            </div>

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>+92 309 4483014</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleVideoCallNow}>Video Call Now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>+92 309 4483014</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleMessageNow}>Message Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;