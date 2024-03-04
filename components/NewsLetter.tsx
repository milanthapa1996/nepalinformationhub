import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsLetter = () => {
  return (
    <section className="bg-slate-50 my-24 flex flex-col items-center justify-center py-24 rounded-md space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-md">
          Subscribe to our newsletter to get the latest updates, news, and
          articles delivered straight to your inbox.
        </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" className="bg-white" />
        <Button type="submit">Subscribe</Button>
      </div>
    </section>
  );
};

export default NewsLetter;
