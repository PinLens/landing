export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "PinLens";

export const DOWNLOAD_URL = "https://github.com/PinLens/PinLens/releases";

export const APP_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`;

export const APP_HOSTNAMES = new Set([
    process.env.NEXT_PUBLIC_APP_DOMAIN,
    `www.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
]);
