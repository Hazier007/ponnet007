import { Header } from '@/components/Header';
import { Services } from '@/components/Services';
import { ServiceArea } from '@/components/ServiceArea';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';

// Main Service Pages
import { EmergencyServices } from '@/pages/EmergencyServices';
import { DoorOpening } from '@/pages/DoorOpening';
import { CityPage } from '@/pages/CityPage';
import { LockServices } from '@/pages/LockServices';
import { SecurityServices } from '@/pages/SecurityServices';
import { KeyServices } from '@/pages/KeyServices';
import { MaintenanceServices } from '@/pages/MaintenanceServices';
import { BurglaryServices } from '@/pages/BurglaryServices';
import { InstallationServices } from '@/pages/InstallationServices';
import { HomeSecurityServices } from '@/pages/HomeSecurityServices';
import { BusinessSecurityServices } from '@/pages/BusinessSecurityServices';

// Subservices
import { CylinderLocks } from '@/pages/subservices/CylinderLocks';
import { SecurityLocks } from '@/pages/subservices/SecurityLocks';
import { WindowSecurity } from '@/pages/subservices/WindowSecurity';
import { CarKeys } from '@/pages/subservices/CarKeys';
import { SafeOpening } from '@/pages/subservices/SafeOpening';
import { GarageOpening } from '@/pages/subservices/GarageOpening';
import { WindowOpening } from '@/pages/subservices/WindowOpening';
import { MailboxOpening } from '@/pages/subservices/MailboxOpening';
import { FurnitureOpening } from '@/pages/subservices/FurnitureOpening';
import { CabinetOpening } from '@/pages/subservices/CabinetOpening';
import { LockerOpening } from '@/pages/subservices/LockerOpening';
import { AutoOpening } from '@/pages/subservices/AutoOpening';
import { BicycleLockOpening } from '@/pages/subservices/BicycleLockOpening';
import { MotorcycleLockOpening } from '@/pages/subservices/MotorcycleLockOpening';
import { ElectronicLocks } from '@/pages/subservices/ElectronicLocks';
import { MultipointLocks } from '@/pages/subservices/MultipointLocks';
import { SmartLocks } from '@/pages/subservices/SmartLocks';
import { DoorPumps } from '@/pages/subservices/DoorPumps';
import { DoorFittings } from '@/pages/subservices/DoorFittings';

// City Pages
import { GentPage } from '@/pages/cities/GentPage';
import { DendermondePage } from '@/pages/cities/DendermondePage';
import { NinovePage } from '@/pages/cities/NinovePage';
import { AalstPage } from '@/pages/cities/AalstPage';
import { AalterPage } from '@/pages/cities/AalterPage';
import { AssenedePage } from '@/pages/cities/AssenedePage';
import { BeverenPage } from '@/pages/cities/BeverenPage';
import { BrakelPage } from '@/pages/cities/BrakelPage';
import { BuggenhoutPage } from '@/pages/cities/BuggenhoutPage';
import { DeinzePage } from '@/pages/cities/DeinzePage';
import { DenderleewPage } from '@/pages/cities/DenderleewPage';
import { DestelbergenPage } from '@/pages/cities/DestelbergenPage';
import { EekloPage } from '@/pages/cities/EekloPage';
import { ErpeMerePage } from '@/pages/cities/ErpeMerePage';
import { EvergemPage } from '@/pages/cities/EvergemPage';
import { GaverePage } from '@/pages/cities/GaverePage';
import { GeraardsbergenPage } from '@/pages/cities/GeraardsbergenPage';
import { HammePage } from '@/pages/cities/HammePage';
import { HerzeleePage } from '@/pages/cities/HerzeleePage';
import { HorebekePage } from '@/pages/cities/HorebekePage';
import { KaprijkePage } from '@/pages/cities/KaprijkePage';
import { KluisbergenPage } from '@/pages/cities/KluisbergenPage';
import { KruibekePage } from '@/pages/cities/KruibekePage';
import { KruisemPage } from '@/pages/cities/KruisemPage';
import { LaarnePage } from '@/pages/cities/LaarnePage';
import { LebbekeePage } from '@/pages/cities/LebbekeePage';
import { LedePage } from '@/pages/cities/LedePage';
import { LierdePage } from '@/pages/cities/LierdePage';
import { LievegemPage } from '@/pages/cities/LievegemPage';
import { LochristiPage } from '@/pages/cities/LochristiPage';
import { LokerenPage } from '@/pages/cities/LokerenPage';
import { MaarkedalPage } from '@/pages/cities/MaarkedalPage';
import { MaldegemPage } from '@/pages/cities/MaldegemPage';
import { MellePage } from '@/pages/cities/MellePage';
import { MerelebekePage } from '@/pages/cities/MerelebekePage';
import { MoerbekePage } from '@/pages/cities/MoerbekePage';
import { NazarethPage } from '@/pages/cities/NazarethPage';
import { OosterzelePage } from '@/pages/cities/OosterzelePage';
import { OudenaardePage } from '@/pages/cities/OudenaardePage';
import { RonsePage } from '@/pages/cities/RonsePage';
import { SintGillisWaasPage } from '@/pages/cities/SintGillisWaasPage';
import { SintLaurensPage } from '@/pages/cities/SintLaurensPage';
import { SintLievensHoutemPage } from '@/pages/cities/SintLievensHoutemPage';
import { SintMartensLatemPage } from '@/pages/cities/SintMartensLatemPage';
import { SintNiklaasPage } from '@/pages/cities/SintNiklaasPage';
import { StekenePage } from '@/pages/cities/StekenePage';
import { TemsePage } from '@/pages/cities/TemsePage';
import { WaasmunsterPage } from '@/pages/cities/WaasmunsterPage';
import { WachtebekePage } from '@/pages/cities/WachtebekePage';
import { WetterenPage } from '@/pages/cities/WetterenPage';
import { WichelenPage } from '@/pages/cities/WichelenPage';
import { WortegePetegemPage } from '@/pages/cities/WortegePetegemPage';
import { ZelePage } from '@/pages/cities/ZelePage';
import { ZelzatePage } from '@/pages/cities/ZelzatePage';
import { ZottegemPage } from '@/pages/cities/ZottegemPage';
import { ZwalmPage } from '@/pages/cities/ZwalmPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          <Header />
          <Services />
          <ServiceArea />
          <WhyChooseUs />
        </div>
      } />
      
      {/* Main Services */}
      <Route path="/noodopening" element={<EmergencyServices />} />
      <Route path="/sloten" element={<LockServices />} />
      <Route path="/beveiliging" element={<SecurityServices />} />
      <Route path="/sleutels" element={<KeyServices />} />
      <Route path="/onderhoud" element={<MaintenanceServices />} />
      <Route path="/inbraakschade" element={<BurglaryServices />} />
      <Route path="/installatie" element={<InstallationServices />} />
      <Route path="/woningbeveiliging" element={<HomeSecurityServices />} />
      <Route path="/bedrijfsbeveiliging" element={<BusinessSecurityServices />} />

      {/* Subservices */}
      <Route path="/noodopening/deur-opening" element={<DoorOpening />} />
      <Route path="/noodopening/kluis-opening" element={<SafeOpening />} />
      <Route path="/noodopening/garage-opening" element={<GarageOpening />} />
      <Route path="/noodopening/raam-opening" element={<WindowOpening />} />
      <Route path="/noodopening/brievenbus-opening" element={<MailboxOpening />} />
      <Route path="/noodopening/meubel-opening" element={<FurnitureOpening />} />
      <Route path="/noodopening/kast-opening" element={<CabinetOpening />} />
      <Route path="/noodopening/locker-opening" element={<LockerOpening />} />
      <Route path="/noodopening/auto-opening" element={<AutoOpening />} />
      <Route path="/noodopening/fietsslot-opening" element={<BicycleLockOpening />} />
      <Route path="/noodopening/motorslot-opening" element={<MotorcycleLockOpening />} />
      
      <Route path="/sloten/cilindersloten" element={<CylinderLocks />} />
      <Route path="/sloten/veiligheidssloten" element={<SecurityLocks />} />
      <Route path="/sloten/elektronische-sloten" element={<ElectronicLocks />} />
      <Route path="/sloten/meerpuntssluitingen" element={<MultipointLocks />} />
      <Route path="/sloten/smart-locks" element={<SmartLocks />} />
      <Route path="/beveiliging/raambeveiliging" element={<WindowSecurity />} />
      <Route path="/sleutels/autosleutels" element={<CarKeys />} />
      <Route path="/onderhoud/deurpompen" element={<DoorPumps />} />
      <Route path="/onderhoud/deurbeslag" element={<DoorFittings />} />

      {/* Cities */}
      <Route path="/aalst" element={<AalstPage />} />
      <Route path="/aalter" element={<AalterPage />} />
      <Route path="/assenede" element={<AssenedePage />} />
      <Route path="/beveren" element={<BeverenPage />} />
      <Route path="/brakel" element={<BrakelPage />} />
      <Route path="/buggenhout" element={<BuggenhoutPage />} />
      <Route path="/deinze" element={<DeinzePage />} />
      <Route path="/denderleeuw" element={<DenderleewPage />} />
      <Route path="/dendermonde" element={<DendermondePage />} />
      <Route path="/destelbergen" element={<DestelbergenPage />} />
      <Route path="/eeklo" element={<EekloPage />} />
      <Route path="/erpe-mere" element={<ErpeMerePage />} />
      <Route path="/evergem" element={<EvergemPage />} />
      <Route path="/gavere" element={<GaverePage />} />
      <Route path="/gent" element={<GentPage />} />
      <Route path="/geraardsbergen" element={<GeraardsbergenPage />} />
      <Route path="/hamme" element={<HammePage />} />
      <Route path="/herzele" element={<HerzeleePage />} />
      <Route path="/horebeke" element={<HorebekePage />} />
      <Route path="/kaprijke" element={<KaprijkePage />} />
      <Route path="/kluisbergen" element={<KluisbergenPage />} />
      <Route path="/kruibeke" element={<KruibekePage />} />
      <Route path="/kruisem" element={<KruisemPage />} />
      <Route path="/laarne" element={<LaarnePage />} />
      <Route path="/lebbeke" element={<LebbekeePage />} />
      <Route path="/lede" element={<LedePage />} />
      <Route path="/lierde" element={<LierdePage />} />
      <Route path="/lievegem" element={<LievegemPage />} />
      <Route path="/lochristi" element={<LochristiPage />} />
      <Route path="/lokeren" element={<LokerenPage />} />
      <Route path="/maarkedal" element={<MaarkedalPage />} />
      <Route path="/maldegem" element={<MaldegemPage />} />
      <Route path="/melle" element={<MellePage />} />
      <Route path="/merelbeke" element={<MerelebekePage />} />
      <Route path="/moerbeke" element={<MoerbekePage />} />
      <Route path="/nazareth" element={<NazarethPage />} />
      <Route path="/ninove" element={<NinovePage />} />
      <Route path="/oosterzele" element={<OosterzelePage />} />
      <Route path="/oudenaarde" element={<OudenaardePage />} />
      <Route path="/ronse" element={<RonsePage />} />
      <Route path="/sint-gillis-waas" element={<SintGillisWaasPage />} />
      <Route path="/sint-laureins" element={<SintLaurensPage />} />
      <Route path="/sint-lievens-houtem" element={<SintLievensHoutemPage />} />
      <Route path="/sint-martens-latem" element={<SintMartensLatemPage />} />
      <Route path="/sint-niklaas" element={<SintNiklaasPage />} />
      <Route path="/stekene" element={<StekenePage />} />
      <Route path="/temse" element={<TemsePage />} />
      <Route path="/waasmunster" element={<WaasmunsterPage />} />
      <Route path="/wachtebeke" element={<WachtebekePage />} />
      <Route path="/wetteren" element={<WetterenPage />} />
      <Route path="/wichelen" element={<WichelenPage />} />
      <Route path="/wortegem-petegem" element={<WortegePetegemPage />} />
      <Route path="/zele" element={<ZelePage />} />
      <Route path="/zelzate" element={<ZelzatePage />} />
      <Route path="/zottegem" element={<ZottegemPage />} />
      <Route path="/zwalm" element={<ZwalmPage />} />
    </Routes>
  );
}

export default App;