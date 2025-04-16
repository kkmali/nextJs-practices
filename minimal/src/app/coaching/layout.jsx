import CoachingAsideBar from "../components/generic/CoachingAsideBar";

function CoachingLayout({ children }) {

  return (
    <>
      <section className="md:py-12 py-6 ">
        <div className="container ">
          <div className="flex md:flex-row flex-col md:gap-12 gap-6 " >
            <CoachingAsideBar />
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default CoachingLayout;
