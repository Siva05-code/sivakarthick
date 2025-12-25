export const projectsData = [
  {
  id: 1,
  title: "Ultrasonic Flaw Detector",
  description: "Developed an automated non-destructive testing (NDT) system using ultrasonic sensing and Raspberry Pi to identify internal material defects with intelligent depth estimation.",
  fullDescription: "The Ultrasonic Flaw Detector is an IoT-enabled quality inspection system designed for non-destructive testing of materials. It utilizes ultrasonic sensors to transmit and receive sound waves through objects, identifying internal flaws based on signal reflections. Sensor data is processed using machine learning models to estimate defect depth and severity. The system is built on Raspberry Pi with Python for data processing and Arduino for sensor interfacing, providing real-time feedback through an LCD display and LED-based alert mechanism.",
  icon: "ultrasonic",
  tags: ["Raspberry Pi", "IoT", "Machine Learning", "Embedded Systems", "NDT"],
  technologies: ["Raspberry Pi", "Python", "Arduino", "TensorFlow Lite", "OpenCV"],
  features: [
    "Non-destructive flaw detection",
    "ML-based defect depth estimation",
    "Real-time LCD visualization",
    "LED alert indication for defect severity",
    "IoT-enabled inspection workflow"
  ],
  githubLink: "https://github.com/Siva05-code",
  liveLink: "https://docs.google.com/presentation/d/182ty6W9ORs9a0af-kud5Yyb5hHtBEyKq/edit?usp=drive_link&ouid=114492346920593639127&rtpof=true&sd=true",
  date: "2024"
},
{
  id: 2,
  title: "Osteoporosis Prediction Using Machine Learning",
  description: "Developed a high-accuracy machine learning model using XGBoost for early prediction of osteoporosis based on clinical and lifestyle risk factors.",
  fullDescription: "This project focuses on designing a machine learning–based osteoporosis prediction model aimed at early disease detection without relying on radiation-based diagnostic methods such as DXA. The study involved extensive data preprocessing, feature engineering, and handling of class imbalance in medical datasets. Multiple machine learning algorithms were evaluated, including Logistic Regression, Decision Trees, Random Forest, and Gaussian Naive Bayes, with a tuned XGBoost model achieving the best performance. Explainability techniques such as SHAP were applied to interpret feature importance and enhance clinical trust. The final XGBoost model achieved 92% accuracy, 98% precision, 85% recall, and a 91% F1-score, demonstrating its effectiveness as a cost-efficient clinical decision support system.",
  icon: "bone",
  tags: ["Machine Learning", "Healthcare AI", "Predictive Modeling", "Clinical Decision Support"],
  technologies: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "SHAP"],
  features: [
    "Machine learning–based osteoporosis risk prediction",
    "Extensive data preprocessing and feature engineering",
    "Handling class imbalance using SMOTE and class weighting",
    "Hyperparameter tuning with cross-validation",
    "Model explainability using SHAP analysis",
    "Performance comparison with multiple ML algorithms"
  ],
  githubLink: "",
  liveLink: "",
  date: "2025"
},
{
  id: 3,
  title: "MNIST Handwritten Digit Classifier",
  description: "Built a Convolutional Neural Network (CNN) to classify handwritten digits from the MNIST dataset with high accuracy using TensorFlow and Keras.",
  fullDescription: "This project implements a deep learning based handwritten digit recognition system using a Convolutional Neural Network (CNN). Trained on the MNIST dataset — a benchmark dataset of 70,000 grayscale digit images — the model learns to accurately classify digits (0–9). The pipeline includes data preprocessing, model architecture design, training with optimization techniques, and evaluation. The classifier achieved strong performance, demonstrating the practical use of CNNs in computer vision tasks such as optical character recognition.",
  icon: "mnist",
  tags: ["Machine Learning", "Deep Learning", "Computer Vision", "TensorFlow", "CNN"],
  technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
  features: [
    "Custom CNN architecture for digit recognition",
    "Data normalization & reshaping for model input",
    "Training & validation with performance metrics",
    "Prediction on new handwritten digit images",
    "Visual accuracy and loss trend plots"
  ],
  githubLink: "https://github.com/Siva05-code/IMAGE-CLASSIFICATION-MODEL.git",
  liveLink: "",
  date: "2025"
},
{
  id: 4,
  title: "Hepatitis C Prediction System",
  description: "Developed a machine learning classification model to predict Hepatitis C infection from clinical data, with a minimal Django backend used only for model inference and deployment.",
  fullDescription: "This project centers on building a machine learning–based Hepatitis C prediction model using clinical and biochemical parameters. The workflow includes data cleaning, feature engineering, model training, and evaluation to accurately classify infection risk. Multiple ML techniques were explored to improve predictive performance. The trained model was then integrated into a lightweight Django backend solely to enable real-time prediction and cloud deployment, ensuring the primary focus remained on the machine learning pipeline rather than frontend or application logic.",
  icon: "hepa",
  tags: ["Machine Learning", "Healthcare AI", "Data Science", "Predictive Modeling"],
  technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Django"],
  features: [
    "Clinical data preprocessing and feature selection",
    "Machine learning classification for disease prediction",
    "Model training, validation, and performance evaluation",
    "Real-time inference through a lightweight backend",
    "Applied ML techniques for healthcare analytics"
  ],
  githubLink: "https://github.com/Siva05-code/Hepatitis_c.git",
  liveLink: "https://hepatitis-c.onrender.com",
  date: "2025"
},
{
  id: 5,
  title: "Sugarcane Yield Prediction System",
  description: "Developed a machine learning model to predict sugarcane crop yield based on agricultural and environmental parameters, integrated with a lightweight Django backend for inference.",
  fullDescription: "This project focuses on building a machine learning–based sugarcane yield prediction model to support data-driven decision making in agriculture. The model was trained on structured agricultural data containing factors such as soil properties, climatic conditions, and cultivation inputs. Core emphasis was placed on data preprocessing, feature selection, and regression model training to improve prediction accuracy. A Django backend was used primarily to expose the trained ML model for real-time prediction, keeping the system scalable and deployment-ready while maintaining ML as the central component.",
  icon: "sugarcane",
  tags: ["Machine Learning", "Agriculture AI", "Crop Yield Prediction", "Data Science"],
  technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Django"],
  features: [
    "Data preprocessing and feature engineering for agricultural datasets",
    "Machine learning regression model for yield prediction",
    "Model evaluation and performance analysis",
    "Backend integration for real-time ML inference",
    "Practical application of ML in smart agriculture"
  ],
  githubLink: "https://github.com/Siva05-code/sugarcane_yield.git",
  liveLink: "https://sugarcane-yield.onrender.com",
  date: "2025"
},
{
  id: 6,
  title: "Sentiment Analysis using Machine Learning",
  description: "Developed a machine learning–based NLP model to classify textual reviews into sentiment categories using TF-IDF feature extraction and supervised learning algorithms.",
  fullDescription: "This project focuses on building an end-to-end sentiment analysis pipeline using classical machine learning techniques. Text data was preprocessed through tokenization, stop-word removal, and normalization, followed by TF-IDF vectorization for numerical feature representation. Multiple classification models were evaluated, with Logistic Regression selected as the final model due to its strong performance and generalization ability. The system effectively classifies reviews into positive, negative, or neutral sentiment, demonstrating practical applications of NLP and machine learning.",
  icon: "sentiment",
  tags: ["Machine Learning", "NLP", "Text Classification", "Data Science"],
  technologies: ["Python", "Scikit-learn", "NLTK", "Pandas", "NumPy"],
  features: [
    "Text preprocessing and normalization",
    "TF-IDF based feature extraction",
    "Supervised ML classification for sentiment prediction",
    "Model training, validation, and evaluation",
    "Applied NLP techniques for real-world text data"
  ],
  githubLink: "https://github.com/Siva05-code/SENTIMENT-ANALYSIS.git",
  liveLink: "",
  date: "2024"
},
{
  id: 7,
  title: "Automated Attendance System",
  description: "Developed a deep learning–based face recognition system using InsightFace embeddings and a FastAPI backend to automate student attendance with high accuracy and real-time processing.",
  fullDescription: "This project implements an end-to-end automated attendance system by combining deep learning–based face recognition with a scalable FastAPI backend. The core of the system is a face recognition model built using InsightFace and pretrained CNN embeddings to accurately identify students from facial images. The FastAPI backend handles model inference, user authentication, attendance logging, and report generation. The system supports role-based access for students and teachers and provides real-time attendance updates, historical records, and structured data management, with a lightweight HTML/JavaScript frontend for interaction.",
  icon: "att",
  tags: ["Deep Learning", "Face Recognition", "FastAPI", "Computer Vision", "Backend Development"],
  technologies: ["Python", "FastAPI", "InsightFace", "CNN", "OpenCV", "HTML", "JavaScript"],
  features: [
    "Deep learning–based face recognition using InsightFace embeddings",
    "Accurate student identification with pretrained CNN models",
    "FastAPI backend for model inference and attendance processing",
    "Automated attendance marking and data persistence",
    "Role-based authentication for students and teachers",
    "Attendance history tracking and report generation"
  ],
  githubLink: "https://github.com/Siva05-code/Face_Recognition_model.git",
  liveLink: "https://attfrontend.vercel.app/",
  date: "2025"
},
{
  id: 8,
  title: "PII Detection & Redaction System",
  description: "Developed a deep learning–based model to detect and classify Personal Identifiable Information (PII) present in images, deployed through a backend API for real-time processing.",
  fullDescription: "This project focuses on designing a deep learning model capable of identifying and classifying Personal Identifiable Information (PII) from image-based inputs. The system processes images containing sensitive data such as names, addresses, identification numbers, and other personal attributes, and applies deep learning techniques to accurately classify PII regions. The trained model is integrated into a backend service to enable real-time inference and redaction workflows, ensuring data privacy and compliance. The emphasis of this project is on model design, image-based PII classification, and practical deployment of deep learning systems.",
  icon: "camera",
  tags: ["Deep Learning", "Computer Vision", "Data Privacy", "PII Detection", "AI Security"],
  technologies: ["Python", "Deep Learning", "OpenCV", "CNN", "FastAPI / Backend API"],
  features: [
    "Deep learning–based PII classification from image data",
    "Detection of sensitive personal information in documents",
    "Image preprocessing and feature extraction",
    "Backend API for real-time model inference",
    "Deployed system for privacy-aware data handling"
  ],
  githubLink: "https://github.com/Siva05-code/piibackend.git",
  liveLink: "https://info-redaction-main.onrender.com/",
  date: "2025"
}
];
