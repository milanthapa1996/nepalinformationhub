import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

const ArticleLists: React.FC<ArticleListsProps> = ({ loksewaArticles }) => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-12">
        <div>
          <BlogCardWithImage
            article={loksewaArticles[0]}
            featuredImage={true}
            descriptionLength={150}
          />
        </div>
        <div className="lg:col-span-1 grid grid-cols-1 gap-8">
          {loksewaArticles.slice(1, 3).map((article, idx) => (
            <div key={article.id}>
              <BlogCardWithImage
                article={article}
                featuredImage={false}
                descriptionLength={150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleLists;
