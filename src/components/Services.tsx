import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  LockKeyhole, 
  ShieldCheck, 
  KeyRound, 
  Wrench, 
  Home, 
  Clock,
  Settings,
  AlertTriangle,
  DoorClosed
} from 'lucide-react';

const services = [
  {
    icon: LockKeyhole,
    title: 'Noodopeningen',
    description: 'Buitengesloten? We zijn er binnen 30 minuten om u te helpen, 24/7 beschikbaar voor noodgevallen.',
    bgImage: 'https://images.unsplash.com/photo-1622555911850-fd1e713dc760?auto=format&fit=crop&q=80',
    href: '/noodopening'
  },
  {
    icon: ShieldCheck,
    title: 'Beveiliging',
    description: 'Upgrade uw beveiliging met moderne sloten en systemen. Professioneel advies over inbraakpreventie.',
    bgImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    href: '/beveiliging'
  },
  {
    icon: KeyRound,
    title: 'Sleutelservice',
    description: 'Professionele sleutelreplicatie, cilinderdiensten en sleutel bijmaken terwijl u wacht.',
    bgImage: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80',
    href: '/sleutels'
  },
  {
    icon: Wrench,
    title: 'Reparaties',
    description: 'Vakkundige reparatie van alle soorten sloten, inclusief meerpuntssluitingen en veiligheidssloten.',
    bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    href: '/onderhoud'
  },
  {
    icon: Home,
    title: 'Inbraakpreventie',
    description: 'Deskundig advies en installatie van inbraakwerende voorzieningen voor uw woning of bedrijf.',
    bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    href: '/inbraakschade'
  },
  {
    icon: Clock,
    title: 'Spoedservice',
    description: '24/7 beschikbaar voor noodgevallen. Snelle responstijd en professionele hulp wanneer u het nodig heeft.',
    bgImage: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80',
    href: '/noodopening'
  },
  {
    icon: Settings,
    title: 'Onderhoud',
    description: 'Regelmatig onderhoud van uw sloten en beveiligingssystemen voor optimale werking en levensduur.',
    bgImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
    href: '/onderhoud'
  },
  {
    icon: AlertTriangle,
    title: 'Veiligheidsadvies',
    description: 'Persoonlijk advies over de beste beveiligingsoplossingen voor uw specifieke situatie.',
    bgImage: 'https://images.unsplash.com/photo-1499744937866-d7e566a20a61?auto=format&fit=crop&q=80',
    href: '/beveiliging'
  },
  {
    icon: DoorClosed,
    title: 'Deurbeveiliging',
    description: 'Specialistische oplossingen voor het beveiligen van alle soorten deuren en toegangspunten.',
    bgImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80',
    href: '/beveiliging'
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.title} to={service.href}>
              <Card className="relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute inset-0">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                </div>
                <div className="relative p-6 text-white">
                  <service.icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}