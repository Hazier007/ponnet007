import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { cities, provinces } from '@/lib/cities';

export function ServiceArea() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('all');

  const filteredCities = cities.filter(city => {
    const matchesSearch = city.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesProvince = selectedProvince === 'all' || city.province === selectedProvince;
    return matchesSearch && matchesProvince;
  });

  return (
    <section id="locaties" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Werkgebied</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Wij zijn actief in heel Vlaanderen en garanderen snelle service in uw regio.
          Zoek uw gemeente om te zien of we bij u in de buurt werken.
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Zoek uw gemeente..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="w-full md:w-48 h-10 pl-4 pr-8 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                <option value="all">Alle provincies</option>
                {provinces.map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <Card key={city.name} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h3 className="font-semibold">{city.name}</h3>
                  <p className="text-sm text-gray-500">{city.province}</p>
                  {city.subMunicipalities && city.subMunicipalities.length > 0 && (
                    <p className="text-xs text-gray-400 mt-1">
                      {city.subMunicipalities.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <MapPin className="mr-2 h-4 w-4" />
            Bekijk alle locaties
          </Button>
        </div>
      </div>
    </section>
  );
}