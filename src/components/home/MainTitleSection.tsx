const MainTitleSection = () => {
  return (
    <section className="w-full flex flex-col items-center place-items-center before:absolute before:h-[200px] before:w-full sm:before:w-[300px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
      <h1 className="text-6xl text-gray-700">H Studio</h1>
      <h2 className="text-lg text-gray-700">에이치 스튜디오</h2>
    </section>
  );
};

export default MainTitleSection;
