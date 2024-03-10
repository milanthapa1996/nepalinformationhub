import BlogCardWithImage from "@/components/BlogCardWithImage";

interface ArticleListsProps {
  loksewaArticles: {
    id: number;
    title: string;
    authorFirstName: string;
    authorLastName: string;
    authorAvatarUrl: string;
    createdAt: Date;
    shortDescription: string;
    tags: string[];
    featuredImageUrl: string;
  }[];
}

const BlogSection: React.FC<ArticleListsProps> = ({ loksewaArticles }) => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-12">
        {loksewaArticles.slice(0, 4).map((article, idx) => (
          <div key={article.id}>
            <BlogCardWithImage
              article={article}
              featuredImage={true}
              descriptionLength={150}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
