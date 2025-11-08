import ContactUs from "@/features/contactUs/ui/views/contact-view";
import { Toaster } from "@/components/ui/sonner";

export default function ContactPage() {
  return (
    <>
      <Toaster
        richColors
        position="top-right"
        toastOptions={{ duration: 2000 }}
      />
      <ContactUs />
    </>
  );
}
