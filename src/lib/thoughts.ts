import fs from "fs";
import path from "path";
import matter from "gray-matter";

const THOUGHTS_DIR = path.join(process.cwd(), "content", "thoughts");

export type ThoughtMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
};

export function getAllThoughts(): ThoughtMeta[] {
  const files = fs.readdirSync(THOUGHTS_DIR).filter((f) => f.endsWith(".mdx"));

  const thoughts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(THOUGHTS_DIR, file), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      readingTime: data.readingTime as string,
      category: data.category as string,
    };
  });

  return thoughts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getThoughtBySlug(slug: string) {
  const filePath = path.join(THOUGHTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    meta: {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      readingTime: data.readingTime as string,
      category: data.category as string,
    } satisfies ThoughtMeta,
  };
}
