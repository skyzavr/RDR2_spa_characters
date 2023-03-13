import Header from './Elements/Header/header';
import classes from './home.module.css';
import Outlaws from '../assets/images/others/Outlaws';
import ForLife from '../assets/images/others/ForLife';
import PS4 from '../assets/images/logo/PS4';
import XBOXONE from '../assets/images/logo/XBOXONE';
import { useState, useRef, useEffect } from 'react';
const Home = () => {
  // const myRef = useRef();

  return (
    <div className={`${classes.wrapper} `}>
      <Header />
      {/* <main> */}
      <section className={classes.main}>
        <div className={classes.contentContainer}>
          <div className={classes.mainQuote}>
            <div className={classes.outlaws}>
              <Outlaws />
            </div>
            <div className={classes.forLife}>
              <ForLife />
            </div>
          </div>
          <div className={classes.title}>
            <p>From fan to fan</p>
          </div>
          <div className={classes.disclaimer}>
            <p>This app has nothing to do with R* or the game</p>
          </div>
        </div>
      </section>

      <section
        // ref={myRef}

        id="about"
        className={`${classes.About} `}
      >
        <div className={`${classes.contentContainer} `}>
          {/* ${classes.more} ${classes[clas]} */}
          <div className={`${classes.Releases} ${classes.more}`}>
            <div className={classes.gameRelease}>GAME RELEASES</div>
            <div className={classes.GameRealeseItem}>
              <div className={classes.ReleaseInfo}>
                <div className={classes.data}>October 26, 2018</div>
                <div className={classes.logo}>
                  <PS4 />
                  <XBOXONE />
                </div>
              </div>
              {/* <div className={classes.ReleaseInfo}>
                <div className={classes.data}>November 5, 2019</div>
                <div className={classes.logo}>
                  <PC />
                </div>
              </div> */}
            </div>
            <div className={classes.developers}>
              <div>
                <div className={classes.developerItem}>PUBLISHER</div>
                <div className={classes.developerName}>Rockstar Studios</div>
              </div>
              <div>
                <div className={classes.developerItem}>DEVELOPER</div>
                <div className={classes.developerName}>Rockstar Studios</div>
              </div>
            </div>
          </div>
          <div className={`${classes.gameDesc} ${classes.more}`}>
            <p>
              <strong>America, 1899.</strong> The end of the wild west era has
              begun as lawmen hunt down the last remaining outlaw gangs. Those
              who will not surrender or succumb are killed.
            </p>
            <p>
              After a robbery goes badly wrong in the western town of
              Blackwater, Arthur Morgan and the Van der Linde Gang are forced to
              flee. With federal agents and the best bounty hunters in the
              nation massing on their heels, the gang must rob, steal and fight
              their way across the rugged heartland of America in order to
              survive. As deepening internal divisions threaten to tear the gang
              apart, Arthur must make a choice between his own ideals and
              loyalty to the gang who raised him.
            </p>
            <p>
              Developed by the creators of Grand Theft Auto V and Red Dead
              Redemption, Red Dead Redemption 2 is an epic tale of life in
              America’s unforgiving heartland.{' '}
            </p>
          </div>
        </div>
      </section>
      {/* </main> */}
    </div>
  );
};
export default Home;
