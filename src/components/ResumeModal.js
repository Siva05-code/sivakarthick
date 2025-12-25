import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaEye, FaDownload } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  const [showPreview, setShowPreview] = React.useState(false);

  // Reset preview state whenever modal is opened so user always sees the choice
  React.useEffect(() => {
    if (isOpen) setShowPreview(false);
  }, [isOpen]);

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleDownload = () => {
    // Create a link and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'SIVAKARTHICK_B_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-5"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card-bg border border-border-color rounded-xl max-w-5xl w-full relative"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-3xl text-text-secondary hover:text-primary transition-colors z-10"
            >
              <FaTimes />
            </button>

            {!showPreview ? (
              <div className="p-16 text-center">
                <h2 className="text-4xl font-bold mb-8">Resume</h2>
                <div className="flex flex-wrap justify-center gap-5">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePreview}
                    className="px-8 py-4 bg-gradient-1 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
                  >
                    <FaEye className="text-xl" /> Preview
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="px-8 py-4 bg-transparent border-2 border-primary text-text-primary rounded-lg font-semibold text-lg hover:bg-primary transition-all flex items-center gap-3"
                  >
                    <FaDownload className="text-xl" /> Download
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Resume Preview</h2>
                <div className="bg-darker-bg rounded-lg overflow-hidden border-2 border-border-color">
                  <iframe
                    src="/resume.pdf"
                    className="w-full h-[70vh] min-h-[500px]"
                    title="Resume Preview"
                  />
                </div>
                <p className="text-center text-text-secondary mt-5 text-sm flex items-center justify-center gap-2">
                  <FaTimes className="text-primary" /> Protected view - Downloads disabled in preview
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
