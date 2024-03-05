import { useEffect, useState } from "react";
import { getUsers } from "../services/usersApi";

interface User {
  id: number;
  name: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const handleGetUsers = async () => {
    if (error) {
      setError(null);
    }

    getUsers()
      .then((res) => {
        setUsers(res.users);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
   handleGetUsers();
  }, []);

  return { users, error, handleGetUsers };
}

