// Parse and organize cities by province
export const cities = [
  { 
    name: 'Aalst', 
    province: 'Oost-Vlaanderen', 
    subMunicipalities: ['Aalst', 'Gijzegem', 'Hofstade', 'Baardegem', 'Herdersem', 'Meldert', 'Moorsel', 'Erembodegem', 'Nieuwerkerken'],
    description: 'Slotenmaker Ponnet is uw betrouwbare partner voor alle sloten en beveiligingsdiensten in Aalst en omgeving.'
  },
  { 
    name: 'Gent', 
    province: 'Oost-Vlaanderen', 
    subMunicipalities: ['Gent', 'Mariakerke', 'Drongen', 'Wondelgem', 'Sint-Amandsberg', 'Oostakker', 'Desteldonk', 'Mendonk', 'Sint-Kruis-Winkel', 'Gentbrugge', 'Ledeberg'],
    description: 'Professionele slotenmaker service in Gent, beschikbaar voor alle type sloten en beveiligingssystemen.'
  },
  { 
    name: 'Dendermonde', 
    province: 'Oost-Vlaanderen', 
    subMunicipalities: ['Dendermonde', 'Appels', 'Baasrode', 'Grembergen', 'Mespelare', 'Oudegem', 'Schoonaarde', 'Sint-Gillis-bij-Dendermonde'],
    description: 'Uw lokale slotenmaker in Dendermonde voor snelle en betrouwbare service.'
  },
  { 
    name: 'Ninove', 
    province: 'Oost-Vlaanderen', 
    subMunicipalities: ['Ninove', 'Appelterre-Eichem', 'Denderwindeke', 'Lieferinge', 'Nederhasselt', 'Okegem', 'Voorde', 'Pollare', 'Meerbeke', 'Neigem', 'Aspelare', 'Outer'],
    description: 'Betrouwbare slotenmaker service in Ninove en omliggende gemeenten.'
  }
];

export const provinces = [
  'Antwerpen',
  'Oost-Vlaanderen',
  'West-Vlaanderen',
  'Vlaams-Brabant',
  'Limburg'
];

export const services = [
  {
    name: 'Noodopening',
    description: 'Snelle en professionele noodopening service',
    subServices: [
      'Deur opening',
      'Raam opening',
      'Garage opening',
      'Brievenbus opening',
      'Kluis opening',
      'Auto opening',
      'Meubel opening',
      'Kast opening',
      'Locker opening',
      'Fietsslot opening',
      'Motorslot opening'
    ]
  },
  {
    name: 'Sloten',
    description: 'Specialist in alle soorten sloten',
    subServices: [
      'Cilindersloten',
      'Veiligheidssloten',
      'Meerpuntssluitingen',
      'Elektronische sloten',
      'Smart locks'
    ]
  },
  {
    name: 'Beveiliging',
    description: 'Complete beveiligingsoplossingen',
    subServices: [
      'Inbraakpreventie',
      'Raambeveiliging',
      'Deurbeveiliging',
      'Camerasystemen',
      'Toegangscontrole'
    ]
  },
  {
    name: 'Sleutels',
    description: 'Professionele sleutelservice',
    subServices: [
      'Sleutel bijmaken',
      'Autosleutels',
      'Kluissleutels',
      'Codesleutels',
      'Sleutelplan'
    ]
  },
  {
    name: 'Onderhoud',
    description: 'Preventief onderhoud en service',
    subServices: [
      'Slot onderhoud',
      'Deurpomp service',
      'Cilinder onderhoud',
      'Beslag onderhoud',
      'Scharnier service'
    ]
  },
  {
    name: 'Inbraakschade',
    description: 'Snelle hulp na inbraak',
    subServices: [
      'Slot vervanging',
      'Deur reparatie',
      'Kozijn herstel',
      'Beveiliging upgrade'
    ]
  },
  {
    name: 'Installatie',
    description: 'Professionele installatie service',
    subServices: [
      'Sloten installatie',
      'Beveiliging installatie',
      'Camera installatie',
      'Toegangscontrole'
    ]
  },
  {
    name: 'Woningbeveiliging',
    description: 'Complete woningbeveiliging',
    subServices: [
      'Inbraakpreventie',
      'Sloten upgrade',
      'Camera systemen',
      'Smart home security'
    ]
  },
  {
    name: 'Bedrijfsbeveiliging',
    description: 'Specialistische bedrijfsbeveiliging',
    subServices: [
      'Toegangsbeheer',
      'Camerabewaking',
      'Sleutelplan',
      'Security audit'
    ]
  }
];