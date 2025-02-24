import welcomeStyle from "./welcome.module.css";

export default function WelcomePage() {
  return (
    <>
      <div className={welcomeStyle.container}>
        <div>
          {/* <h1 className={welcomeStyle.title}>Bienvenido a Disney-app</h1> */}
          <strong className={welcomeStyle.subTitle}>
            Desarrollo con Node y React
          </strong>
          <p className={welcomeStyle.text}>
            ApiRest con Express y TypeScript <br />
            MySQL y Sequelize  <br />
            React con Redux y CSSModules
          </p>
        </div>

        <div className={welcomeStyle.containerImg}>
          <img
            src="./mickeyMouse.png"
            alt="mickey"
            className={welcomeStyle.mickey}
          />
        </div>
      </div>
    </>
  );
}
