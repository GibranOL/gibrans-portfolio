import miFoto from '../assets/images/Mi_presentacion.jpeg';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <img
        src={miFoto}
        alt="Gibran Oliva"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">Hi, I'm Gibran Oliva 👋</h1>
      <p className="text-lg max-w-xl">
        I'm a passionate Front-End Developer based in Vancouver, BC.  
        I enjoy building responsive, user-friendly web applications using React, TypeScript, and modern tools.  
        Currently expanding my skills in mobile development with React Native.
      </p>
    </section>
  );
}