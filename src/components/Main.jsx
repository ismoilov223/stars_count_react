import React from "react";

function Main() {
  const [disNow, setDisNow] = React.useState(false);
  const clickBg = (e) => {
    setDisNow(true);
    e.target.className += " !bg-[#FC7614] !text-[#fff]";
  };
  return (
    <main>
      <section id="btns-cont" className="mt-6">
        <div className="btns-box flex items-center gap-4 md:gap-5">
          <button
            onClick={clickBg}
            disabled={disNow}
            className={
              "btn-number w-[42px] h-[42px] flex items-center justify-center rounded-full text-sm font-bold md:w-[51px] md:h-[51px] md:text-base hover:bg-[#7C8798] hover:text-[#fff] transition-all bg-[#262E38] text-[#7C8798]"
            }
          >
            1
          </button>
          <button
            onClick={clickBg}
            disabled={disNow}
            className={
              "btn-number w-[42px] h-[42px] flex items-center justify-center rounded-full text-sm font-bold md:w-[51px] md:h-[51px] md:text-base hover:bg-[#7C8798] hover:text-[#fff] transition-all bg-[#262E38] text-[#7C8798]"
            }
          >
            2
          </button>
          <button
            onClick={clickBg}
            disabled={disNow}
            className={
              "btn-number w-[42px] h-[42px] flex items-center justify-center rounded-full text-sm font-bold md:w-[51px] md:h-[51px] md:text-base hover:bg-[#7C8798] hover:text-[#fff] transition-all bg-[#262E38] text-[#7C8798]"
            }
          >
            3
          </button>
          <button
            onClick={clickBg}
            disabled={disNow}
            className={
              "btn-number w-[42px] h-[42px] flex items-center justify-center rounded-full text-sm font-bold md:w-[51px] md:h-[51px] md:text-base hover:bg-[#7C8798] hover:text-[#fff] transition-all bg-[#262E38] text-[#7C8798]"
            }
          >
            4
          </button>
          <button
            onClick={clickBg}
            disabled={disNow}
            className={
              "btn-number w-[42px] h-[42px] flex items-center justify-center rounded-full text-sm font-bold md:w-[51px] md:h-[51px] md:text-base hover:bg-[#7C8798] hover:text-[#fff] transition-all bg-[#262E38] text-[#7C8798]"
            }
          >
            5
          </button>
        </div>
        <div className="sub-box mt-6">
          <button className="w-full bg-[#FC7614] rounded-[22px] py-3 text-[#fff] text-sm font-bold tracking-[1.87px] md:tracking-[2px] md:text-[15px] hover:bg-[#fff] hover:text-[#FC7614] transition-colors">
            SUBMIT
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
