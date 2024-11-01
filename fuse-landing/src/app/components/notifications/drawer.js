'use client';
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { clsx } from "clsx";
import NotificationCard from "./card";
import { MdMarkEmailRead, MdRuleFolder } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "@mui/material";
import { useNotifications } from "@/app/contexts/notificationContext";

const Drawer = ({ open, setOpen, side = "right" }) => {
  const {
    notifications,
    markAllAsRead,
    markAsRead,
  } = useNotifications();

  const [searchQuery, setSearchQuery] = useState("");
  const [showReadNotifications, setShowReadNotifications] = useState(false);

  const handleRemoveNotification = useCallback(
    (id) => {
      markAsRead(id);
    },
    [markAsRead]
  );

  const toggleReadNotifications = useCallback(() => {
    setShowReadNotifications((prev) => !prev);
  }, []);

  const filteredNotifications = useMemo(() => {
    let filteredNotifications = notifications;

    if (searchQuery) {
      filteredNotifications = filteredNotifications.filter(
        (n) =>
          n.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (n.senderName && n.senderName.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (n.category && n.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (!showReadNotifications) {
      filteredNotifications = filteredNotifications.filter((n) => !n.isRead);
    }

    return filteredNotifications;
  }, [notifications, searchQuery, showReadNotifications]);

  // Framer Motion variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drawerVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? "100%" : "-100%",
    }),
    visible: { x: 0 },
  };

  const classNames = {
    right: "inset-y-0 right-0",
    left: "inset-y-0 left-0",
  };

  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
    >
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-gray-500 bg-opacity-75"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            ></motion.div>

            {/* Drawer */}
            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className={clsx(
                    "pointer-events-none fixed max-w-full",
                    classNames[side]
                  )}
                >
                  <motion.div
                    className="pointer-events-auto relative w-full h-full"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    custom={side}
                    variants={drawerVariants}
                    transition={{ duration: 0.3 }}
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                    }}
                  >
                    <div className="flex flex-col h-full overflow-y-scroll bg-[#b49cff] w-full md:w-[600px] py-9 px-7 shadow-xl md:rounded-lg">
                      <div className="flex justify-between">
                        <div className="flex gap-2.5 items-center">
                          <p className="text-[25px] text-white">Notifications</p>
                        </div>
                        <img
                          src="/images/close.svg"
                          alt="Close"
                          onClick={() => setOpen(false)}
                          className="cursor-pointer"
                        />
                      </div>
                      <div className="mt-11 flex flex-wrap justify-between items-center">
                        <div className="flex gap-0.5">
                          {/* Your existing buttons */}
                          <Tooltip
                            title="Mark all as read"
                            placement="bottom"
                            arrow
                            componentsProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: "#383757",
                                  color: "white",
                                },
                              },
                              arrow: {
                                sx: {
                                  color: "#383757",
                                },
                              },
                            }}
                          >
                            <motion.button
                              whileHover={{ scale: 0.98 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex items-center justify-center text-white p-2 rounded-full cursor-pointer"
                              onClick={markAllAsRead}
                            >
                              <MdMarkEmailRead size={24} />
                            </motion.button>
                          </Tooltip>
                          <Tooltip
                            title={
                              showReadNotifications ? "Show Unread" : "Show Read"
                            }
                            placement="bottom"
                            arrow
                            componentsProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: "#383757",
                                  color: "white",
                                },
                              },
                              arrow: {
                                sx: {
                                  color: "#383757",
                                },
                              },
                            }}
                          >
                            <motion.button
                              whileHover={{ scale: 0.98 }}
                              whileTap={{ scale: 0.9 }}
                              className="flex items-center justify-center text-white p-2 rounded-full cursor-pointer"
                              onClick={toggleReadNotifications}
                            >
                              <MdRuleFolder size={24} />
                            </motion.button>
                          </Tooltip>
                        </div>

                        <div className="relative w-full md:w-auto md:max-w-sm mt-4 md:mt-0">
                          <input
                            type="text"
                            placeholder="Search notification"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 md:h-14 bg-[#FFFFFF4F] border-[#7674c2] text-white rounded-full px-4 md:px-5 placeholder:text-white placeholder-opacity-50"
                          />
                          <img
                            src="/images/search-2.svg"
                            alt="Search Icon"
                            className="absolute top-1/2 right-4 transform -translate-y-1/2"
                          />
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col gap-4">
                        {filteredNotifications.length > 0 ? (
                          filteredNotifications.map((notification) => (
                            <NotificationCard
                              key={notification.id}
                              notification={notification}
                              onRemove={handleRemoveNotification}
                            />
                          ))
                        ) : (
                          <p className="text-white">
                            No notifications available.
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(Drawer);