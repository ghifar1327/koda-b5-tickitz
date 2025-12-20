import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('users')) || [
        { email: 'ghifar@mail.com', password: 'Abc12345' },
      ]
    );
  });
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users))
  },[users])
  return [users, setUsers]
}
