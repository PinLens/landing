import { RulerIcon, Maximize2Icon, ZoomInIcon, MousePointerClickIcon } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { DOWNLOAD_URL } from "./site";

export const NAV_LINKS = (locale: Locale) => [
    {
        title: locale === 'zh' ? "功能" : "Features",
        href: "/features",
        menu: [
            {
                title: locale === 'zh' ? "区域选择" : "Area Selection",
                tagline: locale === 'zh' ? "灵活拖拽选择任意屏幕区域，支持 8 方向调整大小和移动。" : "Flexibly drag to select any screen area, supports 8-direction resizing and moving.",
                href: "/features/area-selection",
                icon: Maximize2Icon,
            },
            {
                title: locale === 'zh' ? "缩放功能" : "Zoom Function",
                tagline: locale === 'zh' ? "支持 0.5x - 10x 缩放，鼠标手势缩放，实时显示缩放级别。" : "Supports 0.5x - 10x zoom, mouse gesture zoom, real-time zoom level display.",
                href: "/features/zoom",
                icon: ZoomInIcon,
            },
            {
                title: locale === 'zh' ? "设计工具" : "Design Tools",
                tagline: locale === 'zh' ? "可开关的水平/垂直标尺，自定义辅助线，网格系统。" : "Toggleable horizontal/vertical rulers, custom guides, grid system.",
                href: "/features/design-tools",
                icon: RulerIcon,
            },
            {
                title: locale === 'zh' ? "快捷点击" : "Quick Click",
                tagline: locale === 'zh' ? "开启后可直接在画板中点击，所点即生效。" : "Click directly on the canvas after enabling it, and each click takes effect immediately.",
                href: "/features/quick-actions",
                icon: MousePointerClickIcon,
            },
        ],
    },
    {
        title: locale === 'zh' ? "下载" : "Download",
        href: DOWNLOAD_URL,
    },
    {
        title: locale === 'zh' ? "更新日志" : "Changelog",
        href: "/changelog",
    },
];
