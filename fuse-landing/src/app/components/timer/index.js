import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RecordedTimeSVG, SetTimeManuallySVG } from "@/app/svgs";
import { useNotifications } from "@/app/contexts/notificationContext";

const TimeSetter = () => {
  const { addNotification } = useNotifications(); // Using notification context
  const [showTimePicker, setShowTimePicker] = useState(true);
  const [showRecordedTimesModal, setShowRecordedTimesModal] = useState(false);
  const [time, setTime] = useState("10:27:53");
  const [hours, setHours] = useState("10");
  const [minutes, setMinutes] = useState("27");
  const [seconds, setSeconds] = useState("53");
  const [recordedTimes, setRecordedTimes] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleSetTime = () => {
    const formattedHours = hours.padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');
    const formattedSeconds = seconds.padStart(2, '0');

    const newTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    setTime(newTime);
    setRecordedTimes([...recordedTimes, newTime]);
    setShowTimePicker(false); // Close the time picker after setting the time

    // Start the timer
    startTimer(newTime);
  };

  const startTimer = (newTime) => {
    // Clear any existing timer
    if (timer) {
      clearInterval(timer);
    }

    const targetTime = new Date();
    const [targetHours, targetMinutes, targetSeconds] = newTime.split(':').map(Number);
    targetTime.setHours(targetHours, targetMinutes, targetSeconds, 0); // Set target time

    // Set a timer to check every second
    const newTimer = setInterval(() => {
      const now = new Date();
      if (now >= targetTime) {
        addNotification({  // Trigger notification from context
          senderName: "Utilizatorul Demo",
          message: `a setat un timp de ${newTime} pentru task.`,
          category: "Alert",
        });
        clearInterval(newTimer); // Clear the timer after notification
      }
    }, 1000);
    
    setTimer(newTimer); // Save the timer ID
  };

  const toggleRecordedTimesModal = () => {
    setShowRecordedTimesModal(true);
    setShowTimePicker(false); // Close time picker when opening recorded times
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
    setShowRecordedTimesModal(false); // Close recorded times when toggling time picker
  };

  return (
    <div className="flex flex-col gap-4 items-start relative">
      {/* Main Panel */}
      <div className="p-6 bg-white rounded-lg shadow flex flex-col gap-6">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleRecordedTimesModal}
        >
          <div className="w-5 h-5 rounded">
            <RecordedTimeSVG />
          </div>
          <div className="text-[#222222] text-base font-normal">
            Recorded Time
          </div>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleTimePicker}
        >
          <div className="w-5 h-5 rounded">
            <SetTimeManuallySVG />
          </div>
          <div className="text-[#222222] text-base font-normal">
            Set Time Manually
          </div>
        </div>
      </div>

      {/* Recorded Times Modal with Animation */}
      <AnimatePresence>
        {showRecordedTimesModal && (
          <motion.div
            className="absolute top-[-92%] left-52 w-60 p-4 bg-[#ddddff] rounded-xl shadow-lg flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-lg font-semibold text-[#222222]">
              Recorded Times
            </div>
            <div className="flex flex-col gap-2">
              {recordedTimes.length > 0 ? (
                recordedTimes.map((recordedTime, index) => (
                  <div
                    key={index}
                    className="p-2 bg-[#f9f9f9] rounded-md shadow-sm flex items-center"
                  >
                    <span className="text-[#383757] font-medium">
                      Demo User: {recordedTime}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm">
                  No recorded times available.
                </div>
              )}
            </div>
            <button
              onClick={() => setShowRecordedTimesModal(false)}
              className="mt-4 px-4 py-2 bg-[#8d8bdb] text-white rounded-md"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Time Picker Panel with Animation */}
      <AnimatePresence>
        {showTimePicker && (
          <motion.div
            className="absolute top-16 left-52 w-60 p-2.5 bg-[#ddddff] rounded-xl flex flex-col items-center gap-2.5 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full p-2.5 bg-[#c6c5ff] rounded-xl flex justify-center gap-1.5">
              {/* Hours Input */}
              <input
                type="number"
                min="0"
                max="23"
                value={hours}
                onChange={(e) => setHours(e.target.value.slice(0, 2))}
                className="w-12 h-10 bg-white rounded-sm text-center text-[#383757] text-base font-normal"
              />
              <div className="text-white text-base font-normal flex items-center">
                :
              </div>
              {/* Minutes Input */}
              <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value.slice(0, 2))}
                className="w-12 h-10 bg-white rounded-sm text-center text-[#383757] text-base font-normal"
              />
              <div className="text-white text-base font-normal flex items-center">
                :
              </div>
              {/* Seconds Input */}
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value.slice(0, 2))}
                className="w-12 h-10 bg-white rounded-sm text-center text-[#383757] text-base font-normal"
              />
            </div>
            <button
              onClick={handleSetTime}
              className="px-8 py-3 bg-[#8d8bdb] rounded-lg text-white text-base font-medium"
            >
              Set
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimeSetter;
