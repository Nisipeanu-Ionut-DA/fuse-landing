'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MarkNotificationAsReadSVG } from '@/app/svgs';

function getTimeAgo(timeStamp) {
  const now = new Date();
  const notificationDate = new Date(timeStamp);
  const diff = now - notificationDate;
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}d`;
  } else if (diffHours > 0) {
    return `${diffHours}h`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}m`;
  } else {
    return 'Just now';
  }
}

const NotificationCard = ({ notification, onRemove }) => {
  const handleMarkAsRead = () => {
    onRemove(notification.id);
  };

  return (
    <div className=" min-h-[85px] px-6 py-[21px] bg-[#f2eeff]/80 rounded-xl flex flex-col justify-center items-start gap-3 mb-4">
      <div className="flex w-full items-center gap-5">
        <div className="flex items-center gap-4">
          <div className="w-[35px] h-[35px] flex items-center justify-center">
            <div className=" bg-[#fffefe] rounded-full border-2 border-[#7674c2] flex items-center justify-center">
              <img className="w-10 h-10" src="/images/logosmall.png" alt="icon" />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="text-[#6260ae] text-base font-normal">
              {`${notification.senderName} ${notification.message}`}
            </div>
            <div className="flex items-center gap-1.5">
              <div className="text-[#7674c2] text-[13px] font-normal">
                {getTimeAgo(notification.timeStamp)}
              </div>
              <div className="w-[3px] h-[3px] bg-[#7674c2] rounded-full" />
              <div className="text-[#7674c2] text-[13px] font-normal">
                {notification.category}
              </div>
            </div>
          </div>
        </div>
        {!notification.isRead && (
          <motion.button
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.9 }}
            className="text-blue-500 ml-auto"
            onClick={handleMarkAsRead}
          >
            <MarkNotificationAsReadSVG />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default NotificationCard;
