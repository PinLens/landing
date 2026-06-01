"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import { DOWNLOAD_URL } from "@/utils";
import { useI18n } from "@/lib/i18n";
import {
    ArrowRightIcon,
    CheckIcon,
    CornerDownRightIcon,
    Maximize2Icon,
    MoveIcon,
    ScanLineIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
    zh: {
        badge: "区域选择",
        title: "框选任意屏幕区域，实时放大预览",
        description: "PinLens 让你用拖拽方式快速圈定屏幕上的任意区域，并在独立窗口中持续预览。适合 UI 对齐、像素检查、演示细节和远程协作。",
        primaryCta: "立即下载",
        secondaryCta: "返回首页",
        previewLabel: "实时选区",
        previewHint: "拖拽创建选区，使用边角控制点调整大小",
        stats: [
            ["8 向", "边角与边缘控制点"],
            ["实时", "屏幕内容同步预览"],
            ["ESC", "快速退出选择模式"],
        ],
        featuresTitle: "为精确选择而设计",
        features: [
            {
                title: "任意区域拖拽",
                description: "从屏幕任意位置开始拖拽即可创建选区，适配窗口、画布、网页和应用界面细节。",
            },
            {
                title: "8 方向调整大小",
                description: "边角与四边控制点都可调整，方便把选区精确贴合到按钮、图标、间距或设计稿局部。",
            },
            {
                title: "实时预览窗口",
                description: "确认选区后，PinLens 会创建预览窗口并持续同步该区域内容，方便观察变化。",
            },
            {
                title: "移动与微调",
                description: "选区创建后仍可移动位置，减少重复框选，让检查流程更快更顺手。",
            },
        ],
        stepsTitle: "从框选到预览，只需三步",
        steps: [
            "按快捷键或从菜单栏启动 PinLens。",
            "拖拽创建选区，并用控制点调整到需要的范围。",
            "确认后在新窗口中查看实时预览，并继续使用缩放、标尺和网格。",
        ],
    },
    en: {
        badge: "Area Selection",
        title: "Select any screen area and preview it live",
        description: "PinLens lets you drag over any part of your screen and keep it visible in a dedicated live preview window. It is built for UI alignment, pixel checks, detail demos, and collaboration.",
        primaryCta: "Download Now",
        secondaryCta: "Back home",
        previewLabel: "Live selection",
        previewHint: "Drag to create a region, then resize it from the corners and edges",
        stats: [
            ["8-way", "Corner and edge handles"],
            ["Live", "Screen content preview"],
            ["ESC", "Quickly exit selection mode"],
        ],
        featuresTitle: "Designed for precise selection",
        features: [
            {
                title: "Drag any region",
                description: "Start from any point on the screen to capture windows, canvases, webpages, app interfaces, or small UI details.",
            },
            {
                title: "8-direction resizing",
                description: "Corner and edge handles make it easy to fit the selection around buttons, icons, spacing, and design details.",
            },
            {
                title: "Live preview window",
                description: "After confirming a region, PinLens opens a preview window and keeps the selected screen content in sync.",
            },
            {
                title: "Move and refine",
                description: "Reposition the selection after creating it, so you can adjust the capture area without starting over.",
            },
        ],
        stepsTitle: "From selection to preview in three steps",
        steps: [
            "Launch PinLens from the menu bar or with the keyboard shortcut.",
            "Drag to create a region and refine it with the resize handles.",
            "Confirm the selection, then use zoom, rulers, and grids in the preview window.",
        ],
    },
} as const;

const featureIcons = [ScanLineIcon, Maximize2Icon, CornerDownRightIcon, MoveIcon];

const AreaSelectionPage = () => {
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
                                    src="/assets/selection.jpg"
                                    alt={copy.previewLabel}
                                    width={1200}
                                    height={900}
                                    quality={100}
                                    className="h-auto w-full object-contain opacity-90"
                                />
                            </div>
                            <div className="relative mt-4 flex flex-col gap-1 rounded-lg border border-border/60 bg-background/80 p-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Maximize2Icon className="h-4 w-4 text-sky-300" />
                                    {copy.previewLabel}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {copy.previewHint}
                                </p>
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

export default AreaSelectionPage;
