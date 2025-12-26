"use client";

import { useState, useEffect } from "react";
import { portfolio } from "@/data/portfolio";

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
  avatar_url: string;
  total_commits?: number;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  has_pages: boolean;
}

export function useGithubData() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Allow user to paste full URL or just username
  const rawUsername = portfolio.personal.githubUser;
  const username = rawUsername?.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch User Data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed to fetch user");
        const userData = await userRes.json();
        setUser(userData);

        // Fetch Repos (Pinned or Top Sort)
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`);
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposRes.json();
        setRepos(reposData);

        // Fetch Total Commits (using public contribution API as GitHub API requires token for this)
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        if (contribRes.ok) {
            const contribData = await contribRes.json();
            // contribData.total is an object { "2024": 123, "2023": 456 ... }
            const totalCommits = Object.values(contribData.total).reduce((a: any, b: any) => a + b, 0) as number;
            setUser(prev => prev ? { ...prev, total_commits: totalCommits } : null);
        }

      } catch (err) {
        console.error(err);
        setError("Could not load GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { user, repos, loading, error, username };
}
