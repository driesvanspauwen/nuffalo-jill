import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'nl'] as const;

export const pathnames = {
    '/': '/',
    '/ploeg' : '/ploeg',
    '/ploegboekje' : '/ploegboekje',
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;