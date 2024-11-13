import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceArea } from '@/components/ServiceArea';
import { 
  DoorClosed, 
  Key, 
  Lock, 
  Home,
  Building2,
  Car,
  Vault,
  Warehouse,
  Phone,
  Clock,
  Shield,
  MapPin,
  ThumbsUp,
  Wrench
} from 'lucide-react';

const emergencyServices = [
  {
    icon: DoorClosed,
    title: 'Deur Noodopening',
    description: 'Snel en vakkundig uw deur openen zonder schade',
    features: [
      'Binnen 30 minuten ter plaatse',
      'Schadevrije opening',
      'Alle soorten deuren',
      'Inclusief meerpuntssluitingen'
    ]
  },
  {
    icon: Home,
    title: 'Woning Noodopening',
    description: 'Buitengesloten? Wij helpen u snel weer binnen',
    features: [
      'Professionele aanpak',
      '24/7 beschikbaar',
      'Verzekering gedekt',
      'Vaste tarieven'
    ]
  },
  {
    icon: Building2,
    title: 'Kantoor Noodopening',
    description: 'Snelle toegang tot uw bedrijfspand',
    features: [
      'Minimale bedrijfsonderbreking',
      'Discrete service',
      'Alle type sloten',
      'Preventief advies'
    ]
  },
  {
    icon: Car,
    title: 'Auto Noodopening',
    description: 'Specialistische autosleutel en slot diensten',
    features: [
      'Sleutel in auto',
      'Defect slot',
      'Alle automerken',
      'Geen schade garantie'
    ]
  },
  {
    icon: Vault,
    title: 'Kluis Noodopening',
    description: 'Professionele opening van alle soorten kluizen',
    features: [
      'Elektronische kluizen',
      'Mechanische kluizen',
      'Code vergeten',
      'Defect mechanisme'
    ]
  },
  {
    icon: Warehouse,
    title: 'Garage Noodopening',
    description: 'Toegang tot uw garage of berging',
    features: [
      'Garagepoorten',
      'Rolluiken',
      'Kantelsystemen',
      'Elektrische systemen'
    ]
  }
];

const emergencyBenefits = [
  {
    icon: Clock,
    title: '24/7 Beschikbaar',
    description: 'Wij staan dag en nacht voor u klaar, ook in het weekend en op feestdagen.'
  },
  {
    icon: MapPin,
    title: 'Snelle Responstijd',
    description: 'Binnen 30 minuten ter plaatse in heel Vlaanderen.'
  },
  {
    icon: Shield,
    title: 'Schadevrije Opening',
    description: 'Professionele technieken voor het openen zonder schade aan uw eigendom.'
  },
  {
    icon: ThumbsUp,
    title: 'Vaste Prijzen',
    description: 'Transparante tarieven zonder verborgen kosten.'
  },
  {
    icon: Wrench,
    title: 'Professioneel Gereedschap',
    description: 'Gebruik van de modernste technieken en gereedschappen.'
  }
];

export function EmergencyServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622555911850-fd1e713dc760?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Noodopening Service</h1>
            <p className="text-xl mb-8">24/7 beschikbaar voor alle noodgevallen</p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct: 0468 11 33 99
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergency */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor Onze Noodservice?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {emergencyBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Noodopening Diensten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <ServiceArea />

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Buitengesloten of een ander noodgeval?</h2>
          <p className="text-xl mb-8">
            Onze professionele slotenmakers staan 24/7 voor u klaar.
            Snelle service, eerlijke prijzen.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Phone className="mr-2 h-5 w-5" />
            Bel Nu: 0468 11 33 99
          </Button>
        </div>
      </section>
    </div>
  );
}