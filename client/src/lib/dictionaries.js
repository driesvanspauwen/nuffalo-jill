import 'server-only'

const dictionaries = {
    en: () => import('/client/messages/en.json').then((module) => module.default),
    nl: () => import('/client/messages/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()