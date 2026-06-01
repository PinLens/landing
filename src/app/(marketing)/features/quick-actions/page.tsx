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
    MousePointerClickIcon,
    PanelTopIcon,
    SparklesIcon,
    ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const COPY = {
    zh: {
        badge: "快捷点击",
        title: "开启后直接点击画板，所点即生效",
        description: "快捷点击让预览窗口从观察工具变成可直接交互的画板。开启后无需来回切换模式，在画板中点击目标位置，点击结果会立即生效。",
        primaryCta: "立即下载",
        secondaryCta: "返回首页",
        previewLabel: "画板快捷点击",
        previewHint: "开启快捷点击后，在画板中点哪里就直接作用到哪里",
        stats: [
            ["点击", "直接在画板中操作"],
            ["即生效", "减少确认与切换步骤"],
            ["流畅", "保持预览和交互连续"],
        ],
        featuresTitle: "为直接交互而设计",
        features: [
            {
                title: "画板直点",
                description: "开启后可以在画板中直接点击目标位置，无需再回到原窗口或切换到其他操作层。",
            },
            {
                title: "所点即生效",
                description: "点击行为会立即作用到对应位置，适合快速验证按钮、热点区域或交互状态。",
            },
            {
                title: "减少模式切换",
                description: "在查看、缩放和定位之后可以直接执行点击，减少观察和操作之间的断点。",
            },
            {
                title: "适合演示与调试",
                description: "演示细节或调试交互时，可以围绕同一块画板连续观察、放大和点击。",
            },
        ],
        stepsTitle: "开启后直接点击",
        steps: [
            "选择需要查看和操作的区域，打开 PinLens 画板预览。",
            "开启快捷点击模式，让画板进入可点击状态。",
            "在画板中点击目标位置，点击结果立即生效。",
        ],
    },
    en: {
        badge: "Quick Click",
        title: "Click directly on the canvas and apply instantly",
        description: "Quick Click turns the preview window into an interactive canvas. Once enabled, you can click target positions directly on the canvas and have each click take effect immediately.",
        primaryCta: "Download Now",
        secondaryCta: "Back home",
        previewLabel: "Canvas quick click",
        previewHint: "After enabling Quick Click, clicks on the canvas apply directly to the target position",
        stats: [
            ["Click", "Operate directly on the canvas"],
            ["Instant", "Fewer confirmation steps"],
            ["Fluid", "Keep preview and interaction continuous"],
        ],
        featuresTitle: "Designed for direct interaction",
        features: [
            {
                title: "Click on the canvas",
                description: "After enabling it, click target positions directly on the canvas without returning to the original window or another operation layer.",
            },
            {
                title: "Every click applies",
                description: "Click actions take effect at the corresponding position immediately, useful for verifying buttons, hotspots, and interaction states.",
            },
            {
                title: "Less mode switching",
                description: "After viewing, zooming, and positioning, you can execute clicks directly and avoid breaks between observation and operation.",
            },
            {
                title: "Great for demos and debugging",
                description: "When presenting details or debugging interactions, keep observing, zooming, and clicking around the same canvas.",
            },
        ],
        stepsTitle: "Enable it and click directly",
        steps: [
            "Select the region you want to view and operate, then open the PinLens canvas preview.",
            "Enable Quick Click mode so the canvas becomes clickable.",
            "Click the target position on the canvas and the result takes effect immediately.",
        ],
    },
} as const;

const featureIcons = [MousePointerClickIcon, ZapIcon, CrosshairIcon, SparklesIcon];

const QuickActionsPage = () => {
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
                                    src="/assets/preview.jpg"
                                    alt={copy.previewLabel}
                                    width={1200}
                                    height={900}
                                    quality={100}
                                    className="h-auto w-full object-contain opacity-90"
                                />
                                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-sky-300/70 bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-[0_0_30px_rgba(56,189,248,0.28)]">
                                    <MousePointerClickIcon className="h-4 w-4 text-sky-300" />
                                    Click
                                </div>
                            </div>
                            <div className="relative mt-4 rounded-lg border border-border/60 bg-background/80 p-4">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <PanelTopIcon className="h-4 w-4 text-sky-300" />
                                    {copy.previewLabel}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">
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

export default QuickActionsPage;
