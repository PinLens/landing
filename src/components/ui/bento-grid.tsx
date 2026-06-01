"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import { ArrowRightIcon, Maximize2Icon, RulerIcon, Grid3X3Icon, PinIcon, ZoomInIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import { useI18n } from "@/lib/i18n";

export const CARDS = (t: (key: string) => string) => [
    {
        Icon: Maximize2Icon,
        name: t('features.areaSelection.name'),
        description: t('features.areaSelection.description'),
        href: "/features/area-selection",
        cta: t('common.learnMore'),
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
                <CardHeader>
                    <CardTitle>
                        {t('features.areaSelection.cardTitle')}
                    </CardTitle>
                    <CardDescription>
                        {t('features.areaSelection.cardDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label>
                        {t('features.areaSelection.label')}
                    </Label>
                    <Input
                        type="text"
                        placeholder={t('features.areaSelection.placeholder')}
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: ZoomInIcon,
        name: t('features.zoom.name'),
        description: t('features.zoom.description'),
        href: "#",
        cta: t('common.learnMore'),
        className: "col-span-3 lg:col-span-2",
        background: (
            <Card className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <CardHeader>
                    <CardTitle>
                        {t('features.zoom.cardTitle')}
                    </CardTitle>
                    <CardDescription>
                        {t('features.zoom.cardDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="flex items-center gap-2">
                        <div className="px-4 py-2 bg-muted rounded-md">1x</div>
                        <div className="px-4 py-2 bg-primary/10 rounded-md">2x</div>
                        <div className="px-4 py-2 bg-muted rounded-md">5x</div>
                        <div className="px-4 py-2 bg-muted rounded-md">10x</div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: RulerIcon,
        name: t('features.designTools.name'),
        description: t('features.designTools.description'),
        href: "#",
        cta: t('common.learnMore'),
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Card className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
                <CardHeader>
                    <CardTitle>
                        {t('features.designTools.cardTitle')}
                    </CardTitle>
                    <CardDescription>
                        {t('features.designTools.cardDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="flex items-center gap-4">
                        <div className="px-4 py-2 bg-primary/10 rounded-md">{t('features.designTools.ruler')}</div>
                        <div className="px-4 py-2 bg-muted rounded-md">{t('features.designTools.guides')}</div>
                        <div className="px-4 py-2 bg-muted rounded-md">{t('features.designTools.color')}</div>
                    </div>
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: PinIcon,
        name: t('features.quickActions.name'),
        description: t('features.quickActions.description'),
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: t('common.learnMore'),
        background: (
            <Card className="absolute right-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <CardHeader>
                    <CardTitle>
                        {t('features.quickActions.cardTitle')}
                    </CardTitle>
                    <CardDescription>
                        {t('features.quickActions.cardDescription')}
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <div className="space-y-2">
                        <div className="px-3 py-1 bg-muted rounded text-sm">Cmd+Ctrl+P</div>
                        <div className="px-3 py-1 bg-muted rounded text-sm">ESC 关闭</div>
                    </div>
                </CardContent>
            </Card>
        ),
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
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
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
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
