import Image from 'next/image';
import React from 'react';

const ArticleHeader: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
      <Image src={data.featuredImageUrl} alt={data.title} width={400} height={100} />
      <p className="text-gray-600 mt-2">
        By {data.authorFirstName} {data.authorLastName}
      </p>
    </div>
  );
};

const ArticleContent: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="mt-8">
      <p>{data.shortDescription}</p>
      {/* Rest of the article content */}
    </div>
  );
};

const ShareSection: React.FC = () => {
  // Implement share buttons here
  return <div>Share on social media</div>;
};

const NewsletterSection: React.FC = () => {
  // Implement newsletter subscription form here
  return <div>Subscribe to our newsletter</div>;
};

const TableOfContents: React.FC = () => {
  // Implement table of contents here
  return <div>Table of Contents</div>;
};

export { ArticleHeader, ArticleContent, ShareSection, NewsletterSection, TableOfContents };
