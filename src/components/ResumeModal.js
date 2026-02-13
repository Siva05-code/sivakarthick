import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye, FaDownload, FaFilePdf } from 'react-icons/fa';

// Google Drive File ID for the resume
// easier to update if needed, though 'Manage versions' in Drive is preferred
const RESUME_FILE_ID = '1B4bl2Fkaz9eaKHYLt2PMSfmyGxJ8SSmy';

const ResumeModalPremium = ({ isOpen, onClose }) => {
  const [showPreview, setShowPreview] = React.useState(false);

  // Reset preview state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setShowPreview(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleDownload = () => {
    // Open Google Drive download link in new tab
    window.open(`https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-5"
        >
          <motion.div
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-card-bg to-darker-bg border border-white/10 rounded-2xl max-w-5xl w-full overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-text-secondary hover:text-text-primary transition-all duration-300 z-20"
            >
              <FaTimes className="text-xl" />
            </button>

            {!showPreview ? (
              <div className="p-12 md:p-20 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-primary/30"
                >
                  <FaFilePdf className="text-4xl text-primary" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl font-heading font-bold mb-4"
                >
                  My <span className="text-gradient-premium">Resume</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-text-secondary mb-10 max-w-md mx-auto"
                >
                  View my complete professional resume or download it for offline access
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handlePreview}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                  >
                    <FaEye className="text-xl" />
                    <span>Preview Resume</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleDownload}
                    className="px-8 py-4 bg-white/5 border border-white/20 text-text-primary rounded-full font-semibold text-lg hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-3"
                  >
                    <FaDownload className="text-xl" />
                    <span>Download PDF</span>
                  </motion.button>
                </motion.div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold mb-6 text-center"
                >
                  Resume Preview
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-darker-bg rounded-xl border border-white/10 shadow-inner mx-auto"
                  // style={{ aspectRatio: '0.75/1' }}
                  style={{ height: '80vh', aspectRatio: '1.414/1.414' }}
                >
                  <iframe
                    src={`https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`}
                    className="w-full h-full border-none"
                    title="Resume Preview"
                  />
                </motion.div>

                {/* <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10"> */}
                {/* <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-sm transition-all flex items-center gap-2"
                  >
                    <FaDownload />
                    Download
                  </motion.button> */}
                {/* </div> */}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModalPremium;
