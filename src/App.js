import React from "react";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import image from "./component/static/blurpicture.jpg";
import image2 from "./component/static/carousel1.jpg";
import image3 from "./component/static/carousel2.jpg";
import image4 from "./component/static/carousel3.jpg";
import orgChart from "./component/static/AMC ORG CHART.png";
import "./component/body.css";
import "./component/bodyAnimation.js";
import { useEffect, useState } from "react";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    dots.forEach((dot) => {
      dot.textContent = "";
    });

    slides[index].style.display = "block";
  };

  useEffect(() => {
    showSlide(slideIndex);
  }, [slideIndex]);
  return (
    <div className="App">
      <Navbar />

      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src={image} className="cara1" />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src={image2} className="cara1" />
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src={image3} className="cara1" />
        </div>
      </div>
      <br />
      <h1 id="center">STRATEGIC PLAN</h1>

      <section>
        <div class="container reveal">
          <h1>ORGANIZATIONAL CHART</h1>
          <div class="text-container">
            <div class="text-box">
              <img id="orgchart" src={orgChart}></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container reveal">
          <h1>Mission</h1>
          <div class="text-container">
            <div class="text-box">
              <p>
                The nursing department is dedicated to provide high quality and
                equitable care services with compassion focusing on the unique
                needs of patients and their families while maintaining the
                safety of all and topromote a collaborative environment to
                assure specialized patient-centered care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container reveal">
          <h1>Vision</h1>
          <div class="text-container">
            <div class="text-box">
              <p>
                We envision the nursing department as one of the departments
                that provides exceptional care that helps the clients to reach
                their maximum level of health and well-being. We would be making
                a difference in the lives of the individuals whom we serve with
                compassion and commitment.
                <br />
                <br /> In the future, we ideate our department to reach the
                international-level standards of care to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container reveal">
          <h1>Philosophy</h1>
          <div class="text-container">
            <div class="text-box">
              <p>
                Relationship-based care. We emphasize the importance of creating
                strong, meaningful ties between patients, their families, and
                committed healthcare providers at the core of high-quality
                treatment, which is the heart of our nursing department’s
                philosophy. This concept serves as a guide for our team's
                dedication to provide outstanding medical services based on
                relationship-based principles. We believe we can improve the
                overall quality of care and contribute to the wellbeing of our
                clients and their families by fostering strong, respectful, and
                collaborative connections. <br /> <br /> A successful treatment
                and nursing procedure will always have something to do with the
                relationship of the client and his healthcare provider. We treat
                every individual equally and in accordance with our own
                standard. We put forth every effort to provide them with the
                best possible treatment by treating them holistically, we make
                sure that they are strong physically, mentally, and spiritually.
                Our team guides them until they achieve their optimal state of
                health and wellbeing. We are faithful to our own values when
                providing care for our patients. By upholding these principles,
                we endeavor to elevate the well-being and experiences of our
                patients and their families. Our health care team takes pride in
                offering the best care possible by serving them with passion,
                commitment and through relationship-based care.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container reveal">
          <h1>Goals</h1>
          <div class="text-container">
            <div class="text-box">
              <ul id="justify">
                <li>Patient Safety</li>
                <li>Quality of Care</li>
                <li>Patient Satisfaction</li>
                <li>Continuity of Care</li>
              </ul>
              <ul>
                <li>Efficiency and Productivity</li>
                <li>Interdisciplinary Collaboration</li>
                <li>Diversity and Inclusion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container reveal">
          <h1>Objectives</h1>
          <div class="text-container">
            <div class="text-box">
              <ul>
                <li>
                  To maintain the good reputation of the department in ensuring
                  the safety of the clients by preventing hospital-acquired
                  diseases to occur, by making sure to have fewer medical errors
                  and by applying the evidence-based practices as a form of
                  care.
                </li>
                <br />
                <li>
                  To yield patient satisfaction from the overall experience of
                  receiving care from the healthcare provider team.
                </li>
                <br />
                <li>
                  To maximize productivity every shift by collaborating with
                  other healthcare workers in providing the care that each
                  client needs.
                </li>
                <br />
                <li>
                  To ensure the comfortability and equal care given to every
                  client regardless of their cultural background as well as the
                  healthcare providers with one another.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div class="footer">
  <p>© 2001 - 2023 Ace Medical Center
  </p>
</div>
    </div>
  );
}

export default App;
