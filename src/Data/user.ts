import { useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
}

export default function useUserData(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setUser({ name: "John Doe", email: "jhon@gmail.com" });
    };
    fetchUser().finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
}
