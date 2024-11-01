// MainComponent.js
'use client';
import React, { useState } from 'react';
import ScrollableSelector from '@/app/components/ui/scrollableSelector';

const SwipeableComponent = () => {
  const [selectedItem, setSelectedItem] = useState('Projects & Tasks');

  const items = [
    'Projects & Tasks',
    'HR',
    'CRM',
    'Finance',
    'Inventory',
    'Appointments',
    'Reports',
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    // Additional logic can be added here based on the selected item
  };

  return (
    <div className="container mx-auto py-4 pt-40">
      <ScrollableSelector
        items={items}
        selectedItem={selectedItem}
        onSelect={handleSelect}
      />

      {/* Content that changes based on the selected item */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">
          {selectedItem}
        </h2>

        {/* Conditional rendering based on selectedItem */}
        {selectedItem === 'Projects & Tasks' && (
          <p>Manage your projects and tasks efficiently.</p>
        )}
        {selectedItem === 'HR' && (
          <p>Handle human resources and employee data.</p>
        )}
        {selectedItem === 'CRM' && (
          <p>Manage customer relationships and interactions.</p>
        )}
        {selectedItem === 'Finance' && (
          <p>Keep track of financial transactions and reports.</p>
        )}
        {selectedItem === 'Inventory' && (
          <p>Manage your inventory and stock levels.</p>
        )}
        {selectedItem === 'Appointments' && (
          <p>Schedule and manage appointments.</p>
        )}
        {selectedItem === 'Reports' && (
          <p>Generate and view various reports.</p>
        )}
      </div>
    </div>
  );
};

export default SwipeableComponent;
