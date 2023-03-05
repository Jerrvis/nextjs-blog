import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import { serialize } from "next-mdx-remote/serialize";
import prism from "remark-prism";
import gfm from "remark-gfm";
import externalLinks from "remark-external-links";

const contentDir = path.join(process.cwd(), "content");

const contentRoute = ["node", "tech"];

export const getContentSlugList = (type: string) =>
  fs.readdirSync(path.join(contentDir, type));

export const getTechSlugList = () => getContentSlugList("tech");

export const getNodeSlugList = () => getContentSlugList("node");

export const getContentSummaryBySlug = (type: string, slug: string) => {
  const fileContent = fs.readFileSync(
    path.join(contentDir, type, slug, "index.md"),
    "utf-8"
  );
  const { data } = matter(fileContent);
  return {
    type,
    title: data.title,
    description: data.description,
    tags: data.tags,
    date: dayjs(data.date).format("YYYY-MM-DD"),
    slug,
  };
};

export const getContentList = (type: string) => {
  const slugs = getContentSlugList(type);
  return slugs
    .map((slug) => getContentSummaryBySlug(type, slug))
    .sort((a, b) => (dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1));
};

export const getContentBySlug = async (type: string, slug: string) => {
  const fileContent = fs.readFileSync(
    path.join(contentDir, type, slug, "index.md"),
    "utf-8"
  );
  const { data, content } = matter(fileContent);
  return {
    title: data.title,
    date: dayjs(data.date).format("YYYY-MM-DD"),
    description: data.description,
    tags: data.tags || [],
    content: await serialize(content, {
      mdxOptions: {
        remarkPlugins: [prism, externalLinks, gfm],
      },
    }),
  };
};

export const getAllList = () => {
  const nodeList = getContentList("node");
  const techList = getContentList("tech");
  return [...nodeList, ...techList].sort((a, b) =>
    dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1
  );
};
