import { ContextDefinition } from 'jsonld'

/**
 * =============================================================================
 * hospexProfileContext: JSONLD Context for hospexProfile
 * =============================================================================
 */
export const hospexProfileContext: ContextDefinition = {
  type: {
    '@id': '@type',
  },
  Person: 'http://xmlns.com/foaf/0.1/Person',
  note: {
    '@id': 'http://www.w3.org/2006/vcard/ns#note',
    '@type': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString',
    '@container': '@set',
  },
  name: {
    '@id': 'http://xmlns.com/foaf/0.1/name',
    '@type': 'http://www.w3.org/2001/XMLSchema#string',
  },
  hasPhoto: {
    '@id': 'http://www.w3.org/2006/vcard/ns#hasPhoto',
    '@type': '@id',
  },
  offers: {
    '@id': 'http://w3id.org/hospex/ns#offers',
    '@type': '@id',
    '@container': '@set',
  },
}
