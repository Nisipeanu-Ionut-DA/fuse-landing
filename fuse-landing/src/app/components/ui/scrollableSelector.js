// ScrollableSelector.js
import React from 'react';
import { motion } from 'framer-motion';

const ScrollableSelector = ({ items, selectedItem, onSelect }) => {
  const itemVariants = {
    selected: {
      backgroundColor: '#8d8bdb',
      color: '#ffffff',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      borderRadius: '9999px',
      transition: { duration: 0.3 },
    },
    unselected: {
      backgroundColor: 'transparent',
      color: '#868686',
      padding: '0rem',
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="h-14 flex justify-center items-center gap-6 overflow-x-auto">
      {items.map((item) => {
        const isSelected = selectedItem === item;
        return (
          <motion.div
            key={item}
            onClick={() => onSelect(item)}
            className="cursor-pointer flex items-center gap-3"
            initial={false}
            animate={isSelected ? 'selected' : 'unselected'}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-6 h-6 relative" />
            <div className="text-xl font-medium font-['Poppins']">
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ScrollableSelector;
