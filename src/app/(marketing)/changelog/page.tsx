import ChangelogContent, { type GitHubRelease } from "./changelog-content";

const RELEASES_API_URL = "https://api.github.com/repos/PinLens/PinLens/releases";

const getReleases = async (): Promise<GitHubRelease[]> => {
    try {
        const response = await fetch(RELEASES_API_URL, {
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
            },
            next: {
                revalidate: 60 * 60,
            },
        });

        if (!response.ok) {
            return [];
        }

        const releases = await response.json();

        if (!Array.isArray(releases)) {
            return [];
        }

        return releases
            .filter((release: GitHubRelease) => !release.draft)
            .slice(0, 10);
    } catch {
        return [];
    }
};

const ChangeLogPage = async () => {
    const releases = await getReleases();

    return <ChangelogContent releases={releases} />;
};

export default ChangeLogPage;
