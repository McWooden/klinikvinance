// pages/service.tsx (atau halaman lain tempat Anda ingin menampilkannya)

import Reservation from "@/components/home-page/reservation";
import ServiceCatalog from "../../components/service-page/catalog";

// import Header from '../components/Header'; // Anda bilang sudah punya header

// import Footer from '../components/Footer'; // Jika ada footer

export default function ServicePage() {
  return (
    <div className="flex flex-col gap-[100px] lg:gap-[150px]">
      <ServiceCatalog />
      <Reservation className="lg:my-[150px]" />
    </div>
  );
}
