const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?cs=srgb&dl=pexels-felix-mittermeier-1205301.jpg&fm=jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Stars...✨!!</h4>
              <p>
                A star is an astronomical object comprising a luminous spheroid
                of plasma held together by self-gravity.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://w.forfun.com/fetch/52/52ec3a96c2ffd0943503b472ecf14c02.jpeg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Black Hole...🕳️!!</h4>
              <p>
                A black hole is a region of spacetime where gravity is so strong
                that nothing, including light or other electromagnetic waves,
                has enough energy to escape it.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.sciencealert.com/images/2023/02/spherical-explosion-art.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h4>Neutron star...🌟!!</h4>
              <p>
                A neutron star is the collapsed core of a massive supergiant
                star.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      <div class="col-lg-4 col-md-6 px-3 wow fadeInUp" data-wow-delay="0.1s">
        <div class="team-item position-relative">
          <img
            class="img-fluid rounded "
            src="https://i.pinimg.com/originals/f9/3f/6b/f93f6b9b9953ad014e1b12092c20117c.jpg"
            alt=""
          />
          <span class="new">Planets.....</span>
          <div class="team-text bg-white rounded-end p-4 ">
            <i class="fa fa-arrow-right fa-2x text-primary"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
