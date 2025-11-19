import Link from "next/link";

const Copyright = () => {
  return (
    <div className="text-center text-[16px]">
      <p>
        © 2025 BiteLyfe by{" "}
        <Link
          target="_blank"
          href="https://themeforest.net/user/fbtemplates/portfolio"
        >
          Maisuradze Luka{" "}
        </Link>
        | All Rights Reserved
      </p>
    </div>
  );
};

export default Copyright;
