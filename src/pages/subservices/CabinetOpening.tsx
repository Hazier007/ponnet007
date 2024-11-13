import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceArea } from '@/components/ServiceArea';
import { 
  Box,
  Phone,
  Shield,
  Tool,
  Lock,
  CheckCircle2,
  Clock,
  ThumbsUp,
  Settings,
  FileCheck
} from 'lucide-react';

const cabinetBenefits = [
  {
    icon: Shield,
    title: 'Gecertificeerd Expert',
    description: 'Specialist in alle type kastsloten'
  },
  {
    icon: Tool,
    title: 'Professioneel Gereedschap',
    description: 'Gespecialiseerde opening tools'
  },
  {
    icon: Clock,
    title: 'Snelle Service',
    description: 'Snel ter plaatse voor noodopeningen'
  },
  {
    icon: Settings,
    title: 'Alle Systemen',
    description: 'Ervaring met alle merken en types'
  },
  {
    icon: ThumbsUp,
    title: 'Schadevrij Werken',
    description: 'Professionele opening zonder schade'
  }
];

const cabinetServices = [
  {
    icon: Lock,
    title: 'Kast Noodopening',
    description: 'Specialist in het openen van vergrendelde kasten',
    features: [
      'Sleutel verloren',
      'Slot defect',
      'Vergrendeling vast',
      'Cilinder problemen'
    ]
  },
  {
    icon: Box,
    title: 'Kantoorkasten',
    description: 'Professionele opening van kantoorkasten en archiefkasten',
    features: [
      'Documentkasten',
      'Archiefkasten',
      'Lockers',
      'Metalen kasten'
    ]
  },
  {
    icon: Tool,
    title: 'Slot Reparatie',
    description: 'Vakkundige reparatie van kastsloten',
    features: [
      'Mechanisme herstel',
      'Slot vervanging',
      'Preventief onderhoud',
      'Sleutel bijmaken'
    ]
  }
];

export function CabinetOpening() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Professionele Kastopening</h1>
            <p className="text-xl mb-8">Specialist in het openen van alle soorten kasten</p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Phone className="mr-2 h-5 w-5" />
              Bel Direct: 0468 11 33 99
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor Onze Kastopening Service?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {cabinetBenefits.map((benefit) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Onze Kastopening Diensten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cabinetServices.map((service) => (
              <Card key={service.title} className="p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 mr-2" />
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
          <h2 className="text-3xl font-bold mb-4">Kast Problemen?</h2>
          <p className="text-xl mb-8">
            Onze specialisten staan voor u klaar met snelle en professionele service.
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