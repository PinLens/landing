"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import { useI18n } from "@/lib/i18n";
import { DOWNLOAD_URL } from "@/utils";
import {
    ArrowRightIcon,
    CheckIcon,
    CrosshairIcon,
    Grid3X3Icon,
    PaletteIcon,
    RulerIcon,
    SlidersHorizontalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
    zh: {
        badge: "设计工具",
        title: "用标尺、辅助线和网格精确检查界面",
        description: "PinLens 在实时预览窗口中提供标尺、可拖拽辅助线和可调网格。辅助线支持颜色与宽度设置，网格支持颜色与大小调节，让 UI 对齐、间距检查和视觉走查更准确。",
        primaryCta: "立即下载",
        secondaryCta: "返回首页",
        previewLabel: "标尺与辅助线",
        previewHint: "在预览窗口中开启标尺、拖拽辅助线，并按需要调整辅助线颜色/宽度与网格颜色/大小",
        stats: [
            ["标尺", "水平与垂直测量"],
            ["辅助线", "拖拽、颜色、宽度"],
            ["网格", "颜色与大小调节"],
        ],
        tools: ["标尺", "拖拽辅助线", "颜色/宽度", "网格大小"],
        featuresTitle: "为设计检查保留专业手感",
        features: [
            {
                title: "标尺",
                description: "在预览窗口边缘显示水平与垂直刻度，快速判断元素位置、尺寸和相对距离。",
            },
            {
                title: "可拖拽辅助线",
                description: "按需要添加、拖拽和删除辅助线，并调整颜色与线宽，用来检查按钮、文字、图标和布局边界是否对齐。",
            },
            {
                title: "可调网格",
                description: "开启网格后可调整颜色与大小，直观看到间距节奏，适合检查响应式布局、卡片排列和组件间隔。",
            },
            {
                title: "视觉辅助设置",
                description: "通过颜色、宽度和网格尺寸配置，让参考线在不同背景、亮度和缩放级别下都保持清晰。",
            },
        ],
        stepsTitle: "把实时预览变成检查画布",
        steps: [
            "选择需要检查的屏幕区域，打开 PinLens 实时预览。",
            "开启标尺、辅助线或网格，把参考线拖到关键边界上。",
            "按背景调整辅助线颜色/宽度和网格颜色/大小，再结合缩放检查细节。",
        ],
    },
    en: {
        badge: "Design Tools",
        title: "Inspect interfaces precisely with rulers, guides, and grids",
        description: "PinLens adds rulers, draggable guides, and adjustable grids to the live preview window. Guides support color and width settings, while grids support color and size controls for accurate UI alignment and spacing checks.",
        primaryCta: "Download Now",
        secondaryCta: "Back home",
        previewLabel: "Rulers and guides",
        previewHint: "Enable rulers, drag guides, and tune guide color/width plus grid color/size directly inside the preview window",
        stats: [
            ["Rulers", "Horizontal and vertical measurement"],
            ["Guides", "Drag, color, and width"],
            ["Grid", "Color and size controls"],
        ],
        tools: ["Rulers", "Draggable guides", "Color/width", "Grid size"],
        featuresTitle: "Professional controls for design review",
        features: [
            {
                title: "Rulers",
                description: "Show horizontal and vertical scales around the preview window to judge element position, size, and relative distance.",
            },
            {
                title: "Draggable guides",
                description: "Add, drag, and remove guides, then tune their color and line width to check alignment across buttons, text, icons, and layout boundaries.",
            },
            {
                title: "Adjustable grids",
                description: "Turn on grids and adjust their color and size to see spacing rhythm clearly across responsive layouts, card arrangements, and component gaps.",
            },
            {
                title: "Visual aid settings",
                description: "Configure color, width, and grid size so references stay visible across different backgrounds, brightness levels, and zoom states.",
            },
        ],
        stepsTitle: "Turn live preview into an inspection canvas",
        steps: [
            "Select the screen area you want to inspect and open the PinLens live preview.",
            "Enable rulers, guides, or grids and drag references onto important edges.",
            "Tune guide color/width and grid color/size for the background, then use zoom to inspect details.",
        ],
    },
} as const;

const featureIcons = [RulerIcon, CrosshairIcon, Grid3X3Icon, PaletteIcon];

const DesignToolsPage = () => {
    const { locale } = useI18n();
    const copy = COPY[locale];

    return (
        <div className="overflow-x-hidden">
            <MaxWidthWrapper className="pt-10 md:pt-16">
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="flex flex-col items-start">
                            <MagicBadge title={copy.badge} />
                            <h1 className="mt-6 max-w-3xl text-4xl font-medium !leading-[1.08] tracking-normal text-foreground font-heading md:text-6xl">
                                {copy.title}
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                                {copy.description}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <Button asChild>
                                    <Link href={DOWNLOAD_URL} className="flex items-center">
                                        {copy.primaryCta}
                                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="/#home">
                                        {copy.secondaryCta}
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-border/70 bg-neutral-950 p-4 shadow-[0_-20px_80px_-20px_#ffffff1f_inset]">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />
                            <div className="relative overflow-hidden rounded-lg border border-border/60 bg-background/80">
                                <Image
                                    src="/assets/rule.jpg"
                                    alt={copy.previewLabel}
                                    width={1200}
                                    height={900}
                                    quality={100}
                                    className="h-auto w-full object-contain opacity-90"
                                />
                            </div>
                            <div className="relative mt-4 rounded-lg border border-border/60 bg-background/80 p-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <SlidersHorizontalIcon className="h-4 w-4 text-sky-300" />
                                    {copy.previewLabel}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {copy.previewHint}
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                                    {copy.tools.map((tool) => (
                                        <div key={tool} className="rounded-md border border-border/70 bg-muted/20 px-3 py-2 text-center text-xs text-muted-foreground">
                                            {tool}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2} className="w-full">
                    <div className="grid gap-4 py-12 md:grid-cols-3">
                        {copy.stats.map(([value, label]) => (
                            <div key={value} className="rounded-lg border border-border/70 bg-muted/20 p-5">
                                <div className="text-3xl font-medium text-foreground font-heading">
                                    {value}
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="py-8 md:py-14">
                <AnimationContainer delay={0.1}>
                    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                        <h2 className="text-3xl font-medium font-heading text-foreground md:text-5xl">
                            {copy.featuresTitle}
                        </h2>
                    </div>
                </AnimationContainer>
                <div className="grid gap-4 py-10 md:grid-cols-2">
                    {copy.features.map((feature, index) => {
                        const Icon = featureIcons[index];

                        return (
                            <AnimationContainer delay={0.15 + index * 0.05} key={feature.title}>
                                <div className="h-full rounded-lg border border-border/70 bg-background p-6">
                                    <Icon className="h-8 w-8 text-sky-300" />
                                    <h3 className="mt-5 text-xl font-medium text-foreground">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            </AnimationContainer>
                        );
                    })}
                </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="pb-20">
                <AnimationContainer delay={0.1}>
                    <div className="rounded-xl border border-border/70 bg-muted/20 p-6 md:p-8">
                        <h2 className="text-2xl font-medium text-foreground font-heading md:text-4xl">
                            {copy.stepsTitle}
                        </h2>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {copy.steps.map((step, index) => (
                                <div key={step} className="flex gap-4">
                                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-sm font-medium text-sky-200">
                                        {index + 1}
                                    </div>
                                    <div className="pt-1 text-sm leading-7 text-muted-foreground">
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckIcon className="h-4 w-4 text-sky-300" />
                            PinLens macOS 15.0+
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    );
};

export default DesignToolsPage;
