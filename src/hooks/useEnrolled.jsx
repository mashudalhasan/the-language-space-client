import { useEffect, useState } from "react";

const useEnrolled = () => {
  const [enrolled, setEnrolled] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-language-space-server.vercel.app/enrolled")
      .then((res) => res.json())
      .then((data) => {
        setEnrolled(data);
        setLoading(false);
      });
  }, []);

  return [enrolled, loading];
};

export default useEnrolled;
