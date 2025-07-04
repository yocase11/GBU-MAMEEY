// src/CameraPage.js
import React, { useRef, useEffect } from "react";

function CameraPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err.message);
        alert("Camera access denied. Please allow it in browser settings.");
      }
    };

    getCamera();
  }, []);

  return (
    <div className="star-wars-bg flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">📸 Take a Selfie</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="rounded-2xl border-4 border-white shadow-2xl w-[80vw] max-w-md"
      />
    </div>
  );
}

export default CameraPage;
