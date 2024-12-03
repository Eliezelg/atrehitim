import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WardrobeCalculator = () => {
  const [step, setStep] = useState(1);
  const [tempInput, setTempInput] = useState('');
  const [selections, setSelections] = useState({
    type: '',
    doors: 0,
    width: 0,
    height: 0,
    mirror: '',
    drawers: [],
    totalPrice: 0,
    basePrice: 0
  });

  const calculateBasePrice = (type, doors, width, height) => {
    let price = 0;
    if (type === 'פתיחה') {
      if (height <= 240) {
        if (doors === 1) {
          if (width <= 40) price = 871;
          else if (width <= 60) price = 1131;
        } else {
          if (width <= 40) price = 585 * doors;
          else if (width <= 45) price = 682.50 * doors;
        }
      } else if (height <= 270) {
        if (width <= 40) {
          if (doors === 1) price = 1131;
          else price = 760.50 * doors;
        }
      }
    } else if (type === 'הזזה') {
      if (height <= 240) {
        if (width >= 120 && width <= 160) price = 2515.50;
        else if (width <= 180) price = 3094;
        else if (width <= 240) price = 3718;
      } else if (height <= 270) {
        if (width >= 140 && width <= 160) price = 3588;
        else if (width <= 180) price = 4270.50;
        else if (width <= 240) price = 5005;
      }
    }
    return price;
  };

  const handleTypeSelection = (type) => {
    setSelections({ ...selections, type });
  };

  const handleNextStep = () => {
    let newSelections = { ...selections };
    
    if (step === 2 && tempInput) {
      newSelections.doors = parseInt(tempInput);
    }
    if (step === 3 && tempInput) {
      newSelections.width = parseInt(tempInput);
    }
    if (step === 4 && tempInput) {
      newSelections.height = parseInt(tempInput);
      const basePrice = calculateBasePrice(
        newSelections.type, 
        newSelections.doors, 
        newSelections.width, 
        parseInt(tempInput)
      );
      newSelections.basePrice = basePrice;
      newSelections.totalPrice = basePrice;
    }
    
    setSelections(newSelections);
    setTempInput('');
    setStep(step + 1);
  };

  // ... reste du code identique jusqu'au case 5 du renderStep ...

      case 5:
        return (
          <div className="space-y-4 text-right">
            <p className="text-lg">מחיר בסיס: ₪{selections.basePrice}</p>
            <p className="text-lg">האם להוסיף מראה?</p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleMirrorSelection('regular')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                מראה רגילה
              </button>
              <button
                onClick={() => handleMirrorSelection('dark')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                מראה כהה
              </button>
              <button
                onClick={() => handleMirrorSelection(null)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                ללא מראה
              </button>
            </div>
          </div>
        );

  // ... reste du code identique ...

  return (
    <Card className="w-full max-w-2xl mx-auto rtl">
      <CardHeader>
        <CardTitle className="text-right">חישוב מחיר ארון</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>שלב {step} מתוך 7</span>
            {step > 1 && step < 7 && (
              <button 
                onClick={() => {
                  if(step === 5) {
                    // Reset price to base price when going back from mirror selection
                    setSelections({...selections, totalPrice: selections.basePrice});
                  }
                  setStep(step - 1);
                }}
                className="text-blue-500 hover:text-blue-600"
              >
                חזור
              </button>
            )}
          </div>
        </div>
        {renderStep()}
        {step >= 2 && step <= 6 && (
          <div className="mt-4 text-right text-gray-600">
            <p>מחיר נוכחי: ₪{selections.totalPrice}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WardrobeCalculator;