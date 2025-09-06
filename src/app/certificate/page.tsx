import CertificateForm from "../component/certificate-ui/CertificateForm";
import EnrollNavbar from "@/enrollnavbar/enrollnavbar";

export default function CertificatePage() {
  return (
  <>
         <EnrollNavbar />

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <CertificateForm />
    </div>
    </>
  );
}
