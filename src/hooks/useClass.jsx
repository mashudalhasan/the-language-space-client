import { useEffect, useState } from "react";

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://the-language-space-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  return [classes, setClasses, loading];
};

export default useClass;
