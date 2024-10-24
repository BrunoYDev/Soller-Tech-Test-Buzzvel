import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  overflow-y: hidden;
  background-color: #581c87;
  z-index: 2;

  h2 {
    margin-top: 50px;
    padding: 0;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    color: #fcd34d;
  }
  h3 {
    margin-top: 20px;
    padding: 0;
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    color: #ffff;
  }
  h4 {
    margin-top: 20px;
    padding: 0;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    color: #ffff;
  }

  img {
    margin-top: 20px;
    width: 350px;
    height: 200px;
  }

  #subContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    #buttonContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    height: 100vh;
    overflow-x: hidden;
    padding-top: 60px;
    #subContainer{
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        #buttonContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 110px 0px 0;
        }

        #textContainer{
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0 0 0 70px;

        h2{
            margin: 0;
            padding: 0;
            font-weight: 500;
            font-size: 20px;
        }

        h3{
            margin: 0;
            padding: 0;
            width: 75%;
            font-weight: 800;
            font-size: 48px;
            text-align: start;
        }
    }
    }    
    img{
        width: 80%;
        height: 80%;
    }
  }
`;

export const PurpleCircle = styled.div`
  width: 365px;
  height: 365px;
  background-color: #a855f7;

  position: absolute;
  border-radius: 100%;
  z-index: -1;

  /* Mobile (above 768px) */
  @media (max-width: 768px) {
    bottom: -200px;
    left: -150px;
  }

  /* Desktop (above 1024px) */
  @media (min-width: 1024px) {
    width: 700px;
    height: 700px;
    top: -270px;
    right: -90px;
  }
`;
