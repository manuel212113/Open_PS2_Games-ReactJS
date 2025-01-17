import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import heartblack from "../Games/heartblack.svg";
import heartred from "../Games/heartred.svg";
import data from "../../data.json";

const GamesCategory = () => {
  const { categoryURL } = useParams();
  function handleFavorite(idGame) {
    if (localStorage.getItem("liked" + idGame)) {
      document.getElementById(idGame).src = heartblack;

      localStorage.removeItem("liked" + idGame);
    } else {
      document.getElementById(idGame).src = heartred;
      localStorage.setItem("liked" + idGame, true);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container">
        <h2 className="game-title nav-title">{categoryURL}</h2>
      </div>
      <div class="mygames container" id="tourpackages-carousel">
        <div class="row">
          {data.Games.map((Gamx) => {
            return Gamx.Genre[0] === categoryURL ? (
              <div
                class="card-game col-xs-5 col-sm-6 col-md-4"
                id={"card" + Gamx.ID}
              >
                <div class="container caption">
                  <div className="image-container">
                    <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                      <img
                        src={Gamx.Icon}
                        alt="..."
                        className="mymainthumb img-thumbnail img-fluid"
                      ></img>
                    </Link>
                  </div>
                  <p className="plataform">PS2</p>
                  <p className="favorite">
                    <img
                      className=" heart"
                      id={Gamx.ID}
                      src={
                        localStorage.getItem("liked" + Gamx.ID)
                          ? heartred
                          : heartblack
                      }
                      alt="heart"
                      onClick={() => handleFavorite(Gamx.ID)}
                    ></img>
                  </p>

                  <h4 className="game-title">{Gamx.Name}</h4>
                  {/*(<p className="game-tags">{Gamx.Genre[0]}</p>*/}
                  {/* <p className="game-tags">{Gamx.Genre[1]}</p>*/}
                </div>
                <div className="button-container">
                  <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                    <button className="btn mybutton">Ver Página do Jogo</button>
                  </Link>
                </div>
              </div>
            ) : (
              Gamx.Genre[1] === categoryURL && (
                <div
                  class="card-game col-xs-5 col-sm-6 col-md-4"
                  id={"card" + Gamx.ID}
                >
                  <div class="container caption">
                    <div className="image-container">
                      <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                        <img
                          src={Gamx.Icon}
                          alt="..."
                          className="mymainthumb img-thumbnail img-fluid"
                        ></img>
                      </Link>
                    </div>
                    <p className="plataform">PS2</p>
                    <p className="favorite">
                      <img
                        className=" heart"
                        id={Gamx.ID}
                        src={
                          localStorage.getItem("liked" + Gamx.ID)
                            ? heartred
                            : heartblack
                        }
                        alt="heart"
                        onClick={() => handleFavorite(Gamx.ID)}
                      ></img>
                    </p>

                    <h4 className="game-title">{Gamx.Name}</h4>
                    {/*(<p className="game-tags">{Gamx.Genre[0]}</p>*/}
                    {/* <p className="game-tags">{Gamx.Genre[1]}</p>*/}
                  </div>
                  <div className="button-container">
                    <Link to={`/games/${Gamx.ID}/${Gamx.Name}`}>
                      <button className="btn mybutton">
                        Ver Página do Jogo
                      </button>
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};
export default GamesCategory;
