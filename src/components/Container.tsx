const Container = ({ children }: { children: React.ReactNode }) => (
  <div className=" w-full px-5 md:max-w-480 tablet:max-w-screen-tablet tablet:px-8 desktop:max-w-screen-desktop desktop:px-104px">
    {children}
  </div>
);

export default Container;
