export default function ProductHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="w-full h-[320px] md:w-[689px] md:h-[252px] lg:w-[1111px] lg:h-[252px] md:mx-auto mb-[120px] flex flex-col gap-6 justify-center items-center text-center bg-Peach bg-[url('/images/web-design/desktop/bg-pattern-intro-web.svg')] bg-right-top md:bg-center bg-no-repeat md:rounded-[15px]">
      <h1 className="text-[2rem] text-White leading-[2.25rem] font-medium md:text-xl2">
        {title}
      </h1>
      <p className="max-w-[400px] text-sm text-White  md:text-base">
        {description}
      </p>
    </header>
  );
}
