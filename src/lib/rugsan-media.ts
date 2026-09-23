import aboutImage from "@/assets/about-architecture.jpg";
import heroImage from "@/assets/hero-project.jpg";
import missionImage from "@/assets/mission-project.jpg";
import projectOneImage from "@/assets/project-1.jpg";
import projectTwoImage from "@/assets/project-2.jpg";
import projectThreeImage from "@/assets/project-3.jpg";
import founderAsset from "@/assets/rugsan-founder.png.asset.json";
import logoAsset from "@/assets/rugsan-logo.png.asset.json";
import architectureImage from "@/assets/service-architecture.jpg";
import engineeringImage from "@/assets/service-engineering.jpg";
import interiorImage from "@/assets/service-interior.jpg";

export type RugsanMediaItem = {
  src: string;
  alt: string;
  imageClassName?: string;
};

export const rugsanMedia = {
  logo: {
    src: logoAsset.url,
    alt: "Rugsan Construction Company",
    imageClassName: "media-contain media-position-start",
  },
  hero: {
    src: heroImage,
    alt: "Rugsan residential architectural design",
    imageClassName: "media-cover media-position-center",
  },
  about: {
    src: aboutImage,
    alt: "Rugsan architecture, interior design and civil engineering presentation",
    imageClassName: "media-cover media-position-center",
  },
  services: [
    { src: architectureImage, alt: "Architecture design", imageClassName: "media-cover media-position-center" },
    { src: interiorImage, alt: "Interior design", imageClassName: "media-cover media-position-center" },
    { src: engineeringImage, alt: "Civil engineering", imageClassName: "media-cover media-position-center" },
  ] satisfies RugsanMediaItem[],
  projects: [
    { src: projectOneImage, alt: "Rugsan selected project", imageClassName: "media-cover media-position-center" },
    { src: projectTwoImage, alt: "Rugsan selected project", imageClassName: "media-cover media-position-project-two" },
    { src: projectThreeImage, alt: "Rugsan selected project", imageClassName: "media-cover media-position-project-three" },
  ] satisfies RugsanMediaItem[],
  mission: {
    src: missionImage,
    alt: "Rugsan architectural project",
    imageClassName: "media-cover media-position-center",
  },
  founder: {
    src: founderAsset.url,
    alt: "Eng. Nur Mohammed Ali",
    imageClassName: "media-cover media-position-founder",
  },
} satisfies Record<string, RugsanMediaItem | RugsanMediaItem[]>;