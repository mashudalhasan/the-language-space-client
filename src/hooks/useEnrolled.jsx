import { useEffect, useState } from "react";

const useEnrolled = () => {
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/enrolled")
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
        setLoading(false);
      });
  }, []);

  return [enrolled, loading];
};

export default useEnrolled;
