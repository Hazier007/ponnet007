import { Card } from '@/components/ui/card';
import { 
  Clock, 
  Star, 
  Shield, 
  MapPin, 
  ThumbsUp,
  Award,
  Wrench,
  Users,
  Heart,
  GraduationCap
} from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: 'Jarenlange Ervaring',
    description: 'Met uitgebreide ervaring begrijpen wij alle aspecten van het slotenmakerswerk perfect.',
  },
  {
    icon: Clock,
    title: '24/7 Beschikbaarheid',
    description: 'Dag en nacht paraat voor noodsituaties, zodat u nooit lang hoeft te wachten.',
  },
  {
    icon: MapPin,
    title: 'Snel Ter Plaatse',
    description: 'Binnen 30 minuten ter plaatse dankzij onze lokale aanwezigheid in Oost-Vlaanderen.',
  },
  {
    icon: ThumbsUp,
    title: 'Transparante Prijzen',
    description: 'Heldere communicatie over kosten vooraf, geen verborgen kosten.',
  },
  {
    icon: Shield,
    title: 'Deskundige Adviezen',
    description: 'Professioneel advies op maat over inbraakpreventie en beveiliging.',
  },
  {
    icon: Heart,
    title: 'Betrouwbaarheid',
    description: 'Hoge klanttevredenheid door zorgvuldige en respectvolle service.',
  },
  {
    icon: Wrench,
    title: 'Schadevrij Werken',
    description: 'Gebruik van de nieuwste technieken voor schadevrij openen van deuren.',
  },
  {
    icon: Award,
    title: 'Specialistische Kennis',
    description: 'Gespecialiseerd in moderne beveiligingstechnieken en systemen.',
  },
  {
    icon: Users,
    title: 'Lokale Service',
    description: 'Persoonlijke aandacht en begrip voor lokale behoeften in Oost-Vlaanderen.',
  },
  {
    icon: GraduationCap,
    title: 'Gecertificeerd',
    description: 'Up-to-date met de nieuwste technieken en officieel gecertificeerd.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="over-ons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Waarom Kiezen voor Slotenmaker Ponnet?</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Met meer dan 15 jaar ervaring zijn wij uw betrouwbare partner voor alle sloten en beveiligingsvraagstukken.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Card key={reason.title} className="p-6 hover:shadow-lg transition-shadow">
              <reason.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}