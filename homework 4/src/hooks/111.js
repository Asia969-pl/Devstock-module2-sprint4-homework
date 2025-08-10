import { useState, useEffect } from "react";

const useFilterUsers = (filter) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredUsers = data.filter((user) =>
          user.username.toLowerCase().includes(filter.toLowerCase())
        );
        setUsers(filteredUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [filter]);

  return { users, isLoading, isError };
};
export default useFilterUsers;