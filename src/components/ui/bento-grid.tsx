"use client";

import { buttonVariants } from "@/components/ui/button";
import MagicCard from "@/components/ui/magic-card";
import { cn } from "@/utils";
import {
    ArrowRightIcon,
    Maximize2Icon,
    MousePointerClickIcon,
    RulerIcon,
    ZoomInIcon,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const CARDS = (t: (key: string) => string) => [
    {
        Icon: Maximize2Icon,
        name: t('features.areaSelection.name'),
        description: t('features.areaSelection.description'),
        href: "/features/area-selection",
        cta: t('common.learnMore'),
        className: "lg:col-span-1",
        tags: [
            t('features.areaSelection.cardTitle'),
            t('features.areaSelection.cardDescription'),
        ],
    },
    {
        Icon: ZoomInIcon,
        name: t('features.zoom.name'),
        description: t('features.zoom.description'),
        href: "/features/zoom",
        cta: t('common.learnMore'),
        className: "lg:col-span-1",
        tags: [
            "0.5x - 10x",
            t('features.zoom.cardTitle'),
        ],
    },
    {
        Icon: RulerIcon,
        name: t('features.designTools.name'),
        description: t('features.designTools.description'),
        href: "/features/design-tools",
        cta: t('common.learnMore'),
        className: "lg:col-span-1",
        tags: [
            t('features.designTools.ruler'),
            t('features.designTools.guides'),
            t('features.designTools.color'),
        ],
    },
    {
        Icon: MousePointerClickIcon,
        name: t('features.quickActions.name'),
        description: t('features.quickActions.description'),
        className: "lg:col-span-1",
        href: "/features/quick-actions",
        cta: t('common.learnMore'),
        tags: [
            t('features.quickActions.cardTitle'),
            t('features.quickActions.cardDescription'),
        ],
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full grid-cols-1 gap-4 md:grid-cols-2",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    Icon,
    description,
    href,
    cta,
    tags,
}: {
    name: string;
    className: string;
    Icon: LucideIcon;
    description: string;
    href: string;
    cta: string;
    tags: string[];
}) => (
    <MagicCard
        className={cn(
            "group flex h-full min-h-[260px] max-w-none flex-col justify-between bg-gradient-to-r from-background to-background/40 p-6 md:p-6",
            className,
        )}
    >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />

        <div className="relative">
            <div className="flex size-11 items-center justify-center rounded-md bg-muted/20 text-primary">
                <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-foreground">
                {name}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                {description}
            </p>
        </div>

        <div className="relative mt-8 flex flex-col gap-5">
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-md bg-muted/20 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "w-fit cursor-pointer px-0 hover:bg-transparent hover:text-primary" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
    </MagicCard>
);

export { BentoCard, BentoGrid };
