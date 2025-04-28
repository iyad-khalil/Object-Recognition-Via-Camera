'use client';

import dynamic from 'next/dynamic';
import ObjectRecognition from "./ObjectRecognition";

const MotionWrapper = dynamic(() => import('@/app/MotionWrapper'));

export default function Home() {
  return (
    <MotionWrapper>
      <main className="container">
        <h2 className="text-2xl text-[var(--primary)]">Welcome to Object Recognition</h2>
        <p className="text-muted">
          Explore the power of AI with our real-time object recognition system.
        </p>
        <ObjectRecognition />
      </main>
    </MotionWrapper>
  );
}
