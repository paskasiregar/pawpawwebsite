import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import CTA from "@/components/CTA";

export default async function Privacy() {
  return (
    <div className="w-full font-plus-jakarta m-auto flex min-h-screen flex-col items-center justify-between">
      <section className="w-full">
        <div className="w-full">
          <div>
            <CTA />
          </div>
          <div id="about-us">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
