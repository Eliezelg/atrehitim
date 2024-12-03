import React, { useState } from 'react';
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
    totalPrice: 0
  });

  const handleTypeSelection = (type) => {
    setSelections({ ...selections, type });
  };

  const handleNextStep = () => {
    if (tempInput || selections.type) {
      if (step === 2) setSelections({ ...selections, doors: parseInt(tempInput) });
      if (step === 3) setSelections({ ...selections, width: parseInt(tempInput) });
      if (step === 4) setSelections({ ...selections, height: parseInt(tempInput) });
      setTempInput('');
      setStep(step + 1);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-lg text-right">בחר סוג ארון:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => handleTypeSelection('הזזה')}
                  className={`px-4 py-2 rounded ${
                    selections.type === 'הזזה' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  הזזה
                </button>
                <button
                  onClick={() => handleTypeSelection('פתיחה')}
                  className={`px-4 py-2 rounded ${
                    selections.type === 'פתיחה' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  פתיחה
                </button>
              </div>
              {selections.type && (
                <button
                  onClick={handleNextStep}
                  className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  המשך
                </button>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 text-right">
            <p className="text-lg">כמה דלתות?</p>
            <input
              type="number"
              min="1"
              value={tempInput}
              className="w-full p-2 border rounded text-right"
              onChange={(e) => setTempInput(e.target.value)}
            />
            {tempInput && (
              <button
                onClick={handleNextStep}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                המשך
              </button>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 text-right">
            <p className="text-lg">רוחב (בס"מ):</p>
            <input
              type="number"
              value={tempInput}
              className="w-full p-2 border rounded text-right"
              onChange={(e) => setTempInput(e.target.value)}
            />
            {tempInput && (
              <button
                onClick={handleNextStep}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                המשך
              </button>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 text-right">
            <p className="text-lg">גובה (בס"מ):</p>
            <input
              type="number"
              value={tempInput}
              className="w-full p-2 border rounded text-right"
              onChange={(e) => setTempInput(e.target.value)}
            />
            {tempInput && (
              <button
                onClick={handleNextStep}
                className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                המשך
              </button>
            )}
          </div>
        );
      
      default:
        return <p className="text-right">חישוב המחיר מתבצע...</p>;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto rtl">
      <CardHeader>
        <CardTitle className="text-right">חישוב מחיר ארון</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>שלב {step} מתוך 7</span>
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="text-blue-500 hover:text-blue-600"
              >
                חזור
              </button>
            )}
          </div>
        </div>
        {renderStep()}
      </CardContent>
    </Card>
  );
};

export default WardrobeCalculator;