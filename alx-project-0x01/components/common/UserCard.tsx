import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company }) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-2">{name} (@{username})</h2>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-700 mb-1">📱 {phone}</p>
      <p className="text-gray-700 mb-1">🌐 {website}</p>
      <p className="text-gray-500 text-sm mt-2">
        🏠 {address.suite}, {address.street}, {address.city} ({address.zipcode})
      </p>
      <p className="text-gray-500 text-sm mt-2">🏢 {company.name} - “{company.catchPhrase}”</p>
    </div>
  );
};

export default UserCard;
