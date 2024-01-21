import { PauseIcon, PlayIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export interface TaskTimerProps {
  taskId: string;
}

export function TaskTimer({ taskId }: TaskTimerProps) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const storedTime = localStorage.getItem(`taskTimer_${taskId}`);
    if (storedTime) {
      setElapsedTime(parseInt(storedTime, 10));
    }
  }, [taskId]);

  useEffect(() => {
    let timerInterval: string | number | NodeJS.Timeout | undefined;

    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning]);

  useEffect(() => {
    localStorage.setItem(`taskTimer_${taskId}`, elapsedTime.toString());
  }, [taskId, elapsedTime]);

  const handleToggleTimer = () => {
    setIsTimerRunning((prev) => !prev);
  };

  const formattedTime = formatTime(elapsedTime);

  return (
    <div className="flex items-center ml-auto">
      <button onClick={handleToggleTimer} className="mr-2">
        {isTimerRunning ? <PauseIcon /> : <PlayIcon />}
      </button>
      <span>{formattedTime}</span>
    </div>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}
