import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceArea } from '@/components/ServiceArea';
import { 
  Key,
  Phone,
  Car,
  Home,
  Building2,
  Lock,
  CheckCircle2,
  Shield,
  Clock,
  Tool,
  Settings
} from 'lucide-react';

const keyBenefits = [
  {
    icon: Shield,
    title: 'Gecertificeerd',
    description: 'Officieel erkende sleutelspecialist'
  },
  {
    icon: Clock,
    title: 'Direct Klaar',
    description: 'Veel sleutels direct ter plaatse gemaakt'
  },
  {
    icon: Tool,
    title: 'Specialist Equipment',
    description: 'Modernste sleutelsnijmachines en apparatuur'
  },
  {
    icon: Lock,
    title: 'Veilig & Betrouwbaar',
    description: 'Gegarandeerde kwaliteit en veiligheid'
  },
  {
    icon: Settings,
    title: 'Alle Sleuteltypes',
    description: 'Expertise in alle soorten sleutels'
  }
];

const keyServices = [
  {
    icon: Home,
    title: 'Huissleutels',
    description: 'Professionele duplicatie van alle huissleutels',
    features: [
      'Cilindersleutels',
      'Veiligheidssleutels',
      'Gecertificeerde kopieën',
      'Sleutels met chip'
    ]
  },
  {
    icon: Car,
    title: 'Autosleutels',
    description: 'Specialist in moderne autosleutels en transponders',
    features: [
      'Autosleutels met chip',
      'Afstandsbedieningen',
      'Transponder programmering',
      'Sleutel reparatie'
    ]
  },
  {
    icon: Building2,
    title: 'Bedrijfssleutels',
    description: 'Professionele sleutelsystemen voor bedrijven',
    features: [
      'Hoofdsleutelsystemen',
      'Gepatenteerde sleutels',
      'Toegangscontrole',
      'Sleutelplan beheer'
    ]
  }
];

export function KeyServices() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white pt-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Professionele Sleutelservice</h1>
            <p className="text-xl mb-8">Specialist in alle soorten sleutels en sleutelsystemen</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Waarom Kiezen voor Onze Sleutelservice?</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {keyBenefits.map((benefit) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">Onze Sleuteldiensten</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyServices.map((service) => (
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
          <h2 className="text-3xl font-bold mb-4">Sleutel Nodig?</h2>
          <p className="text-xl mb-8">
            Onze sleutelspecialisten staan voor u klaar met professionele service en advies.
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