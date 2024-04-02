export default function ProductHeader() {
  return (
    <header className="w-full h-[320px] md:w-[689px] md:h-[252px] lg:w-[1111px] lg:h-[252px] md:mx-auto mb-[120px] flex flex-col gap-6 justify-center items-center text-center bg-Peach bg-[url('/images/web-design/desktop/bg-pattern-intro-web.svg')] bg-right-top md:bg-center bg-no-repeat md:rounded-[15px]">
      <h1 className="text-[2rem] text-White leading-[2.25rem] font-medium md:text-xl2">
        Web Design
      </h1>
      <p className="max-w-[350px] text-sm text-White  md:text-base">
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences.
      </p>
    </header>
  );
}
