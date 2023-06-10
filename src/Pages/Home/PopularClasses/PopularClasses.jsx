import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCards from "../../../Shared/ClassCards/ClassCards";
import "./PopularClasses.css";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {
  const [classes] = useClass();
  const popular = classes.filter((item) => item.category === "popular");

  return (
    <section className="bg-circle pt-10">
      <div className="classes">
        <SectionTitle
          heading={"Popular Classes"}
          subheading={"Explore your dream classes"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
          {popular.map((item) => (
            <ClassCards key={item._id} item={item}></ClassCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
