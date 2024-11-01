'use client';
import React, { useState, Suspense, lazy } from "react";
import { Badge } from "@mui/material";
import { NotificationSVG } from "@/app/svgs";

const Drawer = lazy(() => import("./drawer"));

const NotificationComponent = () => {
  const [openRight, setOpenRight] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      senderName: "Lara Lu",
      message: "assigned you to the item “Lorem”",
      isRead: false,
      timeStamp: new Date().toISOString(),
      category: "Development",
    },
    {
      id: 2,
      senderName: "John Doe",
      message: "commented on your post",
      isRead: false,
      timeStamp: new Date().toISOString(),
      category: "Social",
    },
  ]);

  const unreadNotifications = notifications.filter((n) => !n.isRead);

  return (
    <>
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

        <Suspense fallback={<div>Loading drawer...</div>}>
          {openRight && (
            <Drawer
              open={openRight}
              side="right"
              setOpen={setOpenRight}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          )}
        </Suspense>
      </div>
    </>
  );
};

export default NotificationComponent;
