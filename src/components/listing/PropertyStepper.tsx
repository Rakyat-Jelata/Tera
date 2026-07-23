"use client";

interface PropertyStepperProps {
  currentStep: number;
}

const steps = [
  "Informasi",
  "Lokasi",
  "Detail",
  "Foto",
  "Preview",
];

export default function PropertyStepper({
  currentStep,
}: PropertyStepperProps) {
  return (
    <section className="mb-10 rounded-3xl bg-white p-6 shadow-lg">

      <div className="flex items-center justify-between overflow-x-auto">

        {steps.map((step, index) => {

          const stepNumber = index + 1;

          const active = currentStep === stepNumber;
          const completed = currentStep > stepNumber;

          return (

            <div
              key={step}
              className="flex min-w-[110px] flex-1 items-center"
            >

              <div className="flex flex-col items-center">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 font-bold transition-all
                  ${
                    completed
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : active
                      ? "border-cyan-600 bg-cyan-600 text-white"
                      : "border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {completed ? "✓" : stepNumber}
                </div>

                <p
                  className={`mt-3 text-sm font-semibold whitespace-nowrap
                  ${
                    active
                      ? "text-cyan-600"
                      : completed
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }`}
                >
                  {step}
                </p>

              </div>

              {index !== steps.length - 1 && (

                <div
                  className={`mx-4 h-1 flex-1 rounded-full
                  ${
                    completed
                      ? "bg-emerald-500"
                      : "bg-slate-200"
                  }`}
                />

              )}

            </div>

          );
        })}

      </div>

    </section>
  );
}
