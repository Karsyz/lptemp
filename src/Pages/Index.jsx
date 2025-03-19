import Hero from "../Components/Hero";

const Index = () => {
  return (
    <>
      <div className="w-full">
        <Hero
          imgHref={"https://placehold.co/2000x1000"}
          imgAlt={"placeholder image"}
          title={'this is the headline'}
          tagline={"and this is the reason text"}
          ctaBtnTxt={"A Call to Action Baby!"}
          // ctaBtnAction={}

        />
      </div>
    </>
  );
};

export default Index;
