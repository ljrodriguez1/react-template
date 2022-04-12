import { useState, useEffect } from "react";

export default useUserData = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setUser({ name: "John Doe", email: "jhon@gmail.com" });
    };
    fetchUser().finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
};
