'use client';
import React, { useState, Suspense, lazy, useEffect } from "react";
import { Badge } from "@mui/material";
import { NotificationSVG } from "@/app/svgs";
import { useNotifications } from "@/app/contexts/notificationContext";

const Drawer = lazy(() => import("./drawer"));

const NotificationComponent = () => {
  const [openRight, setOpenRight] = useState(false);
  const { notifications, addNotification } = useNotifications();

  useEffect(() => {
    if (notifications.length === 0) {
      addNotification({
        senderName: "Angajatul 1",
        message:
          "Tocmai a început cronometrul pentru taskul vostru comun - Sesiunea de Brainstorming.",
        category: "Task Update",
      });
    }
  }, [notifications, addNotification]);

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  return (
    <div className="flex gap-2 z-20">
      <Badge
        variant="dot"
        color="secondary"
        invisible={unreadNotifications.length === 0}
        sx={{
          '& .MuiBadge-dot': {
            width: '12px',
            height: '12px',
            top: '10%',
            right: '0%',
            borderRadius: '50%',
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <button
          className="bg-[#FAFAFE] dark:bg-[#f4f0ff] text-black p-[13px] rounded-[9px]"
          onClick={() => setOpenRight(!openRight)}
        >
          <NotificationSVG />
        </button>
      </Badge>

      <Suspense fallback={<div></div>}>
        {openRight && (
          <Drawer
            open={openRight}
            setOpen={setOpenRight}
            notifications={notifications}
          />
        )}
      </Suspense>
    </div>
  );
};

export default NotificationComponent;
