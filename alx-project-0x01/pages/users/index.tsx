// pages/users/index.tsx
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-2">Here are some users...</p>
      </main>
    </div>
  );
};

export default Users;
