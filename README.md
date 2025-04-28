AI Object Recognition

This project showcases a real-time AI-powered object recognition system built using Next.js, TensorFlow.js, and Framer Motion.
It uses your device’s camera to detect and identify objects live through your browser.

🚀 Features
📷 Real-time video feed from your device’s camera.

🤖 AI object detection powered by the COCO-SSD model.

🖌️ Bounding boxes and labels drawn live on a canvas overlay.

🎨 Smooth page transitions with Framer Motion.

📱 Fully responsive and mobile-friendly layout.

⚡ Optimized with dynamic imports and clean architecture.

🛠️ Tech Stack
Frontend: Next.js 14, React 18, TailwindCSS

AI Model: TensorFlow.js, COCO-SSD pre-trained model

Animation: Framer Motion

CSS Styling: TailwindCSS + Custom Variables

📸 How It Works
Grant camera permission when prompted.

The app loads the AI model and starts the live video feed.

Every 500ms, the system scans the video frame for objects.

Detected objects are highlighted with bounding boxes and labels (class name + confidence score).

📋 How to Use
Clone the repository.

Install dependencies:

bash
Copier
Modifier
npm install
Run the development server:

bash
Copier
Modifier
npm run dev
Open your browser and go to:

arduino
Copier
Modifier
http://localhost:3000
Allow camera access and start exploring!

⚠️ Notes
This app requires camera access.

Best used on modern browsers (Chrome, Edge, Safari).

First model load might take a few seconds due to weight download (~MBs).

