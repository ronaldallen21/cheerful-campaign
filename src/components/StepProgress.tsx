interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-6">
      <p className="text-sm sm:text-base font-medium mb-1">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
