import Container from './Container';

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <Container>
      <header className="bg-black flex flex-col md:flex-row items-center justify-center gap-6 p-4 mt-[20px] md:mt-0">
        <img
          className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-full"
          src="https://inspgr.id/app/uploads/2019/12/photography-pavel-sablya-01.jpg"
          alt=""
        />
        <h2 className="text-md text-center md:text-xl text-amber-50">
          {title || (
            <>
              Welcome to Taste of the World. <br />
              An open, crowd-sourced database of recipes from around the world.{' '}
              <br />
              We offer a free recipe for anyone wanting to use it.
            </>
          )}
        </h2>
        <img
          className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-full"
          src="https://inspgr.id/app/uploads/2019/12/photography-pavel-sablya-01.jpg"
          alt=""
        />
      </header>
    </Container>
  );
}

export default Header;
