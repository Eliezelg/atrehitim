import type { Translation } from './types';

export const defaultLocale = 'he';
export const supportedLocales = ['he', 'fr'] as const;
export type Locale = typeof supportedLocales[number];

export const translations: Record<Locale, Translation> = {
  he: {
    site: {
      title: 'חנות רהיטים',
      description: 'חנות רהיטים איכותית'
    },
    categories: {
      closets: 'ארונות',
      bedroom: 'חדר הורים',
      kids_room: 'חדרי ילדים',
      libraries: 'ספריות',
      dining: 'פינות אוכל',
      sofas: 'ספות',
      work: 'פינות עבודה',
      accessories: 'ריהוט משלים'
    },
    subcategories: {
      opening_closets: 'ארונות פתיחה',
      sliding_closets: 'ארונות הזזה',
      closet_rooms: 'חדרי ארונות',
      jewish_bed: 'מיטה יהודית',
      double_bed: 'מיטה זוגית',
      upholstered_beds: 'מיטות מרופדות',
      complete_kids_room: 'חדר ילדים קומפלט',
      youth_beds: 'מיטות נוער',
      bunk_beds: 'מיטות קומתיים',
      dining_tables: 'שולחנות אוכל',
      chairs: 'כיסאות',
      guest_sofas: 'ספות אירוח',
      seating_systems: 'מערכות ישיבה',
      wall_units: 'כוורת לתלייה',
      work_desks: 'שולחנות עבודה',
      desk_tops: 'פלטות לשולחן עבודה',
      under_desk_units: 'יחידה שמתחת לפלטה',
      vanity_mirror: 'טואלט ומראה',
      shoe_cabinets: 'ארונות נעליים',
      designer_dressers: 'שידות מעוצבות'
    },
    nav: {
      home: 'דף הבית',
      categories: 'קטגוריות'
    },
    contact: {
      title: 'צור קשר',
      form: {
        name: 'שם מלא',
        phone: 'טלפון',
        email: 'אימייל',
        message: 'הודעה',
        submit: 'שלח'
      }
    }
  },
  fr: {
    site: {
      title: 'Magasin de Meubles',
      description: 'Magasin de meubles de qualité'
    },
    categories: {
      closets: 'Armoires',
      bedroom: 'Chambre Parents',
      kids_room: 'Chambres Enfants',
      libraries: 'Bibliothèques',
      dining: 'Salle à Manger',
      sofas: 'Canapés',
      work: 'Espaces de Travail',
      accessories: 'Meubles Complémentaires'
    },
    subcategories: {
      opening_closets: 'Armoires à Portes Battantes',
      sliding_closets: 'Armoires à Portes Coulissantes',
      closet_rooms: 'Dressings',
      jewish_bed: 'Lit Juif',
      double_bed: 'Lit Double',
      upholstered_beds: 'Lits Rembourrés',
      complete_kids_room: 'Chambre Enfant Complète',
      youth_beds: 'Lits Adolescents',
      bunk_beds: 'Lits Superposés',
      dining_tables: 'Tables à Manger',
      chairs: 'Chaises',
      guest_sofas: 'Canapés d\'Invités',
      seating_systems: 'Ensembles de Salon',
      wall_units: 'Étagères Murales',
      work_desks: 'Bureaux',
      desk_tops: 'Plateaux de Bureau',
      under_desk_units: 'Caissons de Bureau',
      vanity_mirror: 'Coiffeuses et Miroirs',
      shoe_cabinets: 'Armoires à Chaussures',
      designer_dressers: 'Commodes Design'
    },
    nav: {
      home: 'Accueil',
      categories: 'Catégories'
    },
    contact: {
      title: 'Contact',
      form: {
        name: 'Nom complet',
        phone: 'Téléphone',
        email: 'Email',
        message: 'Message',
        submit: 'Envoyer'
      }
    }
  }
};