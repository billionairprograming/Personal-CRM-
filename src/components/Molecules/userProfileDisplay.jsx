import { Card } from "@/components/Atoms/User";

{
  /*What is the url used for? */
}

const UserProfileDisplay = ({ userName, userAvatarUrl }) => {
  return (
    <div className="flex items-center p-4 mb-6 bg-teal-100 rounded-lg shadow-inner">
      <div className="avatar mr-4">
        <div className="w-12 h-12 rounded-full ring ring-teal-400 ring-offset-2 ring-offset-base-100">
          <img
            src={
              userAvatarUrl ||
              "https://placehold.co/100x100/9AE6B4/38B2AC?text=JD"
            }
            alt="User Avatar"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-teal-800">{userName}</span>
        <span className="text-sm text-teal-600">Admin</span>
      </div>
    </div>
  );
};

export default UserProfileDisplay;
