import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <section className="main">
        <div className="main-content">
          <h1 className="main-heading">
            Ad Revenue
            <br /> Optimization Platform for E-commerce
          </h1>
          <p className="main-desc">
            We help content creators across the globe generate more revenue by
            connecting them to 50+ premium advertising exchanges, deploying
            cutting-edge ad serving technology, and providing hands-on ad
            operations expertise.
          </p>
          <div className="get-started">
            <NavLink to="/submit" className="btn btn-primary">
              Let's Get Started
            </NavLink>
          </div>
        </div>
        <div className="main-image">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="growth graph"
          />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
