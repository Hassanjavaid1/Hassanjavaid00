function Preloader() {
  return (
    <>
      <div className="preload bg-[#000000] flex justify-center items-center h-[100vh] fixed w-full z-40">
        <img
          src={"/preloader.gif"}
          className="preload max-w-full h-auto"
          alt="loader"
        />
      </div>
      <div className="hidden style-shadow preload-shadow bottom-0 z-50 md:block"></div>
    </>
  );
}

export default Preloader;
