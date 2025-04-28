"use client";
import { useEffect, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const ObjectRecognition = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [predictions, setPredictions] = useState<any[]>([]);

  useEffect(() => {
    const loadModelAndDetect = async () => {
      const model = await cocoSsd.load();
      if (videoRef.current) {
        videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.play();

        const detectObjects = async () => {
          if (videoRef.current && canvasRef.current) {
            const videoElement = videoRef.current;
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            // Set canvas dimensions
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            const predictions = await model.detect(videoElement);
            setPredictions(predictions);

            // Draw predictions
            ctx?.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            predictions.forEach((prediction) => {
              const [x, y, width, height] = prediction.bbox;
              ctx?.beginPath();
              ctx?.rect(x, y, width, height);
              ctx!.lineWidth = 2;
              ctx!.strokeStyle = "red";
              ctx!.fillStyle = "red";
              ctx?.stroke();
              ctx?.fillText(
                `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
                x,
                y > 10 ? y - 5 : 10
              );
            });
          }
        };

        setInterval(detectObjects, 500); // Detect objects every 500ms
      }
    };

    loadModelAndDetect();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <h1>Object Recognition</h1>
      <div style={{ position: "relative" }}>
        <video
          ref={videoRef}
          style={{ width: "100%", height: "auto", position: "absolute", zIndex: 1 }}
        />
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "auto", position: "absolute", zIndex: 2 }}
        />
      </div>
      <div>
        <h2>Predictions:</h2>
        <ul>
          {predictions.map((prediction, index) => (
            <li key={index}>
              {prediction.class} - {Math.round(prediction.score * 100)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObjectRecognition;