import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const createOrGetUser = async (response: any, addUser: any) => {
  type Decoded = { name: string; picture: string; sub: string };

  const { name, picture, sub }: Decoded = jwt_decode(response.credential);
  //   const decoded = ({
  //     name: string,
  //     picture: string,
  //     sub: string,
  //   } = jwt_decode(response.credential));

  //   const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  addUser(user);

  await axios.post(`http://localhost:3000/api/auth`, user);
};
