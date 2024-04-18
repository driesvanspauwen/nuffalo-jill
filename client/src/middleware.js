import { NextResponse } from "next/server";
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher'

let supportedLocales = ['en', 'nl'];
const defaultLocale = 'en';

// Get the preferred locale from the Accept-Language header
export function getLocale(request) {
    const acceptLanguageHeader = request.headers.get('accept-language');
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguageHeader } });
    const languages = negotiator.languages();
    return match(languages, supportedLocales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Skip if the pathname contains a file extension (e.g., .css, .js)
    if (pathname.includes('.')) return;

    // Check if the pathname already contains a supported locale
    const pathnameHasLocale = supportedLocales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // If the pathname already contains a supported locale, skip middleware
    if (pathnameHasLocale) return;

    // Redirect to a URL with the preferred locale added to the pathname
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    // Define the matcher to include all paths except for internal ones (_next)
    matcher: [
        '/((?!_next).*)',
    ],
};
