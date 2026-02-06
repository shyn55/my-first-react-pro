import Cards from "./cards";
import "./services.css";

function Services() {
  let cardsItem = [
    {
      icon: "bi bi-cone-striped",
      title: "Running shoes",
    },
    {
      icon: "bi bi-arrow-through-heart",
      title: "Football match",
    },
    {
      icon: "bi bi-balloon-fill",
      title: "Ball",
    },
    {
      icon: "bi bi-suitcase-lg",
      title: "Outfit",
    },
    {
      icon: "bi bi-sunglasses",
      title: "Sunglasses",
    },
    {
      icon: "bi bi-mortarboard",
      title: "cap",
    },
  ];

  return (
    <section id="services">
      <div class="container">
        <div class="section-info">
          <h2 class="section-title">SERVICES</h2>
          <p class="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="row">
          <Cards {...cardsItem[0]} />
          <Cards {...cardsItem[1]} />
          <Cards {...cardsItem[2]} />
          <Cards {...cardsItem[3]} />
          <Cards {...cardsItem[4]} />
          <Cards {...cardsItem[5]} />
        </div>
      </div>
    </section>
  );
}

export default Services;
