import { faker } from '@faker-js/faker';
import type { Client } from '@/types/client';

export const mockClients: Client[] = Array.from({ length: 25 }, (_, index) => ({
  id: `client-${index + 1}`,
  name: faker.company.name(),
  status: faker.helpers.arrayElement(['active', 'inactive']),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  country: faker.location.country(),
  industry: faker.helpers.arrayElement([
    'Technology',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Non-profit'
  ]),
  createdAt: faker.date.past({ years: 2 }),
  lastContact: faker.date.recent({ days: 30 }),
  revenue: faker.number.int({ min: 10000, max: 1000000 }),
  projects: faker.number.int({ min: 1, max: 15 }),
  contactPerson: faker.person.fullName(),
  contactTitle: faker.person.jobTitle(),
  notes: faker.lorem.paragraphs(2),
  tags: faker.helpers.arrayElements(
    ['Priority', 'Long-term', 'New', 'VIP', 'International', 'Local'],
    { min: 1, max: 3 }
  )
}));

export const getClientById = (id: string): Client | undefined => {
  return mockClients.find(client => client.id === id);
};

export const getClientsByStatus = (status: 'active' | 'inactive'): Client[] => {
  return mockClients.filter(client => client.status === status);
};

export const searchClients = (query: string): Client[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockClients.filter(client =>
    client.name.toLowerCase().includes(lowercaseQuery) ||
    client.email.toLowerCase().includes(lowercaseQuery) ||
    client.industry.toLowerCase().includes(lowercaseQuery) ||
    client.contactPerson.toLowerCase().includes(lowercaseQuery)
  );
};
