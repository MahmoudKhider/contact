import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="info">
            <div>
              <h2>Contact Info</h2>
              <ul className="in">
                <li>
                  <span style={{fontSize: '2rem', color: '#fff'}}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <br />
                  3456 Elsohada <br />
                  Elmenofia 048
                  <br />
                  2022
                </li>
                <br />
                <li>
                  <span style={{fontSize: '1.5rem', color: '#fff'}} >
                    <i className="fas fa-envelope"></i>
                  </span>
                  mahmoudAli556@gmail.com
                </li>
                <br />
                <li>
                  <span style={{fontSize: '2rem', color: '#fff'}}>
                    <i className="fas fa-phone-volume"></i>
                  </span>
                  <br />
                  235-764-1096
                </li>
              </ul>
            </div>
            <footer>
              <ul>
                <li style={{fontSize: '2rem'}}>
                  {" "}
                  <i className="fab fa-facebook-square"></i>
                </li>
                <li style={{fontSize: '2rem'}}>
                  {" "}
                  <i className="fab fa-linkedin"></i>
                </li>
                <li style={{fontSize: '2rem'}}>
                  {" "}
                  <i className="fab fa-instagram"></i>
                </li>
                <li style={{fontSize: '2rem'}}>
                  {" "}
                  <i className="fab fa-opera"></i>
                </li>
              </ul>
            </footer>
          </div>

          <div className="from">
            <div className="Box">
              <div className="rightside">
                <form action="">
                  <p> Name</p>
                  <input
                    type="text"
                    className="inputbox"
                    name="name"
                    required
                  />

                  <p>Gmail</p>
                  <input type="email" className="inputbox" name="" required />

                  <p>Gender</p>
                  <select className="inputbox" name="" required>
                    <option value="">--Select a Card Type--</option>
                    <option value="Visa">Male</option>
                    <option value="RuPay">Female</option>
                  </select>
                  <div className="exp">
                    <p className="exp_text">Age</p>
                    <input type="date" className="inputbox" name="" required />

                    <p className="exp_text2">Qualificatiom</p>
                    <input type="text" className="inputbox" name="" required />
                  </div>

                  <button type="submit" className="button">
                    Contact
                  </button>
                  <button type="submit" className="button">
                    Help
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
