import IntakeForm from "./components/generic/IntakeForm";
import TreatmentsTab from "./components/generic/TreatmentsTab";

export default function TreatmentsPage() {
  return (
    <section className="mt-9 pb-20">
      <IntakeForm />
      <TreatmentsTab />
    </section>
  );
}
