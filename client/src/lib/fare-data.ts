import type { Location, FareData } from '@/types';

export const locations: Location[] = [
  { id: 'aiub', name: 'AIUB', nameEn: 'AIUB', nameBn: 'এআইইউবি' },
  { id: 'kuril-railgate', name: 'Kuril Railgate', nameEn: 'Kuril Railgate', nameBn: 'কুড়িল রেলগেট' },
  { id: 'jamuna-future-park', name: 'Jamuna Future Park', nameEn: 'Jamuna Future Park', nameBn: 'যমুনা ফিউচার পার্ক' },
  { id: 'g-block', name: 'G Block', nameEn: 'G Block', nameBn: 'জি ব্লক' },
  { id: 'kuril-bishwaroad', name: 'Kuril Bishwaroad', nameEn: 'Kuril Bishwaroad', nameBn: 'কুড়িল বিশ্বরোড' },
  { id: 'evercare-gate', name: 'Evercare Gate', nameEn: 'Evercare Gate', nameBn: 'এভারকেয়ার গেট' },
  { id: 'top-ten-a-block', name: 'Top Ten (A Block)', nameEn: 'Top Ten (A Block)', nameBn: 'টপ টেন (এ ব্লক)' },
  { id: 'hazi-bari-masjid', name: 'Hazi Bari Masjid', nameEn: 'Hazi Bari Masjid', nameBn: 'হাজী বাড়ি মসজিদ' },
  { id: 'mridha-bari-masjid', name: 'Mridha Bari Masjid', nameEn: 'Mridha Bari Masjid', nameBn: 'মৃধা বাড়ি মসজিদ' },
  { id: 'walton-bari', name: 'Walton Bari', nameEn: 'Walton Bari', nameBn: 'ওয়ালটন বাড়ি' },
  { id: 'jamuna-check-post', name: 'Jamuna Check Post', nameEn: 'Jamuna Check Post', nameBn: 'যমুনা চেক পোস্ট' },
  { id: 'k-block', name: 'K Block', nameEn: 'K Block', nameBn: 'কে ব্লক' },
  { id: 'ghatpar', name: 'Ghatpar', nameEn: 'Ghatpar', nameBn: 'ঘাটপার' },
  { id: 'koilabari', name: 'Koilabari', nameEn: 'Koilabari', nameBn: 'কৈলাবাড়ি' },
  { id: 'tiner-bera', name: 'Tiner Bera', nameEn: 'Tiner Bera', nameBn: 'টিনের বেড়া' },
  { id: '300-feet-mor', name: '300 Feet Mor', nameEn: '300 Feet Mor', nameBn: '৩০০ ফুট মোড়' },
  { id: 'i-block', name: 'I Block', nameEn: 'I Block', nameBn: 'আই ব্লক' },
  { id: 'kuril-chowrasta', name: 'Kuril Chowrasta', nameEn: 'Kuril Chowrasta', nameBn: 'কুড়িল চৌরাস্তা' },
  { id: 'kuril-kazi-bari', name: 'Kuril Kazi Bari', nameEn: 'Kuril Kazi Bari', nameBn: 'কুড়িল কাজী বাড়ি' },
  { id: 'rupayan', name: 'Rupayan', nameEn: 'Rupayan', nameBn: 'রূপায়ন' }
];

export const fareData: FareData = {
  'aiub-kuril-bishwaroad': 20,
  'aiub-kuril-railgate': 30,
  'aiub-jamuna-future-park': 40,
  'aiub-g-block': 30,
  'aiub-evercare-gate': 40,
  'aiub-top-ten-a-block': 30,
  'aiub-hazi-bari-masjid': 20,
  'aiub-mridha-bari-masjid': 20,
  'aiub-walton-bari': 40,
  'aiub-jamuna-check-post': 30,
  'aiub-k-block': 60,
  'aiub-ghatpar': 30,
  'aiub-koilabari': 20,
  'aiub-tiner-bera': 30,
  'aiub-300-feet-mor': 40,
  'aiub-i-block': 40,
  'aiub-kuril-chowrasta': 30,
  'aiub-kuril-kazi-bari': 20,
  'aiub-rupayan': 20
};

export function calculateFare(fromId: string, toId: string): number {
  if (!fromId || !toId || fromId === toId) return 0;
  
  // Create fare key (always put aiub first for consistent lookup)
  let fareKey: string;
  if (fromId === 'aiub') {
    fareKey = `${fromId}-${toId}`;
  } else if (toId === 'aiub') {
    fareKey = `${toId}-${fromId}`;
  } else {
    // For non-AIUB routes, return average fare
    return 35;
  }
  
  return fareData[fareKey] || 35;
}

export function estimateDistance(fare: number): number {
  // Rough distance estimation based on fare (15 TK per km average)
  return Number((fare / 15).toFixed(1));
}
