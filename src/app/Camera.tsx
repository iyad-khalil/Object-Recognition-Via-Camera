"use client";
import { useEffect, useRef } from "react";

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        console.log("Requesting camera access...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          console.log("Camera stream started successfully.");
        }
      } catch (error) {
        console.error("Unable to access the camera:", error);
        alert(
          "Camera access denied or unavailable. Please check permissions and browser settings."
        );
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold text-center">Camera Feed</h1>
      <video
        ref={videoRef}
        className="w-full h-auto rounded shadow"
        style={{ backgroundColor: "black" }} // Visual indicator
      />
    </div>
  );
};

export default Camera;
