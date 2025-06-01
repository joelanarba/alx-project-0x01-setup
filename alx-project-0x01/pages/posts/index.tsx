// pages/posts/index.tsx
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-2">Here are some posts...</p>
      </main>
    </div>
  );
};

export default Posts;
