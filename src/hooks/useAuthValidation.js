import { useEffect, useState } from "react";

export function useAuthValidation(email, password) {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!email) {
      newErrors.email = " " ;  
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Format email mail@mail.com";
    }

    if (!password) {
      newErrors.password = "Min 8 karakter, huruf besar, kecil, dan angka";
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Min 8 karakter, huruf besar, kecil, dan angka";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [email, password]);

  return { errors, isValid };
}
