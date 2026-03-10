import { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} - 屏幕区域实时预览工具`,
    description = `${process.env.NEXT_PUBLIC_APP_NAME} 是一款强大的 macOS 屏幕区域实时预览工具，允许你选择屏幕上的任意区域并在独立窗口中实时显示该区域的内容。支持缩放、标尺、网格、辅助线等多种专业辅助工具，是 UI 设计、开发调试、内容创作的得力助手。`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@shreyassihasane",
    },
    // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN!),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
