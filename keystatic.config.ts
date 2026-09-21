import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    siteSettings: singleton({
      label: 'Global Site Settings',
      path: 'src/content/settings/content',
      schema: {
        brandName: fields.text({ label: 'Brand Name (Logo)', defaultValue: 'Studio Ara' }),
        footerText: fields.text({ label: 'Footer Text', defaultValue: '© 2026 Studio Ara. All rights reserved.' }),
        colorPaper: fields.text({ label: 'Background Color (Paper)', defaultValue: '#ecf0f1', description: 'Hex code for the main background' }),
        colorIndigo: fields.text({ label: 'Main Text / Dark Color (Indigo)', defaultValue: '#2c3e50', description: 'Hex code for dark text and sections' }),
        colorVermilion: fields.text({ label: 'Primary Accent (Vermilion)', defaultValue: '#e54b3c', description: 'Hex code for primary highlights' }),
        colorGold: fields.text({ label: 'Secondary Accent (Gold)', defaultValue: '#f1c40f', description: 'Hex code for secondary highlights' }),
      }
    }),
    homepage: singleton({
      label: 'Homepage Settings',
      path: 'src/content/homepage/content',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title', defaultValue: 'Structural Aesthetics' }),
        heroDescription: fields.text({ label: 'Hero Description', multiline: true }),
        manifestoQuote: fields.text({ label: 'Manifesto Quote', multiline: true }),
        faceImage: fields.image({ label: 'Geometric Face Image', directory: 'public/assets', publicPath: '/assets' }),
        heroCarouselImages: fields.array(
          fields.image({ label: 'Carousel Image', directory: 'public/images/carousel', publicPath: '/images/carousel' }),
          { label: 'Hero Carousel Images', itemLabel: props => 'Image' }
        ),
        clientLogos: fields.array(
          fields.object({
            name: fields.text({ label: 'Client Name' }),
            logo: fields.image({ label: 'Client Logo', directory: 'public/images/clients', publicPath: '/images/clients' })
          }),
          { label: 'Client Logos', itemLabel: props => props.fields.name.value }
        ),
        impactStats: fields.array(
          fields.object({
            number: fields.text({ label: 'Number (e.g. 12+)' }),
            label: fields.text({ label: 'Label' })
          }),
          { label: 'Impact Statistics', itemLabel: props => props.fields.label.value }
        ),
        ctaTitle: fields.text({ label: 'CTA Title', defaultValue: 'Ready to Build?' }),
        ctaButtonText: fields.text({ label: 'CTA Button Text', defaultValue: 'Start a Conversation' })
      },
    }),
    profile: singleton({
      label: 'Profile Page',
      path: 'src/content/profile/content',
      schema: {
        title: fields.text({ label: 'Title', defaultValue: 'Profile' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        content: fields.text({ label: 'Main Content', multiline: true }),
      }
    }),
    services: singleton({
      label: 'Services Page',
      path: 'src/content/services/content',
      schema: {
        title: fields.text({ label: 'Title', defaultValue: 'Services' }),
        subtitle: fields.text({ label: 'Subtitle' }),
        serviceList: fields.array(
          fields.object({
            id: fields.text({ label: 'ID/Number (e.g. 01)' }),
            title: fields.text({ label: 'Service Title' }),
            description: fields.text({ label: 'Description', multiline: true })
          }),
          { label: 'Service List', itemLabel: props => props.fields.title.value }
        )
      }
    }),
    contact: singleton({
      label: 'Contact Page',
      path: 'src/content/contact/content',
      schema: {
        title: fields.text({ label: 'Hero Title' }),
        subtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
        generalEmail: fields.text({ label: 'General Email' }),
        careersEmail: fields.text({ label: 'Careers Email' }),
        address: fields.text({ label: 'Headquarters Address', multiline: true })
      }
    }),
  },
  collections: {
    works: collection({
      label: 'Works (Portfolio)',
      slugField: 'title',
      path: 'src/content/works/*/',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        client: fields.text({ label: 'Client Name' }),
        year: fields.text({ label: 'Year' }),
        category: fields.text({ label: 'Category' }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/works',
          publicPath: '/images/works',
        }),
      },
    }),
    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*/',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role/Position' }),
        photo: fields.image({
          label: 'Photo',
          directory: 'public/images/team',
          publicPath: '/images/team',
        }),
      },
    }),
  },
});
