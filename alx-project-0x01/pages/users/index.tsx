import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal"; // import UserModal
import { UserProps, UserData } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // keep this naming for test
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // Use state to manage the users list (starting with the fetched posts)
  const [users, setUsers] = useState<UserData[]>(posts);
  const [showModal, setShowModal] = useState(false);

  // Handle adding new user
  const handleAddUser = (newUser: UserData) => {
    const newUserWithId = { ...newUser, id: users.length + 1 };
    setUsers((prev) => [...prev, newUserWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {users.map((user, idx) => (
            <UserCard key={idx} {...user} />
          ))}
        </div>
      </main>

      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          onSubmit={(user) => {
            handleAddUser(user);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
