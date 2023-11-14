import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  //  <Route path="/user/:id" element={<User />} /> 에서 : 빼고

  return (
    <div className="bg-pink-100 flex justify-center items-center">
      User ID: {id}
    </div>
  );
};

export default User;
