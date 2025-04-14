import Link from "next/link";
import {Form} from "./icon";

function IntakeForm() {
  return (
    <div className="container">
      <div className="px-4 py-[18px] bg-cream border-2 border-brown-200 rounded-2xl md:flex justify-between items-center mb-9 hidden gap-4">
        <div className="flex gap-6 items-center">
          <Form className="text-brown-200 size-8 shrink-0" />
          <div>
            <h3 className="mb-1 text-lg font-black text-brown-200">
              Medical Intake form{" "}
            </h3>
            <p className="text-sm font-medium text-brown-200">
              Please fill out your medical questionnaire prior to your
              appointment to help your doctor provide the best guidance for your
              needs.
            </p>
          </div>
        </div>
        <div>
          <Link
            href="/"
            className="text-brown-200 font-bold text-lg underline underline-offset-4 whitespace-nowrap"
          >
            Continue Process
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntakeForm;
