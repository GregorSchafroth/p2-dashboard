const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[100vh] flex justify-center relative p-20'>
      {children}
    </div>
  );
};

export default AuthLayout;
