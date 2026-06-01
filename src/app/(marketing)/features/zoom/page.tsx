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
    GaugeIcon,
    MousePointer2Icon,
    ScanSearchIcon,
    ZoomInIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
    zh: {
        badge: "缩放功能",
        title: "从全局预览到像素细节，流畅放大检查",
        description: "PinLens 支持 0.5x 到 10x 缩放，配合鼠标手势、视口定位和缩放指示器，让你在设计走查、开发调试和演示讲解时快速看清每一个细节。",
        primaryCta: "立即下载",
        secondaryCta: "返回首页",
        previewLabel: "缩放预览",
        previewHint: "在实时预览窗口中放大局部内容，缩放指示器会同步显示倍率与当前视口位置",
        stats: [
            ["0.5x-10x", "覆盖全局和细节视图"],
            ["手势", "鼠标滚轮快速缩放"],
            ["指示器", "同步显示倍率与视口位置"],
        ],
        levels: ["0.5x", "1x", "2x", "5x", "10x"],
        featuresTitle: "让细节检查更顺手",
        features: [
            {
                title: "无级缩放",
                description: "从整体布局到像素级细节都能快速切换，减少反复截图和打开设计工具的时间。",
            },
            {
                title: "鼠标手势控制",
                description: "用熟悉的滚轮或触控板操作调整倍率，让放大、缩小和定位保持自然连贯。",
            },
            {
                title: "缩放指示器",
                description: "实时显示当前倍率和视口位置，避免在高倍率下迷失观察区域，适合检查大画布或长页面。",
            },
            {
                title: "配合设计工具",
                description: "缩放后继续使用标尺、网格和辅助线，对齐间距、边界和视觉比例会更精准。",
            },
        ],
        stepsTitle: "快速进入缩放检查",
        steps: [
            "选择需要观察的屏幕区域，打开实时预览窗口。",
            "使用鼠标滚轮或手势调整缩放倍率。",
            "通过缩放指示器确认倍率和视口位置，再配合标尺和网格检查细节。",
        ],
    },
    en: {
        badge: "Zoom Function",
        title: "Move from full context to pixel detail with smooth zoom",
        description: "PinLens supports 0.5x to 10x zoom with mouse gestures, viewport positioning, and zoom indicators, so UI reviews, debugging, and demos can stay focused on the details that matter.",
        primaryCta: "Download Now",
        secondaryCta: "Back home",
        previewLabel: "Zoom preview",
        previewHint: "Zoom into live preview content while indicators show magnification and viewport position",
        stats: [
            ["0.5x-10x", "From overview to detail"],
            ["Gesture", "Zoom quickly with the mouse"],
            ["Indicator", "Magnification and viewport feedback"],
        ],
        levels: ["0.5x", "1x", "2x", "5x", "10x"],
        featuresTitle: "Built for detail inspection",
        features: [
            {
                title: "Continuous zoom",
                description: "Switch from full layout context to pixel-level detail without constantly taking screenshots or opening design tools.",
            },
            {
                title: "Mouse gesture control",
                description: "Use familiar wheel or trackpad gestures to zoom in, zoom out, and keep navigation feeling natural.",
            },
            {
                title: "Zoom indicators",
                description: "Show the current magnification and viewport position in real time, so you do not lose context at higher zoom levels.",
            },
            {
                title: "Works with design aids",
                description: "Keep using rulers, grids, and guides while zoomed in to inspect spacing, edges, and visual proportions.",
            },
        ],
        stepsTitle: "Start zoom inspection quickly",
        steps: [
            "Select the screen area you want to observe and open the live preview window.",
            "Use the mouse wheel or gesture controls to adjust zoom level.",
            "Use the zoom indicator to confirm magnification and viewport position, then inspect details with rulers and grids.",
        ],
    },
} as const;

const featureIcons = [ZoomInIcon, MousePointer2Icon, CrosshairIcon, ScanSearchIcon];

const ZoomPage = () => {
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
                                    src="/assets/zoom.png"
                                    alt={copy.previewLabel}
                                    width={1200}
                                    height={900}
                                    quality={100}
                                    className="h-auto w-full object-contain opacity-[0.85]"
                                />
                            </div>
                            <div className="relative mt-4 rounded-lg border border-border/60 bg-background/80 p-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <GaugeIcon className="h-4 w-4 text-sky-300" />
                                    {copy.previewLabel}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {copy.previewHint}
                                </p>
                                <div className="mt-4 grid grid-cols-5 gap-2">
                                    {copy.levels.map((level) => (
                                        <div
                                            key={level}
                                            className="rounded-md border border-border/70 bg-muted/20 px-2 py-2 text-center text-xs text-muted-foreground data-[active=true]:border-sky-300/70 data-[active=true]:bg-sky-400/15 data-[active=true]:text-foreground"
                                            data-active={level === "2x"}
                                        >
                                            {level}
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

export default ZoomPage;
