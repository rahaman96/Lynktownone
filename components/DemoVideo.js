import React, { useCallback, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const DemoVideo = ({ open, toggleModal }) => {
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [open]);

  return (
    <Modal
      onClose={toggleModal}
      open={open}
      styles={{
        modal: {
          maxWidth: 'unset',
          width: '90%',
          padding: 'unset',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
        },
        closeButton: {},
      }}
      center
    >
      <ReactPlayer
        url='https://youtu.be/W5-FFatyORg?rel=0'
        width='100%'
        height='calc(100vh - 100px)'
        onBuffer={e => console.log(e + 'sdfadf')}
      />
    </Modal>
  );
};

export default DemoVideo;
