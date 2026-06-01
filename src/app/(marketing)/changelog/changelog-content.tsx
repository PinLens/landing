"use client";

import AnimationContainer from "@/components/global/animation-container";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { DOWNLOAD_URL } from "@/utils";
import { ArrowUpRightIcon, CalendarDaysIcon, TagIcon } from "lucide-react";
import Link from "next/link";

export type GitHubRelease = {
    id: number;
    tag_name: string;
    name: string | null;
    body: string | null;
    html_url: string;
    published_at: string | null;
    prerelease: boolean;
    draft: boolean;
};

type ReleaseSummaryItem =
    | { type: "text"; text: string }
    | { type: "rule" };

const COPY = {
    zh: {
        badge: "GitHub 发布",
        title: "更新日志",
        description: "自动同步 PinLens 在 GitHub Releases 中发布的最新变更。",
        viewAll: "查看全部发布",
        github: "GitHub",
        prerelease: "预发布",
        unpublished: "未发布",
        noNotes: "这个版本没有填写更新说明。",
        unavailableTitle: "暂时无法加载发布记录",
        unavailableDescription: "当前无法读取 GitHub Releases，你仍然可以直接打开发布页面查看。",
        openReleases: "打开 GitHub Releases",
    },
    en: {
        badge: "GitHub Releases",
        title: "Change Log",
        description: "Automatically synced from the latest PinLens releases on GitHub.",
        viewAll: "View all releases",
        github: "GitHub",
        prerelease: "Pre-release",
        unpublished: "Unpublished",
        noNotes: "No changelog notes were provided for this release.",
        unavailableTitle: "Releases are not available right now",
        unavailableDescription: "We could not load the GitHub release feed. You can still open the releases page directly.",
        openReleases: "Open GitHub Releases",
    },
} as const;

const formatDate = (value: string | null, locale: "en" | "zh", fallback: string) => {
    if (!value) {
        return fallback;
    }

    return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en", {
        year: "numeric",
        month: "short",
        day: "numeric",
    }).format(new Date(value));
};

const getReleaseSummary = (body: string | null, fallback: string): ReleaseSummaryItem[] => {
    if (!body) {
        return [{ type: "text", text: fallback }];
    }

    const lines = body
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line): ReleaseSummaryItem | null => {
            const withoutListMarker = line
                .replace(/^[-*]\s+/, "")
                .replace(/^\d+\.\s+/, "")
                .trim();

            if (line === "---" || withoutListMarker === "---") {
                return { type: "rule" };
            }

            const text = withoutListMarker
                .replace(/^#{1,6}\s+/, "")
                .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
                .replace(/[*_`]/g, "")
                .trim();

            return text ? { type: "text", text } : null;
        })
        .filter((line): line is ReleaseSummaryItem => Boolean(line));

    return lines.length > 0 ? lines.slice(0, 6) : [{ type: "text", text: fallback }];
};

const ChangelogContent = ({ releases }: { releases: GitHubRelease[] }) => {
    const { locale } = useI18n();
    const copy = COPY[locale];

    return (
        <MaxWidthWrapper className="py-20">
            <div className="flex flex-col items-center justify-center">
                <AnimationContainer delay={0.1}>
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <Badge variant="outline" className="mb-5">
                            {copy.badge}
                        </Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-heading text-center !leading-tight">
                            {copy.title}
                        </h1>
                        <p className="text-base md:text-lg mt-6 max-w-2xl text-center text-muted-foreground">
                            {copy.description}
                        </p>
                        <Button asChild variant="outline" className="mt-8">
                            <Link href={DOWNLOAD_URL} className="flex items-center">
                                {copy.viewAll}
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </AnimationContainer>

                <div className="mt-16 w-full max-w-3xl space-y-4">
                    {releases.length > 0 ? (
                        releases.map((release, index) => (
                            <AnimationContainer key={release.id} delay={0.1 + index * 0.05}>
                                <article className="rounded-lg border border-border/70 bg-background p-6">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h2 className="text-xl font-medium text-foreground">
                                                {release.name || release.tag_name}
                                            </h2>
                                            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <TagIcon className="h-4 w-4" />
                                                    {release.tag_name}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <CalendarDaysIcon className="h-4 w-4" />
                                                    {formatDate(release.published_at, locale, copy.unpublished)}
                                                </span>
                                                {release.prerelease && (
                                                    <Badge variant="secondary">
                                                        {copy.prerelease}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                        <Button asChild size="sm" variant="ghost">
                                            <Link href={release.html_url} className="flex items-center">
                                                {copy.github}
                                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className="mt-5 space-y-2 text-sm leading-7 text-muted-foreground">
                                        {getReleaseSummary(release.body, copy.noNotes).map((line, lineIndex) => (
                                            line.type === "rule" ? (
                                                <hr key={`${release.id}-${lineIndex}`} className="border-border/70" />
                                            ) : (
                                                <div key={`${release.id}-${lineIndex}`} className="flex gap-3">
                                                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>{line.text}</span>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </article>
                            </AnimationContainer>
                        ))
                    ) : (
                        <AnimationContainer delay={0.2}>
                            <div className="rounded-lg border border-border/70 bg-background p-6 text-center">
                                <h2 className="text-xl font-medium text-foreground">
                                    {copy.unavailableTitle}
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                    {copy.unavailableDescription}
                                </p>
                                <Button asChild className="mt-5">
                                    <Link href={DOWNLOAD_URL} className="flex items-center">
                                        {copy.openReleases}
                                        <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </AnimationContainer>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default ChangelogContent;
